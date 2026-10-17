#!/usr/bin/env python3
"""
Coleta dados dos bosses na TibiaWiki BR e atualiza bosses.js.

Uso:
    python coletar.py              # coleta tudo, baixa só imagens que ainda não existem
    python coletar.py --forcar-img # baixa de novo todas as imagens
    python coletar.py "Duke Krule" # coleta só os bosses com esse nome

O script lê bosses.js, mantém os campos manuais (nome, pagina, local, grupo,
ordem, mecanica, tabela) e sobrescreve os campos coletados (hp, xp, tipo,
sprite, resistências, tokens, loot, link, pendencias). Só usa a biblioteca
padrão do Python.

Na mecânica, nomes entre [[colchetes duplos]] (ex.: "[[Soul Scourge]]" ou
"[[Frozen Soul|Frozen Souls]]") ganham o sprite da wiki ao lado do nome.
"""
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

import rotacoes

WIKI = "https://www.tibiawiki.com.br"
API = WIKI + "/api.php"
USER_AGENT = "PainelBossesPessoal/1.0 (painel offline de uso pessoal; script coletar.py)"
PAUSA = 1.0  # segundos entre requisições

BASE = os.path.dirname(os.path.abspath(__file__))
ARQ_BOSSES = os.path.join(BASE, "bosses.js")
DIR_BOSSES = os.path.join(BASE, "img", "bosses")
DIR_ITENS = os.path.join(BASE, "img", "itens")
DIR_CRIATURAS = os.path.join(BASE, "img", "criaturas")
DIR_ICONES = os.path.join(BASE, "img", "icones")
DIR_MAGIAS = os.path.join(BASE, "img", "magias")
# Ícones das magias vêm da TibiaWiki em inglês, que já tem as magias novas de 2026.
API_FANDOM = "https://tibia.fandom.com/api.php"

CAMPOS_LOOT = ["lootcomum", "lootincomum", "lootsemiraro", "lootraro", "lootmuitoraro"]
TOKENS = ["Gold Token", "Silver Token"]
RARIDADE = {"lootcomum": "comum", "lootincomum": "incomum", "lootsemiraro": "semi-raro",
            "lootraro": "raro", "lootmuitoraro": "muito raro"}

# Campo do infobox -> chave usada no painel (na ordem em que a wiki mostra).
ELEMENTOS = [("physicalDmgMod", "fisico"), ("earthDmgMod", "terra"), ("fireDmgMod", "fogo"),
             ("deathDmgMod", "morte"), ("energyDmgMod", "energia"), ("holyDmgMod", "sagrado"),
             ("iceDmgMod", "gelo"), ("healDmgMod", "cura")]

# Ícones fixos usados pelo painel: nome local -> arquivo na wiki.
# Os nomes locais precisam bater com ICONES em app.js.
ICONES = {
    "fisico": "Físico.png", "terra": "Poisoned Icon.gif", "fogo": "Burning Icon.gif",
    "morte": "Cursed Icon.gif", "energia": "Electrified Icon.gif", "sagrado": "Dazzled Icon.gif",
    "gelo": "Freezing Icon.gif", "cura": "Heal Icon.png", "paralisia": "Slowed Icon.gif",
    "invisibilidade": "Invisible Icon.gif", "nao": "Cross.png", "sim": "Tick.png",
    "hp": "Hearthp.png", "xp": "Xpbestiary.png", "bane": "Bosstiary Bane.png",
    "archfoe": "Bosstiary Archfoe.png", "nemesis": "Bosstiary Nemesis.png",
}

_ultima = [0.0]


def _get(url):
    espera = PAUSA - (time.time() - _ultima[0])
    if espera > 0:
        time.sleep(espera)
    headers = {"User-Agent": USER_AGENT}
    if "nocookie.net" in url:  # imagens da tibia.fandom.com exigem o Referer da wiki
        headers["Referer"] = "https://tibia.fandom.com/"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read()
    finally:
        _ultima[0] = time.time()


