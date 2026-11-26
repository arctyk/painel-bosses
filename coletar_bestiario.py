#!/usr/bin/env python3
"""
Coleta o bestiário completo e gera bestiario-dados.js para a página bestiario.html.

Uso:  python coletar_bestiario.py            (baixa só as imagens que faltam)
      python coletar_bestiario.py --forcar-img

Fontes:
  - TibiaWiki em inglês (tibia.fandom.com), categoria "Bestiary Creatures": nome, classe, dificuldade,
    raridade, HP, XP e locais de cada criatura.
  - TibiaPal (tibiapal.com/bestiary): respawn sugerido e tempo estimado (Easy < 2h, Medium, Hard > 5h)
    para as criaturas que valem a pena completar.
Pontos e kills seguem a tabela oficial (página Cyclopedia da TibiaWiki).
"""
import html
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

API = "https://tibia.fandom.com/api.php"
TIBIAPAL = "https://tibiapal.com/bestiary"
USER_AGENT = "Mozilla/5.0 (compatible; PainelBossesPessoal/1.0; painel offline de uso pessoal)"
PAUSA = 0.6

BASE = os.path.dirname(os.path.abspath(__file__))
ARQ_SAIDA = os.path.join(BASE, "bestiario-dados.js")
DIR_IMG = os.path.join(BASE, "img", "bestiario")

# dificuldade -> (kills comum, pontos comum, pontos Very Rare). Very Rare sempre pede 5 kills.
TABELA = {
    "Harmless": (25, 1, 5),
    "Trivial": (250, 5, 10),
    "Easy": (500, 15, 30),
    "Medium": (1000, 25, 50),
    "Hard": (2500, 50, 100),
    "Challenging": (5000, 100, 200),
}

# charm points por matar o Echo Warden da criatura pela primeira vez (Echo Raids, Summer Update 2026)
WARDEN = {"Harmless": 1, "Trivial": 2, "Easy": 5, "Medium": 10, "Hard": 15, "Challenging": 30}

ICONES = {  # arquivo na wiki -> img/bestiario-icones/
    "Echo Warden Indicator Icon.png": "echo-warden.png",
    "Animus Mastery Icon.png": "animus-mastery.png",
}

# nomes do TibiaPal (com erro de digitação ou agrupados) -> nomes na wiki
APELIDOS_TIBIAPAL = {
    "fish": ["Fish (Creature)"],
    "northern pike": ["Northern Pike (Creature)"],
    "butterfly (purple/blue/red)": ["Butterfly (Purple)", "Butterfly (Blue)", "Butterfly (Red)"],
    "minotaur cult propher": ["Minotaur Cult Prophet"],
    "menancing carnivor": ["Menacing Carnivor"],
    "brimstone bugs": ["Brimstone Bug"],
    "nomad": ["Nomad (Basic)", "Nomad (Blue)", "Nomad (Female)"],
    "barbarian headhunter": ["Barbarian Headsplitter"],
    "monk": ["Monk (Creature)"],
    "pirate bucaneer": ["Pirate Buccaneer"],
    "dragon lord hatching": ["Dragon Lord Hatchling"],
    "dragon hatching": ["Dragon Hatchling"],
    "efreet/marid": ["Efreet", "Marid"],
    "horse (gray/brown/taupe)": ["Horse (Grey)", "Horse (Brown)", "Horse (Taupe)"],
}

_ultima = [0.0]


def _get(url, referer=False):
    espera = PAUSA - (time.time() - _ultima[0])
    if espera > 0:
        time.sleep(espera)
    h = {"User-Agent": USER_AGENT}
    if referer or "nocookie.net" in url:
        h["Referer"] = "https://tibia.fandom.com/"
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=40) as r:
            return r.read()
    finally:
        _ultima[0] = time.time()


def api(**p):
    p["format"] = "json"
    return json.loads(_get(API + "?" + urllib.parse.urlencode(p)))


def slug(t):
    return re.sub(r"[^a-z0-9]+", "-", t.lower().replace("'", "")).strip("-")


