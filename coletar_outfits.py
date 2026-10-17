#!/usr/bin/env python3
"""
Coleta os itens necessários para outfits e addons (TibiaWiki em inglês, tibia.fandom.com) e gera
outfits-dados.js para a página outfits.html.

Uso:  python coletar_outfits.py            (baixa só as imagens que faltam)
      python coletar_outfits.py --forcar-img

Fonte: seções "Required Equipment"/"Required Items" das páginas "<Outfit> Outfits Quest/Spoiler".
O formato dessas páginas varia, então há uma lista de correções manuais (CORRECOES) logo abaixo.
"""
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

API = "https://tibia.fandom.com/api.php"
WIKI = "https://tibia.fandom.com/wiki/"
USER_AGENT = "Mozilla/5.0 (compatible; PainelBossesPessoal/1.0; painel offline de uso pessoal)"
PAUSA = 0.6

BASE = os.path.dirname(os.path.abspath(__file__))
ARQ_SAIDA = os.path.join(BASE, "outfits-dados.js")
DIR_OUTFITS = os.path.join(BASE, "img", "outfits")
DIR_ITENS = os.path.join(BASE, "img", "itens-outfit")

# ---------------------------------------------------------------------------------------------
# Correções manuais. Chave: nome do outfit (sem " Outfits").
#   "ignorar": True                       -> não entra na tabela
#   "partes": [...]                       -> substitui tudo o que foi extraído
#   "remover": ["nome"]                   -> tira itens que não são itens (links para quests etc.)
#   "addon": {"nome da seção": n}         -> corrige o número do addon de uma seção
# ---------------------------------------------------------------------------------------------
VARINHAS = ["Wand of Vortex", "Wand of Dragonbreath", "Wand of Decay", "Wand of Cosmic Energy", "Wand of Inferno",
            "Snakebite Rod", "Moonlight Rod", "Necrotic Rod", "Terra Rod", "Hailstorm Rod"]
CORRECOES = {
    "Demon Hunter": {"secao": {"?": (0, "Outfit (missões da The Inquisition Quest)")}},
    "Pirate": {"remover": ["The_Shattered_Isles_Quest/Spoiler#Access_to_Meriana", "Meriana Quest"]},
    "Oriental": {"remover": ["Tibian Explorer Society"]},
    "Wayfarer": {"remover": ["The Spirit Will Get You Quest"]},
    "Warmaster": {"addon": {"Kabuto Addon": 2}},
    "Yalaharian": {"addon": {"Villain Addon": 2}},
    "Afflicted": {"partes": [
        {"parte": 0, "secao": "Outfit", "itens": [{"item": n, "qtd": 1} for n in (
            "Luminous Piece of Cloth", "Obvious Piece of Cloth", "Dubious Piece of Cloth",
            "Voluminous Piece of Cloth", "Ominous Piece of Cloth", "Ludicrous Piece of Cloth")]},
        {"parte": 1, "secao": "Plague Mask", "itens": [{"item": "Plague Mask", "qtd": 1}]},
        {"parte": 2, "secao": "Plague Bell", "itens": [{"item": "Plague Bell", "qtd": 1}]},
    ]},
}

# Outfits cujas páginas não têm a seção "Required Equipment" (lidos à mão na TibiaWiki em inglês, out/2026)
def _P(parte, secao, *itens):
    return {"parte": parte, "secao": secao, "itens": [{"item": n, "qtd": q, "obs": o} for q, n, o in
                                                       [(i + (None,))[:3] if len(i) == 2 else i for i in itens]]}