def api(**params):
    params.update(format="json", formatversion="2")
    return json.loads(_get(API + "?" + urllib.parse.urlencode(params)))


def slug(texto):
    s = texto.lower().replace("'", "")
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def link_wiki(pagina):
    return WIKI + "/" + urllib.parse.quote(pagina.replace(" ", "_"))


# ---------- bosses.js ----------

def ler_bosses():
    with open(ARQ_BOSSES, encoding="utf-8") as f:
        txt = f.read()
    m = re.search(r"window\.BOSSES\s*=\s*(\[.*\])\s*;?\s*$", txt, re.S)
    if not m:
        sys.exit("bosses.js: não encontrei 'window.BOSSES = [...]'")
    corpo = re.sub(r",(\s*[\]}])", r"\1", m.group(1))  # tolera vírgula sobrando
    return json.loads(corpo)


def salvar_bosses(bosses):
    ordem_campos = ["nome", "pagina", "local", "grupo", "subgrupo", "ordem", "quest", "level",
                    "hp", "xp", "tipo", "sprite",
                    "elementos", "imunidades", "podeSerPuxado", "empurraObjetos", "passaPor",
                    "rotacaoAjustes", "ataque", "defesa", "rotacao", "tokens", "lootTiers", "lootStatus", "mecanica", "spritesMecanica",
                    "fases", "tabela", "link", "pendencias"]
    saida = []
    for b in bosses:
        d = {k: b[k] for k in ordem_campos if k in b}
        d.update({k: v for k, v in b.items() if k not in d})
        saida.append(d)
    with open(ARQ_BOSSES, "w", encoding="utf-8") as f:
        f.write("// Lista de bosses do painel.\n")
        f.write("// Campos manuais: nome, pagina (opcional), local, grupo, subgrupo (opcional), ordem, quest,\n")
        f.write("// mecanica, tabela (opcional).\n")
        f.write("// Os demais campos são preenchidos por coletar.py. Mantenha o conteúdo como JSON válido.\n")
        f.write("window.BOSSES = ")
        f.write(json.dumps(saida, ensure_ascii=False, indent=2))
        f.write(";\n")


# ---------- wikitext ----------

def infobox(wikitext):
    """Extrai os campos '| chave = valor' do primeiro Infobox."""
    campos, chave = {}, None
    for linha in wikitext.splitlines():
        m = re.match(r"^\|\s*([\w]+)\s*=(.*)$", linha)
        if m:
            chave = m.group(1)
            campos[chave] = m.group(2).strip()
        elif linha.startswith("}}"):
            break
        elif chave:
            campos[chave] += "\n" + linha
    return campos


def links(texto):
    """Itens [[Página]] ou [[Página|texto]] de um campo, sem arquivos."""
    itens = []
    for alvo in re.findall(r"\[\[([^\]|]+)(?:\|[^\]]*)?\]\]", texto or ""):
        alvo = alvo.strip()
        if ":" in alvo:
            continue
        if alvo not in itens:
            itens.append(alvo)
    return itens


def extrair_tokens(box):
    """Tokens em qualquer campo de loot (inclui 'loot', usado quando a wiki não separa raridade)."""
    tokens = []
    for campo in CAMPOS_LOOT + ["loot"]:
        texto = box.get(campo, "")
        for nome in TOKENS:
            m = re.search(r"(\d+(?:\s*-\s*\d+)?)?\s*\[\[" + nome + r"(?:\|[^\]]*)?\]\]", texto)
            if m:
                qtd = (m.group(1) or "1").replace(" ", "")
                tokens.append({"nome": nome, "qtd": qtd,
                               "raridade": RARIDADE.get(campo, "sem raridade")})
    return tokens


def sim_nao(valor):
    """'sim' / 'não' (a wiki às vezes traz 'n�o' com encoding quebrado)."""
    v = (valor or "").strip().lower()
    if v.startswith("s"):
        return True
    if v.startswith("n"):
        return False
    return None