def limpa(t):
    t = re.sub(r"<br\s*/?>", ", ", t or "")
    t = re.sub(r"\{\{[^{}]*\}\}", "", t)
    t = re.sub(r"\[\[(?:[^\]|]*\|)?([^\]]*)\]\]", r"\1", t)
    t = re.sub(r"\[https?://\S+ ([^\]]*)\]", r"\1", t)
    t = re.sub(r"'''?|<[^>]+>", "", t)
    t = re.sub(r"\s*\(\s*(?:[,;]|and|or)?\s*\)", "", t)   # parênteses que ficaram vazios sem as predefinições
    return re.sub(r"\s+", " ", t).strip(" .,;")


def membros_categoria(cat):
    nomes, cont = [], {}
    while True:
        d = api(action="query", list="categorymembers", cmtitle=cat, cmlimit=500, cmnamespace=0, **cont)
        nomes += [x["title"] for x in d["query"]["categorymembers"]]
        if "continue" not in d:
            return nomes
        cont = {"cmcontinue": d["continue"]["cmcontinue"]}


def infoboxes(titulos):
    res = {}
    for i in range(0, len(titulos), 50):
        d = api(action="query", prop="revisions", rvprop="content", rvslots="main", titles="|".join(titulos[i:i + 50]))
        for p in d["query"]["pages"].values():
            if "revisions" not in p:
                continue
            w = p["revisions"][0]["slots"]["main"]["*"]
            campos, chave = {}, None
            for linha in w.splitlines():
                m = re.match(r"^\|\s*(\w+)\s*=(.*)$", linha)
                if m:
                    # setdefault: predefinições aninhadas (loot etc.) não sobrescrevem campos do infobox
                    chave = m.group(1) if m.group(1) not in campos else None
                    if chave:
                        campos[chave] = m.group(2).strip()
                elif linha.startswith("}}"):
                    chave = None
                elif chave:
                    campos[chave] += " " + linha.strip()
            res[p["title"]] = campos
        print("  infobox %d/%d" % (min(i + 50, len(titulos)), len(titulos)))
    return res


# o TibiaPal separa as criaturas em 3 tabelas, nesta ordem
MODOS_TIBIAPAL = ["1x", "rapid", "evento"]


def tibiapal():
    """{nome: (pontos, tempo, respawn, [modos])}  modos: "1x", "rapid" e/ou "evento" (tabela onde aparece)"""
    try:
        h = _get(TIBIAPAL).decode("utf-8", "replace")
    except Exception as e:
        print("  AVISO: não consegui ler o TibiaPal:", e)
        return {}
    res = {}
    tabelas = re.findall(r"<table[^>]*>(.*?)</table>", h, re.S)
    if len(tabelas) < 3:
        print("  AVISO: o TibiaPal mudou o layout (esperava 3 tabelas, achei %d)" % len(tabelas))
    for k, tabela in enumerate(tabelas[:3]):
        for nome, pts, dif, spawn in re.findall(
                r"<tr>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>", tabela, re.S):
            nome = html.unescape(re.sub(r"<[^>]+>", "", nome)).strip().lower()
            modos = res[nome][3] if nome in res else []
            if MODOS_TIBIAPAL[k] not in modos:
                modos.append(MODOS_TIBIAPAL[k])
            if nome not in res:   # mantém o respawn da primeira tabela em que aparece
                res[nome] = (pts.strip(), re.sub(r"<[^>]+>", "", dif).strip(),
                             limpa(html.unescape(re.sub(r"<[^>]+>", "", spawn))), modos)
    return res


def baixar_imagens(nomes, forcar):
    res, faltam = {}, []
    for n in nomes:
        destino = os.path.join(DIR_IMG, slug(n) + ".gif")
        if os.path.exists(destino) and not forcar:
            res[n] = os.path.relpath(destino, BASE).replace("\\", "/")
        else:
            faltam.append(n)
    for i in range(0, len(faltam), 50):
        lote = faltam[i:i + 50]
        d = api(action="query", prop="imageinfo", iiprop="url", titles="|".join("File:" + n + ".gif" for n in lote))
        q = d.get("query", {})
        norm = {x["to"]: x["from"] for x in q.get("normalized", [])}
        for p in q.get("pages", {}).values():
            if not p.get("imageinfo"):
                continue
            nome = norm.get(p["title"], p["title"]).split(":", 1)[1][:-4]
            destino = os.path.join(DIR_IMG, slug(nome) + ".gif")
            with open(destino, "wb") as f:
                f.write(_get(p["imageinfo"][0]["url"]))
            res[nome] = os.path.relpath(destino, BASE).replace("\\", "/")
        print("  imagens %d/%d" % (min(i + 50, len(faltam)), len(faltam)))
    return res