CORRECOES.update({
    "Jester": {"partes": [
        _P(0, "Outfit", (2, "Kitchen Knife"), (1, "Spoon"), (18, "Vial", "cheios de vinho"), (24, "Flour"),
           (1, "Red Piece of Cloth"), (1, "Blue Piece of Cloth"), (1, "Yellow Piece of Cloth"), (1, "Green Piece of Cloth")),
        _P(1, "Jester Staff", (1, "Spider Silk"), (4, "Minotaur Leather")),
        _P(2, "Jester Hat", (5, "White Piece of Cloth")),
    ]},
    "Nightmare": {"partes": [
        _P(1, "Shield/Lance", (500, "Demonic Essence", "missão 5 da Dreamer's Challenge Quest; vale para Nightmare ou Brotherhood, conforme o lado escolhido")),
    ]},
    "Festive": {"partes": [_P(1, "Addon 1", (3, "Porcelain Mask")), _P(2, "Addon 2", (50, "Colourful Feather"))]},
    "Elementalist": {"partes": [
        _P(0, "Outfit", (20, "Slime Mould", "ondas da quest; também dá para comprar de jogadores")),
        _P(1, "Cape Addon", (1, "Mage's Cap", "dropado pelo Mad Mage na última onda")),
    ]},
    "Dream Warrior": {"partes": [_P(1, "First Addon", (5, "Pomegranate")), _P(2, "Second Addon", (1, "Ice Shield"))]},
    "Battle Mage": {"partes": [_P(1, "First Addon", (5, "Sturdy Book")), _P(2, "Second Addon", (20, "Epaulette"))]},
    "Rift Warrior": {"partes": [_P(1, "Addon 1", (100, "Silver Token")), _P(2, "Addon 2", (100, "Silver Token"))]},
    "Crystal Warlord": {"partes": [
        _P(0, "Outfit", (20, "Major Crystalline Token", "troca com Gnomally por um Gnomish Voucher")),
        _P(1, "Cape and Mask", (70, "Minor Crystalline Token", "troca com Gnomally por um Gnomish Voucher")),
        _P(2, "Shield and Club", (1, "Gnomish Voucher Type CA2", "chance ao abrir Gnomish Supply Packages")),
    ]},
    "Soil Guardian": {"partes": [
        _P(0, "Outfit", (20, "Major Crystalline Token", "troca com Gnomally por um Gnomish Voucher")),
        _P(1, "Cape", (70, "Minor Crystalline Token", "troca com Gnomally por um Gnomish Voucher")),
        _P(2, "Shield", (1, "Gnomish Voucher Type MA2", "chance ao abrir Gnomish Supply Packages")),
    ]},
    "Cave Explorer": {"partes": [
        _P(0, "Outfit", (1000, "Gold Coin", "com 100 fame points na The Spike")),
        _P(1, "Headware", (2000, "Gold Coin")), _P(2, "Grappling Hook", (3000, "Gold Coin")),
    ]},
    "Makeshift Warrior": {"partes": [
        _P(0, "Outfit", (1, "Plan for a Makeshift Armour", "The Baron from Below (Warzone 4)")),
        _P(1, "Shield and Weapon", (1, "Crude Wood Planks", "The Duke of the Depths (Warzone 6)")),
        _P(2, "Tinged Pot", (1, "Tinged Pot", "The Count of the Core (Warzone 5)")),
    ]},
    "Dream Warden": {"partes": [
        _P(1, "Mask", (1, "Dream Warden Mask", "bosses da Roshamuul Prison")),
        _P(2, "Claw", (1, "Dream Warden Claw", "Unrealized Dreams ou Gaz'haragoth")),
    ]},
    "Citizen of Issavi": {"partes": [
        _P(1, "First Addon", (1, "Eye-Embroidered Veil")), _P(2, "Second Addon", (1, "Tagralt-Inlaid Scabbard")),
    ]},
    "Ancient Aucar": {"partes": [
        _P(1, "Addon 1", (1, "Broken Iks Headpiece", "usado na luta contra o Ahau"), (1, "Broken Iks Cuirass"),
           (1, "Broken Iks Faulds"), (1, "Broken Iks Sandals")),
    ]},
})