def lista_simples(valor):
    """'Invisibility, Paralysis' -> ['Invisibility', 'Paralysis']"""
    v = re.sub(r"\[\[([^\]|]+)(?:\|[^\]]*)?\]\]", r"\1", valor or "")
    return [x.strip(" .") for x in re.split(r",| e ", v) if x.strip(" .")]


def numero(valor):
    m = re.search(r"-?\d+", (valor or "").replace(".", ""))
    return int(m.group(0)) if m else None


# ---------- imagens ----------

def urls_imagens(nomes_arquivo):
    """Retorna {nome_arquivo: url} via imageinfo (lotes de 50)."""
    res = {}
    nomes = list(dict.fromkeys(nomes_arquivo))
    for i in range(0, len(nomes), 50):
        lote = nomes[i:i + 50]
        d = api(action="query", prop="imageinfo", iiprop="url", redirects=1,
                titles="|".join("Arquivo:" + n for n in lote))
        q = d.get("query", {})
        mapa = {}
        for n in q.get("normalized", []):
            mapa[n["to"]] = n["from"]
        for n in q.get("redirects", []):
            mapa[n["to"]] = mapa.get(n["from"], n["from"])
        for p in q.get("pages", []):
            if p.get("missing") or not p.get("imageinfo"):
                continue
            original = mapa.get(p["title"], p["title"])
            res[original.split(":", 1)[1]] = p["imageinfo"][0]["url"]
    return res


def baixar(url, destino, forcar):
    if os.path.exists(destino) and not forcar:
        return False
    dados = _get(url)
    with open(destino, "wb") as f:
        f.write(dados)
    return True


def resolver_sprites(pedidos, pasta, forcar, baixadas, nomes_locais=None):
    """
    pedidos: {chave: nome na wiki}. Se o nome já tem extensão, usa ele; senão tenta .gif e .png.
    nomes_locais: {chave: nome do arquivo local sem extensão} (padrão: slug do nome na wiki).
    Retorna {chave: caminho relativo}.
    """
    candidatos = {}
    for chave, base in pedidos.items():
        if re.search(r"\.(gif|png)$", base, re.I):
            candidatos[chave] = [base]
        else:
            candidatos[chave] = [base + ".gif", base + ".png"]
    todos = [c for lista in candidatos.values() for c in lista]
    if not todos:
        return {}
    urls = urls_imagens(todos)
    res = {}
    for chave, lista in candidatos.items():
        for arq in lista:
            if arq in urls:
                ext = os.path.splitext(arq)[1].lower()
                base_local = ((nomes_locais or {}).get(chave)
                              or slug(re.sub(r"\.(gif|png)$", "", pedidos[chave], flags=re.I)))
                destino = os.path.join(pasta, base_local + ext)
                if destino not in baixadas:
                    if baixar(urls[arq], destino, forcar):
                        print("  baixado", os.path.relpath(destino, BASE))
                    baixadas.add(destino)
                res[chave] = os.path.relpath(destino, BASE).replace("\\", "/")
                break
    return res


def itens_loot(texto, forcar, baixadas, pend):
    """'0-200 [[Gold Coin]]s, [[Blue Gem]]' -> itens com quantidade, sprite e link (sem tokens)."""
    achados = []
    for qtd, alvo in re.findall(r"(\d+(?:\s*-\s*\d+)?)?\s*\[\[([^\]|]+)(?:\|[^\]]*)?\]\]", texto or ""):
        alvo = alvo.strip()
        if ":" in alvo or alvo in TOKENS or any(a["nome"] == alvo for a in achados):
            continue
        achados.append({"nome": alvo, "qtd": qtd.replace(" ", "") or None})
    spr = resolver_sprites({a["nome"]: a["nome"] for a in achados}, DIR_ITENS, forcar, baixadas)
    # link no plural ("Platinum Coins"): tenta a imagem no singular
    plurais = {a["nome"]: a["nome"][:-1] for a in achados if not spr.get(a["nome"]) and a["nome"].endswith("s")}
    if plurais:
        spr.update(resolver_sprites(plurais, DIR_ITENS, forcar, baixadas))
    for a in achados:
        a["sprite"] = spr.get(a["nome"])
        a["link"] = link_wiki(a["nome"])
        if not a["sprite"]:
            pend.append("sprite do item não encontrado: " + a["nome"])
    return achados


