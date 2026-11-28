#!/usr/bin/env python3
"""
Coleta todas as montarias do Tibia e gera montarias-dados.js para a página montarias.html.

Uso:  python coletar_montarias.py            (baixa só as imagens que faltam)
      python coletar_montarias.py --forcar-img

Fontes:
  - TibiaWiki em inglês (tibia.fandom.com): lista, ID da montaria (ordem do jogo), preço na Store, conquista, imagens.
  - TibiaWiki BR (tibiawiki.com.br): o texto "como obter" em português (campo "method").
    Quando a wiki BR não tem a montaria, fica o texto em inglês.
"""
import json
import os
import re
import sys
import urllib.parse

from coletar_outfits import BASE, _get, api, area_util, baixar_imagens, conteudo, infobox, limpa, preco, slug

API_BR = "https://www.tibiawiki.com.br/api.php"
ARQ_SAIDA = os.path.join(BASE, "montarias-dados.js")
DIR_MONTARIAS = os.path.join(BASE, "img", "montarias")

# fora da lista: o Rented Horse é alugado por 24h, não fica com o personagem
IGNORAR = {"Rented Horse"}
# montarias que a wiki BR ainda não tem (texto traduzido da wiki em inglês)
COMO_PT = {
    "Lady Bug": "Use um Four-Leaf Clover em uma Ladybug (no Hive, em Quirefang).",
    "Phant": "Troque 8.000 Drome Points com um NPC do Tibiadrome.",
    "Mutated Abomination": "Depois de derrotar The Monster (The Cradle of Monsters Quest), use a alavanca na sala ao sul do Geoffray, no laboratório do Doctor Marrow.",
    "Jaracal": "Use um Skewered Fish em um Jaracal.",
    "Radiant Nimbus": "Use um Cloud In a Bottle em um Radiant Nimbus.",
}


def api_br(**p):
    p["format"] = "json"
    return json.loads(_get(API_BR + "?" + urllib.parse.urlencode(p)))


def conteudo_br(titulos):
    res = {}
    for i in range(0, len(titulos), 40):
        d = api_br(action="query", prop="revisions", rvprop="content", titles="|".join(titulos[i:i + 40]))
        for p in d.get("query", {}).get("pages", {}).values():
            if "revisions" in p:
                res[p["title"]] = p["revisions"][0]["*"]
    return res


def ficha(w, modelo):
    i = w.find("{{" + modelo)
    if i < 0:
        i = w.find("{{" + modelo.replace(" ", "_"))
    return infobox(w[i:]) if i >= 0 else None


def texto(t):
    """wikitext -> texto simples, sem notas de rodapé, mapas e imagens."""
    t = re.sub(r"<ref[^>]*>.*?</ref>|<ref[^>]*/>", "", t or "", flags=re.S)
    t = re.sub(r"\[\[(?:File|Arquivo|Image|Imagem):[^\]]*\]\]", "", t)
    # links de mapa ({{mapa|coords|aqui}}) não fazem sentido fora da wiki: some com eles e com o que sobrar
    t = re.sub(r"\s*\(?\{\{(?:mapa|Mapper Coords)\|[^{}]*\}\}\)?", "", t, flags=re.I)
    t = re.sub(r"\[https?://\S+ ([^\]]*)\]", r"\1", t)
    t = limpa(t)
    t = re.sub(r"\s*\(\s*(aqui|here)?\s*\)", "", t)
    t = re.sub(r"\s*Você pode (encontrar|achar) [^.]*$", "", t)      # "Você pode encontrar a bruxa" (sem o mapa)
    return re.sub(r"\s+([.,;:])", r"\1", t).strip(" ,;")


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except AttributeError:
        pass
    forcar = "--forcar-img" in sys.argv
    os.makedirs(DIR_MONTARIAS, exist_ok=True)

    print("Lendo a lista de montarias (TibiaWiki EN)...")
    cat = api(action="query", list="categorymembers", cmtitle="Category:Mounts", cmlimit=500)
    titulos = [x["title"] for x in cat["query"]["categorymembers"] if x["ns"] == 0]
    paginas = conteudo(titulos)

    print("Lendo o texto em português (TibiaWiki BR)...")
    cat_br, cont = [], {}
    while True:
        d = api_br(action="query", list="categorymembers", cmtitle="Categoria:Montarias", cmlimit=500, **cont)
        cat_br += [x["title"] for x in d["query"]["categorymembers"] if x["ns"] == 0]
        if "continue" not in d:
            break
        cont = {"cmcontinue": d["continue"]["cmcontinue"]}
    br = {}
    for t, w in conteudo_br(cat_br).items():
        f = ficha(w, "Infobox Mount")
        if f and f.get("method"):
            br[(f.get("name") or t).strip().lower()] = texto(f["method"])
    print(len(br), "montarias com texto em português")

    montarias = []
    for t in titulos:
        f = ficha(paginas.get(t, ("", ""))[1], "Infobox Mount")
        if not f:
            continue
        nome = re.sub(r"\s*\(Mount\)$", "", limpa(f.get("name") or t))
        if nome in IGNORAR:
            continue
        moeda = (f.get("pricecurrency") or "Tibia Coins").lower()
        loja = f.get("bought") == "yes" and bool(preco(f.get("price"))) and "tibia coin" in moeda
        montarias.append({
            "nome": nome, "pagina": t,
            "id": preco((f.get("mount_id") or "").split(",")[0]),                    # a janela de montarias do jogo segue esse ID
            "loja": loja,
            "preco": preco(f.get("price")) if loja else None,
            "como": br.get(nome.lower()) or br.get(t.lower()) or COMO_PT.get(nome) or texto(f.get("taming_method")),
            "comoPt": bool(br.get(nome.lower()) or br.get(t.lower()) or COMO_PT.get(nome)),
            "conquista": limpa(f.get("achievement") or "") or None,
            "lancado": limpa(f.get("implemented") or "") or None,
        })
    montarias.sort(key=lambda m: (m["id"] is None, m["id"] or 0, m["nome"]))
    print(len(montarias), "montarias;", sum(m["loja"] for m in montarias), "da store;",
          sum(not m["comoPt"] for m in montarias), "sem texto em português")

    print("Imagens...")
    pedidos = {m["pagina"]: (m["pagina"] + ".gif", slug(m["nome"]) + ".gif") for m in montarias}
    spr = baixar_imagens(pedidos, DIR_MONTARIAS, forcar)
    faltam = {m["pagina"]: (m["nome"] + ".gif", slug(m["nome"]) + ".gif") for m in montarias if m["pagina"] not in spr}
    spr.update(baixar_imagens(faltam, DIR_MONTARIAS, True))
    for m in montarias:
        m["sprite"] = spr.get(m["pagina"])
        m["recorte"] = area_util(m["sprite"]) if m["sprite"] else None

    with open(ARQ_SAIDA, "w", encoding="utf-8") as f:
        f.write("// Gerado por coletar_montarias.py (TibiaWiki EN + BR). Não edite à mão: rode o script.\n")
        f.write("window.MONTARIAS = " + json.dumps(montarias, ensure_ascii=False, indent=1) + ";\n")
    print("\nPronto. Sem imagem:", [m["nome"] for m in montarias if not m["sprite"]])
    print("Sem texto em português:", [m["nome"] for m in montarias if not m["comoPt"]])


if __name__ == "__main__":
    main()