# observações da wiki em inglês, traduzidas (as que não estiverem aqui aparecem como vieram)
OBS_PT = {
    "or Heavy Machete": "ou Heavy Machete",
    "Mead, Wine or Rum (to speak with Vescu)": "ou Mead, Wine ou Rum (para falar com o Vescu)",
    "= 100 Spider Silks": "= 100 Spider Silks",
    "extracted from 2 Royal Helmets": "troque 2 Royal Helmets com os Djinns",
    "extracted from 4 Warrior Helmets": "troque 4 Warrior Helmets com os Djinns",
    "Marina can make 1 Spool of Yarn in exchange for 10 Spider Silk": "a Marina faz 1 Spool of Yarn com 10 Spider Silk",
    "Obtained from A Sweaty Cyclops by trading a Giant Sword": "troque uma Giant Sword com o A Sweaty Cyclops",
    "or Magic Rope": "ou Magic Rope",
    "flower": "flor",
    "from a hydra cave": "de uma caverna de hydras",
    "from Orc Fortress": "da Orc Fortress",
    "or": "ou acesso ao Cult Cave mais fundo (todos os versos do Hymn)",
    "(Trade Boots of Haste)": "troque Boots of Haste",
    "Trade Boots of Haste": "troque Boots of Haste",
    "Trade Crown Armor": "troque uma Crown Armor com o A Sweaty Cyclops",
    "Trade Dragon Shield": "troque um Dragon Shield com o A Sweaty Cyclops",
    "Trade Devil Helmet": "troque um Devil Helmet com o A Sweaty Cyclops",
    "or Variable amounts of Empty Vials (minimum of 100, average of 10,000)": "ganho entregando frascos vazios (no mínimo 100; em média 10.000)",
    "Only if you haven't completed the Pirate Outfit yet.": "só se você ainda não entregou ao Chondur (ex.: na Pirate Quest ou em Goroma)",
    "obtained through the Children of the Revolution Quest": "da Children of the Revolution Quest",
    "obtained through the Unnatural Selection Quest": "da Unnatural Selection Quest",
    "reward from A Father's Burden Quest": "recompensa da A Father's Burden Quest",
    "reward from An Interest In Botany Quest": "recompensa da An Interest In Botany Quest",
    "obtained through the Blood Brothers Quest": "da Blood Brothers Quest",
}
CORRECOES.setdefault("Summoner", {})["remover"] = ["Vial"]
CORRECOES.setdefault("Demon Hunter", {})["remover"] = ["Garlic Necklace"]

# troca de itens dentro de uma seção (ex.: "Wands" = uma de cada varinha/rod antiga)
SUBSTITUIR_ITEM = {"Wands": [{"item": n, "qtd": 1} for n in VARINHAS]}
# nomes que a wiki usa para dinheiro
DINHEIRO = {"gp": "Gold Coin"}

_ultima = [0.0]


def _get(url, referer=None):
    espera = PAUSA - (time.time() - _ultima[0])
    if espera > 0:
        time.sleep(espera)
    h = {"User-Agent": USER_AGENT}
    if referer or "nocookie.net" in url:
        h["Referer"] = "https://tibia.fandom.com/"
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=30) as r:
            return r.read()
    finally:
        _ultima[0] = time.time()


def api(**p):
    p["format"] = "json"
    return json.loads(_get(API + "?" + urllib.parse.urlencode(p)))


def conteudo(titulos):
    """{titulo_pedido: wikitext} seguindo redirects."""
    res = {}
    for i in range(0, len(titulos), 40):
        lote = titulos[i:i + 40]
        d = api(action="query", prop="revisions", rvprop="content", rvslots="main",
                titles="|".join(lote), redirects=1)
        q = d.get("query", {})
        volta = {}
        for n in q.get("normalized", []):
            volta[n["to"]] = n["from"]
        for n in q.get("redirects", []):
            volta[n["to"]] = volta.get(n["from"], n["from"])
        for p in q.get("pages", {}).values():
            if "revisions" in p:
                res[volta.get(p["title"], p["title"])] = (p["title"], p["revisions"][0]["slots"]["main"]["*"])
    return res


def slug(t):
    return re.sub(r"[^a-z0-9]+", "-", t.lower().replace("'", "")).strip("-")


def limpa(t):
    t = re.sub(r"\{\{[^{}]*\}\}", "", t)
    t = re.sub(r"\[\[(?:[^\]|]*\|)?([^\]]*)\]\]", r"\1", t)
    t = re.sub(r"'''?|<[^>]+>", "", t)
    return re.sub(r"\s+", " ", t).strip(" .,;:-")


def genero(secao):
    s = secao.lower()
    m = bool(re.search(r"\bmales?\b|\(male\)", s))
    f = bool(re.search(r"\bfemales?\b|\(female\)", s))
    if m and not f:
        return "m"
    if f and not m:
        return "f"
    return None