def lista_itens(nomes, forcar, baixadas, pend):
    spr = resolver_sprites({i: i for i in nomes}, DIR_ITENS, forcar, baixadas)
    itens = []
    for i in nomes:
        itens.append({"nome": i, "sprite": spr.get(i), "link": link_wiki(i)})
        if not spr.get(i):
            pend.append("sprite do item não encontrado: " + i)
    return itens


def icones_magias(nomes, forcar, baixadas):
    """Baixa os ícones (38x38) das magias da tibia.fandom.com. Retorna {nome: caminho}."""
    res, faltam = {}, []
    for n in nomes:
        destino = os.path.join(DIR_MAGIAS, slug(n) + ".gif")
        if os.path.exists(destino) and not forcar:
            res[n] = os.path.relpath(destino, BASE).replace("\\", "/")
        else:
            faltam.append(n)
    for i in range(0, len(faltam), 50):
        lote = faltam[i:i + 50]
        url = API_FANDOM + "?" + urllib.parse.urlencode({
            "action": "query", "prop": "imageinfo", "iiprop": "url", "format": "json",
            "titles": "|".join("File:" + n + ".gif" for n in lote)})
        d = json.loads(_get(url))
        for p in d.get("query", {}).get("pages", {}).values():
            if not p.get("imageinfo"):
                continue
            nome = p["title"].split(":", 1)[1][:-4]
            destino = os.path.join(DIR_MAGIAS, slug(nome) + ".gif")
            if destino not in baixadas:
                baixar(p["imageinfo"][0]["url"], destino, forcar)
                print("  baixado", os.path.relpath(destino, BASE))
                baixadas.add(destino)
            res[nome] = os.path.relpath(destino, BASE).replace("\\", "/")
    return res


_quests = {}


def dados_quest(pagina):
    """Level mínimo e recomendado do infobox da quest (com cache)."""
    if pagina not in _quests:
        d = api(action="parse", page=pagina, prop="wikitext", redirects=1)
        if "error" in d:
            _quests[pagina] = None
        else:
            box = infobox(d["parse"]["wikitext"])
            def limpa(v):
                v = re.sub(r"<[^>]+>|\[\[|\]\]", "", v or "").strip()
                return None if v in ("", "-", "—", "?", "0") else v
            _quests[pagina] = {
                "quest": d["parse"]["title"],
                "link": link_wiki(d["parse"]["title"]),
                "minimo": limpa(box.get("lvl")),
                "recomendado": limpa(box.get("lvlreq")),
            }
    return _quests[pagina]


# ---------- principal ----------