def medir_sprite(caminho):
    """Área útil do sprite (sem a borda transparente), somando todos os quadros da animação:
    [x, y, largura, altura, largura_total, altura_total]. Usado para centralizar na tabela."""
    try:
        from PIL import Image, ImageSequence
    except ImportError:
        return None
    im = Image.open(os.path.join(BASE, caminho))
    caixa = None
    for q in ImageSequence.Iterator(im):
        b = q.convert("RGBA").getchannel("A").getbbox()
        if b:
            caixa = b if not caixa else (min(caixa[0], b[0]), min(caixa[1], b[1]), max(caixa[2], b[2]), max(caixa[3], b[3]))
    if not caixa:
        return None
    return [caixa[0], caixa[1], caixa[2] - caixa[0], caixa[3] - caixa[1], im.width, im.height]


def versao(v):
    """ "12.40.9997" -> (12, 40); "7.8" -> (7, 80). Só major.minor (o resto é número de build)."""
    m = re.match(r"\s*(\d+)\.(\d+)", v or "")
    if not m:
        return None
    menor = m.group(2)
    return int(m.group(1)), int(menor) * (10 if len(menor) == 1 else 1)


def estimar_race_ids(criaturas):
    """Criaturas sem race_id na wiki: o ID cresce com a ordem em que entraram no jogo, então
    estima um logo acima do maior ID das criaturas implementadas até a mesma versão."""
    conhecidos = [(versao(c["implementado"]), c["raceId"]) for c in criaturas if c["raceId"] and versao(c["implementado"])]
    for c in criaturas:
        if c["raceId"]:
            continue
        v = versao(c["implementado"])
        anteriores = [r for vv, r in conhecidos if v and vv <= v]
        c["raceId"] = (max(anteriores) if anteriores else max(r for _, r in conhecidos)) + 0.5
        c["raceIdEstimado"] = True


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except AttributeError:
        pass
    forcar = "--forcar-img" in sys.argv
    os.makedirs(DIR_IMG, exist_ok=True)

    print("Lista de criaturas do bestiário...")
    nomes = [n for n in membros_categoria("Category:Bestiary Creatures") if n != "Free Account Bestiary"]
    # criaturas novas às vezes só estão na categoria da classe (a wiki ainda não preencheu a dificuldade)
    classes = api(action="query", list="allcategories", acprefix="Bestiary ", aclimit=500)["query"]["allcategories"]
    for cat in classes:
        t = cat["*"]
        if t.endswith(" Creatures") and t not in ("Bestiary Creatures",) and                 not re.match(r"Bestiary (Harmless|Trivial|Easy|Medium|Hard|Challenging|Common|Uncommon|Rare|Very Rare) ", t):
            for n in membros_categoria("Category:" + t):
                if n not in nomes and n != "Free Account Bestiary":
                    nomes.append(n)
    print(" ", len(nomes), "criaturas")
    boxes = infoboxes(nomes)
    print("TibiaPal...")
    pal = tibiapal()
    print(" ", len(pal), "criaturas no TibiaPal")
    print("Soul Cores...")
    cores = set()
    for n in membros_categoria("Category:Soul Cores"):
        m = re.match(r"^(.*) Soul Core(?: \((.*)\))?$", n)
        if m:
            cores.add((m.group(1) + (" (" + m.group(2) + ")" if m.group(2) else "")).lower())
    print(" ", len(cores), "soul cores")
    for apelido, alvos in APELIDOS_TIBIAPAL.items():
        if apelido in pal:
            for a in alvos:
                pal.setdefault(a.lower(), pal[apelido])

    criaturas, sem_dif = [], []
    for n in nomes:
        b = boxes.get(n, {})
        dif = limpa(b.get("bestiarylevel")).title()
        rar = limpa(b.get("occurrence")).title() or "Common"
        if dif not in TABELA:
            if not limpa(b.get("bestiaryclass")):
                sem_dif.append(n)
                continue
            dif = "Unknown"  # criatura nova: a wiki ainda não informou a dificuldade
        kills, pts, pts_vr = TABELA.get(dif, (None, 0, 0))
        muito_rara = rar == "Very Rare"
        p = pal.get(n.lower())
        locais = limpa(b.get("location"))
        c = {
            "nome": n,
            "exibir": re.sub(r" \((?:Creature)\)$", "", n),
            "classe": limpa(b.get("bestiaryclass")) or None,
            "dificuldade": dif,
            "raridade": rar,
            "kills": 5 if (muito_rara and kills) else kills,
            "pontos": pts_vr if muito_rara else pts,
            "hp": limpa(b.get("hp")) or None,
            "xp": limpa(b.get("exp")) or None,
            "locais": locais[:300] or None,
            "pontosWarden": WARDEN.get(dif, 0),
            "implementado": limpa(b.get("implemented")) or None,
            # race_id = número interno da criatura; o bestiário do jogo ordena cada classe por ele
            "raceId": int(limpa(b.get("race_id"))) if limpa(b.get("race_id")).isdigit() else None,
            "soulCore": any(x.replace("grey", "gray") in cores for x in (n.lower(), re.sub(r" \(creature\)$", "", n.lower()))),
        }
        if p:
            c["respawn"] = p[2]
            c["tempo"] = p[1]  # Easy / Medium / Hard (TibiaPal)
            c["modo"] = p[3]   # ["1x"], ["rapid"], ["evento"] ou mais de um
            c["fonteRespawn"] = "tibiapal"
            if p[0].isdigit() and int(p[0]) != c["pontos"]:
                c["pontosTibiapal"] = int(p[0])
        elif locais:
            # primeiros locais citados na wiki
            partes = [x.strip() for x in re.split(r",|;| and ", locais) if x.strip()]
            c["respawn"] = ", ".join(partes[:3])
            c["fonteRespawn"] = "wiki"
        criaturas.append(c)

    print("Ícones...")
    d = api(action="query", prop="imageinfo", iiprop="url", titles="|".join("File:" + f for f in ICONES))
    norm = {x["to"]: x["from"] for x in d["query"].get("normalized", [])}
    for pg in d["query"]["pages"].values():
        if pg.get("imageinfo"):
            arq = ICONES[norm.get(pg["title"], pg["title"])[5:]]
            with open(os.path.join(BASE, "img", "bestiario-icones", arq), "wb") as f:
                f.write(_get(pg["imageinfo"][0]["url"]))
    estimar_race_ids(criaturas)
    print("Imagens...")
    spr = baixar_imagens([c["nome"] for c in criaturas], forcar)
    for c in criaturas:
        c["sprite"] = spr.get(c["nome"])
        if c["sprite"]:
            c["recorte"] = medir_sprite(c["sprite"])

    criaturas.sort(key=lambda c: c["nome"])
    with open(ARQ_SAIDA, "w", encoding="utf-8") as f:
        f.write("// Gerado por coletar_bestiario.py (TibiaWiki + TibiaPal). Não edite à mão: rode o script.\n")
        f.write("window.BESTIARIO = " + json.dumps(criaturas, ensure_ascii=False, indent=0) + ";\n")
    diverg = [c["nome"] for c in criaturas if "pontosTibiapal" in c]
    print("\nPronto:", len(criaturas), "criaturas.")
    print("Sem classe nem dificuldade na wiki (ficaram de fora):", sem_dif)
    print("Dificuldade a confirmar:", [c["nome"] for c in criaturas if c["dificuldade"] == "Unknown"])
    print("Sem soul core:", [c["nome"] for c in criaturas if not c["soulCore"]])
    print("race_id estimado pela versão:", len([c for c in criaturas if c.get("raceIdEstimado")]))
    print("Sem imagem:", [c["nome"] for c in criaturas if not c["sprite"]])
    print("Pontos diferentes entre wiki e TibiaPal:", diverg)
    achados = {c["nome"].lower() for c in criaturas}
    print("Do TibiaPal que não acharam par na wiki:",
          [k for k in pal if k not in achados and not any(a.lower() in achados for a in APELIDOS_TIBIAPAL.get(k, []))])


if __name__ == "__main__":
    main()