def parse_spoiler(w):
    heads = [(m.start(), len(m.group(1)), m.group(2).strip()) for m in re.finditer(r"^(=+)\s*(.*?)\s*\1\s*$", w, re.M)]
    partes, n_addon = [], 0
    for i, (pos, lvl, nome) in enumerate(heads):
        if not re.search(r"Required (Equipment|Items)", nome, re.I):
            continue
        dono = next((h for h in reversed(heads[:i]) if h[1] < lvl), None)
        fim = heads[i + 1][0] if i + 1 < len(heads) else len(w)
        itens = []
        for linha in w[pos:fim].splitlines():
            if not re.match(r"^\*[^*]", linha):
                continue
            linha = re.sub(r"\{\{Ilink\|[^}]*\}\}", "", linha)
            m = re.search(r"\[\[([^\]|]+)(?:\|([^\]]*))?\]\]", linha)
            if not m:
                continue
            q = re.search(r"(\d[\d,.]*)", linha[:m.start()])
            obs = re.sub(r"^(e?s)(\s+|$)", "", limpa(linha[m.end():])).strip()
            obs = obs[1:-1] if obs.startswith("(") and obs.endswith(")") else obs
            itens.append({"item": m.group(1).strip(), "qtd": int(q.group(1).replace(",", "").replace(".", "")) if q else 1,
                          "obs": obs or None})
        secao = dono[2] if dono else "?"
        corpo = w[dono[0]:fim] if dono else ""
        add = re.search(r"Addon[ _](\d)\.gif", corpo)
        if re.match(r"(basic |base )?outfit\b", secao, re.I):
            parte = 0
        elif add and add.group(1) in ("1", "2"):
            parte = int(add.group(1))
        else:
            parte = None
        partes.append({"parte": parte, "secao": limpa(secao), "genero": genero(secao), "itens": itens})
    return partes


def dropado_por(wt):
    m = re.search(r"\|\s*droppedby\s*=\s*\{\{Dropped By\|([^}]*)\}\}", wt)
    if not m:
        return []
    return [x.strip() for x in m.group(1).split("|") if x.strip() and "=" not in x]