def coletar_fase(fase, forcar, baixadas, pend):
    """Fase: busca HP, resistências e sprite na wiki BR; aplica correções manuais ("elementosAjuste",
    "hpAjuste"); calcula o melhor ataque de cada vocação contra ela."""
    pagina = fase.get("pagina") or fase["nome"]
    d = api(action="parse", page=pagina, prop="wikitext", redirects=1)
    box = infobox(d["parse"]["wikitext"]) if "parse" in d else {}
    if not box:
        pend.append("fase não encontrada na wiki: " + pagina)
    hp = re.sub(r"<[^>]+>", "", box.get("hp", "") or "").strip()
    fase["hp"] = fase.get("hpAjuste") or (hp if hp and hp not in ("?", "0") else None)
    fase["elementos"] = {chave: ((box.get(campo) or "").strip() or None) for campo, chave in ELEMENTOS}
    fase["elementos"].update(fase.get("elementosAjuste") or {})
    spr = resolver_sprites({"f": pagina}, DIR_CRIATURAS, forcar, baixadas)
    fase["sprite"] = spr.get("f")
    if not fase["sprite"]:
        pend.append("sprite da fase não encontrado: " + pagina)
    # melhores ataques: as 2 primeiras magias da rotação de cada vocação contra esta fase
    rot = rotacoes.gerar({"elementos": fase["elementos"], "rotacaoAjustes": fase.get("rotacaoAjustes")})
    icones = icones_magias(rotacoes.magias_usadas(rot), forcar, baixadas)
    fase["ataques"] = {}
    for voc in ("knight", "paladin", "sorcerer", "druid", "monk"):
        passos = [p for p in rot[voc]["passos"] if "economizar" not in (p.get("obs") or "")][:2]
        fase["ataques"][voc] = [{"magia": p["magia"], "palavras": p["palavras"], "icone": icones.get(p["magia"])}
                                for p in passos]