def baixar_imagens(nomes_arquivo, pasta, forcar):
    """nomes_arquivo: {chave: (arquivo na wiki, nome local)} -> {chave: caminho relativo}"""
    res, faltam = {}, {}
    for chave, (arq, local) in nomes_arquivo.items():
        destino = os.path.join(pasta, local)
        if os.path.exists(destino) and not forcar:
            res[chave] = os.path.relpath(destino, BASE).replace("\\", "/")
        else:
            faltam[chave] = (arq, local)
    itens = list(faltam.items())
    for i in range(0, len(itens), 40):
        lote = itens[i:i + 40]
        d = api(action="query", prop="imageinfo", iiprop="url", titles="|".join("File:" + a for _, (a, _) in lote))
        q = d.get("query", {})
        norm = {n["to"]: n["from"] for n in q.get("normalized", [])}
        urls = {}
        for p in q.get("pages", {}).values():
            if p.get("imageinfo"):
                urls[norm.get(p["title"], p["title"]).split(":", 1)[1]] = p["imageinfo"][0]["url"]
        for chave, (arq, local) in lote:
            if arq in urls:
                destino = os.path.join(pasta, local)
                with open(destino, "wb") as f:
                    f.write(_get(urls[arq]))
                print("  baixado", os.path.relpath(destino, BASE))
                res[chave] = os.path.relpath(destino, BASE).replace("\\", "/")
    return res


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except AttributeError:
        pass
    forcar = "--forcar-img" in sys.argv
    for pasta in (DIR_OUTFITS, DIR_ITENS):
        os.makedirs(pasta, exist_ok=True)

    print("Lendo a lista de outfits...")
    cat = api(action="query", list="categorymembers", cmtitle="Category:Outfits", cmlimit=500)
    nomes = sorted(x["title"][:-len(" Outfits")] for x in cat["query"]["categorymembers"] if x["title"].endswith(" Outfits"))
    spoilers = conteudo([n + " Outfits Quest/Spoiler" for n in nomes])
    quests = conteudo([n + " Outfits Quest" for n in nomes])

    outfits = []
    for n in nomes:
        corr = CORRECOES.get(n, {})
        if corr.get("ignorar"):
            continue
        sp = spoilers.get(n + " Outfits Quest/Spoiler")
        partes = corr.get("partes") or (parse_spoiler(sp[1]) if sp else [])
        for p in partes:
            p["secao"] = p.get("secao") or ""
            if p["secao"] in corr.get("secao", {}):
                p["parte"], p["secao"] = corr["secao"][p["secao"]]
            if p["secao"] in corr.get("addon", {}):
                p["parte"] = corr["addon"][p["secao"]]
            p.setdefault("genero", genero(p["secao"]))
            novos = []
            for it in p["itens"]:
                if it["item"] in corr.get("remover", []):
                    continue
                if it["item"] in SUBSTITUIR_ITEM:
                    novos += [dict(x) for x in SUBSTITUIR_ITEM[it["item"]]]
                    continue
                it["item"] = DINHEIRO.get(it["item"], it["item"])
                if it.get("obs"):
                    it["obs"] = OBS_PT.get(it["obs"], it["obs"])
                if it["item"] == "Winning Lottery Ticket" and not it.get("obs"):
                    it["obs"] = OBS_PT["or Variable amounts of Empty Vials (minimum of 100, average of 10,000)"]
                novos.append(it)
            p["itens"] = novos
        # addons sem número: na ordem em que aparecem (1, depois 2)
        prox = 1
        for p in partes:
            if p["parte"] is None:
                p["parte"] = min(prox, 2)
            if p["parte"] in (1, 2):
                prox = p["parte"] + 1 if p["genero"] is None else prox
        partes = [p for p in partes if p["itens"]]
        if not partes:
            continue
        q = quests.get(n + " Outfits Quest")
        lvl = None
        if q:
            m = re.search(r"\|\s*lvlrec\s*=\s*([^\n|]*)", q[1])
            lvl = limpa(m.group(1)) if m else None
        outfits.append({"nome": n, "pagina": n + " Outfits", "quest": (q[0] if q else None),
                        "level": lvl if lvl and lvl not in ("0", "-") else None, "partes": partes})
    print(len(outfits), "outfits com itens")

    # nomes canônicos dos itens (redirects) e dados de cada item
    todos = sorted({it["item"] for o in outfits for p in o["partes"] for it in p["itens"]})
    pags = conteudo(todos)
    canon = {n: pags[n][0] if n in pags else n for n in todos}
    for o in outfits:
        for p in o["partes"]:
            for it in p["itens"]:
                it["item"] = canon[it["item"]]
    itens = {}
    for n in sorted(set(canon.values())):
        wt = next((v[1] for k, v in pags.items() if v[0] == n), "")
        itens[n] = {"link": WIKI + urllib.parse.quote(n.replace(" ", "_")), "dropadoPor": dropado_por(wt)}

    print("Imagens dos itens...")
    spr = baixar_imagens({n: (n + ".gif", slug(n) + ".gif") for n in itens}, DIR_ITENS, forcar)
    for n in itens:
        itens[n]["sprite"] = spr.get(n)
    print("Imagens dos outfits...")
    pedidos = {}
    for o in outfits:
        for g, G in (("m", "Male"), ("f", "Female")):
            pedidos[(o["nome"], g)] = ("Outfit %s %s Addon 3.gif" % (o["nome"], G), "%s-%s.gif" % (slug(o["nome"]), g))
    spr = baixar_imagens(pedidos, DIR_OUTFITS, forcar)
    for o in outfits:
        o["sprite"] = {"m": spr.get((o["nome"], "m")), "f": spr.get((o["nome"], "f"))}

    with open(ARQ_SAIDA, "w", encoding="utf-8") as f:
        f.write("// Gerado por coletar_outfits.py (TibiaWiki em inglês). Não edite à mão: rode o script.\n")
        f.write("window.OUTFITS = " + json.dumps(outfits, ensure_ascii=False, indent=1) + ";\n")
        f.write("window.ITENS_OUTFIT = " + json.dumps(itens, ensure_ascii=False, indent=1) + ";\n")
    sem = [n for n in itens if not itens[n]["sprite"]]
    print("\nPronto:", len(outfits), "outfits,", len(itens), "itens. Itens sem imagem:", sem)
    print("Outfits sem imagem:", [o["nome"] for o in outfits if not o["sprite"]["m"]])


if __name__ == "__main__":
    main()