def coletar(boss, forcar, baixadas):
    pagina = boss.get("pagina") or boss["nome"]
    print("-", pagina)
    pend = []
    d = api(action="parse", page=pagina, prop="wikitext", redirects=1)
    if "error" in d:
        boss["pendencias"] = ["página não encontrada na wiki: " + pagina]
        return
    titulo = d["parse"]["title"]
    box = infobox(d["parse"]["wikitext"])

    boss["link"] = link_wiki(titulo)

    def num_texto(v):
        v = re.sub(r"<[^>]+>", "", v or "").strip()
        if re.fullmatch(r"\d{1,3}(\.\d{3})+", v):  # "80.000" -> "80000"
            v = v.replace(".", "")
        return v or None

    boss["hp"] = num_texto(box.get("hp"))
    if not boss["hp"] or "?" in boss["hp"]:
        pend.append("HP não informado (ou incerto) na wiki: %s" % boss["hp"])
    boss["xp"] = num_texto(box.get("exp"))
    if not boss["xp"] or "?" in boss["xp"]:
        pend.append("XP não informada (ou incerta) na wiki: %s" % boss["xp"])
    boss["tipo"] = (box.get("bosstype") or "").strip().lower() or None

    # Level: vem do infobox da quest (lvl = mínimo, lvlreq = recomendado)
    if boss.get("quest"):
        boss["level"] = dados_quest(boss["quest"])
        if not boss["level"]:
            pend.append("quest não encontrada na wiki: " + boss["quest"])
        elif not boss["level"].get("recomendado"):
            pend.append("quest sem level recomendado na wiki")
    else:
        boss.pop("level", None)
        pend.append("level recomendado: boss sem quest associada (campo 'quest')")

    # Resistências e características
    boss["elementos"] = {}
    for campo, chave in ELEMENTOS:
        v = (box.get(campo) or "").strip()
        boss["elementos"][chave] = v or None
    boss["elementos"].update(boss.get("elementosAjuste") or {})
    boss["imunidades"] = lista_simples(box.get("immunities"))
    boss["passaPor"] = lista_simples(box.get("ignoresfields"))
    boss["podeSerPuxado"] = sim_nao(box.get("pushable"))
    boss["empurraObjetos"] = sim_nao(box.get("pushobjects"))

    # Rotação de ataque por vocação (ver rotacoes.py)
    boss["rotacao"] = rotacoes.gerar(boss)
    icones = icones_magias(rotacoes.magias_usadas(boss["rotacao"]), forcar, baixadas)
    for v in boss["rotacao"].values():
        if isinstance(v, dict):
            for passo in v.get("passos", []):
                passo["icone"] = icones.get(passo["magia"])
                if not passo["icone"]:
                    pend.append("ícone da magia não encontrado: " + passo["magia"])

    # Tokens
    boss["tokens"] = extrair_tokens(box)
    if boss["tokens"]:
        spr = resolver_sprites({t["nome"]: t["nome"] for t in boss["tokens"]}, DIR_ITENS, forcar, baixadas)
        for t in boss["tokens"]:
            t["sprite"] = spr.get(t["nome"])

    # Loot por raridade, de comum a muito raro (tokens ficam de fora: têm bloco próprio)
    tem_loot = any(box.get(c, "").strip() for c in CAMPOS_LOOT)
    boss["lootStatus"] = "ok" if tem_loot else "pendente"
    campos = CAMPOS_LOOT if tem_loot else ["loot"]  # sem raridade: usa a lista geral
    if not tem_loot:
        pend.append("raridade de loot não disponível na wiki")
    boss["lootTiers"] = []
    for campo in campos:
        itens = itens_loot(box.get(campo, ""), forcar, baixadas, pend)
        if itens:
            boss["lootTiers"].append({"raridade": RARIDADE.get(campo, "sem raridade"), "itens": itens})
    boss.pop("loot", None)
    boss.pop("lootRaro", None)

    # Sprite do boss
    sprites = resolver_sprites({"boss": titulo}, DIR_BOSSES, forcar, baixadas)
    boss["sprite"] = sprites.get("boss")
    if not boss["sprite"]:
        pend.append("sprite do boss não encontrado")

    # Sprites citados na mecânica: [[Nome]] ou [[Nome|texto]]
    mec = boss.get("mecanica") or []
    if isinstance(mec, str):
        mec = [mec]
    alvos = []
    for linha in mec:
        for alvo in re.findall(r"\[\[([^\]|]+)(?:\|[^\]]*)?\]\]", linha):
            if alvo.strip() not in alvos:
                alvos.append(alvo.strip())
    spr = resolver_sprites({a: a for a in alvos}, DIR_CRIATURAS, forcar, baixadas)
    boss["spritesMecanica"] = {a: spr.get(a) for a in alvos}
    for a in alvos:
        if not spr.get(a):
            pend.append("sprite da mecânica não encontrado: " + a)

    # Fases / minibosses / criaturas que importam na luta
    for fase in boss.get("fases") or []:
        coletar_fase(fase, forcar, baixadas, pend)
        fase["elemento"] = rotacoes.elemento_fase(rotacoes._mods({"elementos": fase.get("elementos")}),
                                                  fase.get("rotacaoAjustes"))

    # Elemento de ataque de cada vocação considerando a luta inteira
    boss["ataque"] = rotacoes.elementos_ataque(boss)
    if not boss.get("defesa"):
        pend.append("defesa não preenchida (campo 'defesa')")

    if not mec:
        pend.append("mecânica não escrita")
    if not boss.get("local"):
        pend.append("local não preenchido")
    boss["pendencias"] = pend


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except AttributeError:
        pass
    args = sys.argv[1:]
    forcar = "--forcar-img" in args
    filtro = {a.lower() for a in args if not a.startswith("--")}
    for pasta in (DIR_BOSSES, DIR_ITENS, DIR_CRIATURAS, DIR_ICONES, DIR_MAGIAS):
        os.makedirs(pasta, exist_ok=True)

    baixadas = set()
    icones = resolver_sprites(dict(ICONES), DIR_ICONES, forcar, baixadas, nomes_locais={k: k for k in ICONES})
    for k in ICONES:
        if k not in icones:
            print("  AVISO: ícone não encontrado na wiki:", ICONES[k])

    bosses = ler_bosses()
    for b in bosses:
        if filtro and b["nome"].lower() not in filtro:
            continue
        try:
            coletar(b, forcar, baixadas)
        except Exception as e:  # segue com os outros bosses
            print("  ERRO:", e)
            b["pendencias"] = ["erro na coleta: %s" % e]
    salvar_bosses(bosses)

    print("\nPendências:")
    alguma = False
    for b in bosses:
        for p in b.get("pendencias") or []:
            alguma = True
            print("  %s: %s" % (b["nome"], p))
    if not alguma:
        print("  nenhuma")


if __name__ == "__main__":
    main()
