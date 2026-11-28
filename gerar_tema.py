#!/usr/bin/env python3
"""
Gera as peças de pixel art da identidade "Tibia Collection" em tema/collection/.

Uso:  python gerar_tema.py

Cada peça tem o mesmo tamanho da peça original do tibia.com que ela substitui,
então o CSS só troca o endereço da imagem. Paleta: ferro escuro, bronze, dourado e
esmeralda (a mesma do logo). Para mudar as cores, edite PALETA e rode de novo.
"""
import os

from PIL import Image

BASE = os.path.dirname(os.path.abspath(__file__))
SAIDA = os.path.join(BASE, "tema", "collection")

PALETA = {
    ".": (0, 0, 0, 0),          # transparente
    "k": (22, 14, 8, 255),      # contorno
    "i": (54, 46, 42, 255),     # ferro escuro
    "m": (86, 74, 66, 255),     # ferro médio
    "n": (128, 114, 102, 255),  # ferro claro
    "d": (96, 54, 14, 255),     # bronze escuro
    "b": (156, 96, 28, 255),    # bronze
    "g": (218, 162, 52, 255),   # dourado
    "l": (255, 214, 104, 255),  # dourado claro
    "h": (255, 242, 186, 255),  # brilho
    "E": (8, 70, 34, 255),      # esmeralda escura
    "e": (28, 160, 74, 255),    # esmeralda
    "f": (110, 236, 140, 255),  # esmeralda clara
    "w": (226, 255, 232, 255),  # brilho da joia
    "r": (150, 24, 18, 255),    # rubi
    "R": (226, 70, 50, 255),    # rubi claro
}


def grade(linhas):
    """Desenha uma peça a partir de linhas de texto (1 caractere = 1 pixel)."""
    im = Image.new("RGBA", (len(linhas[0]), len(linhas)))
    for y, linha in enumerate(linhas):
        assert len(linha) == im.width, (y, linha)
        for x, c in enumerate(linha):
            im.putpixel((x, y), PALETA[c])
    return im


def cor(c):
    return PALETA[c]


def ponto(im, x, y, c):
    """putpixel que ignora o que cai fora da imagem."""
    if 0 <= x < im.width and 0 <= y < im.height:
        im.putpixel((x, y), c)


def salvar(im, nome):
    im.save(os.path.join(SAIDA, nome), optimize=True)


def faixa(largura, linhas_cor, brilho_cada=0, brilho_linha=1):
    """Faixa horizontal de metal: uma cor por linha; a cada `brilho_cada` px um pixel mais claro."""
    im = Image.new("RGBA", (largura, len(linhas_cor)))
    for y, c in enumerate(linhas_cor):
        for x in range(largura):
            p = cor(c)
            if brilho_cada and y == brilho_linha and x % brilho_cada in (0, 1):
                p = cor("h")
            im.putpixel((x, y), p)
    return im


def joia(im, cx, cy, raio):
    """Joia de esmeralda em losango, com contorno e brilho."""
    for y in range(cy - raio - 1, cy + raio + 2):
        for x in range(cx - raio - 1, cx + raio + 2):
            dist = abs(x - cx) + abs(y - cy)
            if dist == raio + 1:
                ponto(im, x, y, cor("k"))
            elif dist <= raio:
                c = "e"
                if x < cx and y < cy:
                    c = "f"
                if x > cx and y > cy:
                    c = "E"
                ponto(im, x, y, cor(c))
    ponto(im, *((cx - 1, cy - 1) if raio > 1 else (cx, cy)), cor("w"))


def placa(im, cx, cy, raio):
    """Placa dourada em losango (base para as joias)."""
    for y in range(cy - raio - 1, cy + raio + 2):
        for x in range(cx - raio - 1, cx + raio + 2):
            dist = abs(x - cx) + abs(y - cy)
            if dist == raio + 1:
                ponto(im, x, y, cor("k"))
            elif dist <= raio:
                lado = (x - cx) + (y - cy)
                ponto(im, x, y, cor("l" if lado < -1 else "g" if lado <= 1 else "b"))


OURO = {  # tons próprios das tampas (rampa de luz do dourado)
    "o": (72, 38, 8, 255),      # contorno bronze escuro
    "d": (128, 72, 16, 255),
    "b": (176, 110, 30, 255),
    "g": (222, 164, 54, 255),
    "l": (248, 204, 96, 255),
    "h": (255, 234, 160, 255),
    "G": (6, 54, 26, 255),      # contorno da esmeralda
    "E": (14, 104, 48, 255),
    "e": (34, 168, 78, 255),
    "f": (112, 228, 140, 255),
    "w": (232, 255, 236, 255),
}


def faixa_ouro(largura, linhas, periodo=30):
    """Faixa dourada no estilo das tampas: uma cor de OURO por linha, reflexo suave na linha "l"."""
    im = Image.new("RGBA", (largura, len(linhas)))
    for y, c in enumerate(linhas):
        for x in range(largura):
            p = OURO[c]
            if c == "l" and periodo and x % periodo in (10, 11, 12):
                p = OURO["h"]
            im.putpixel((x, y), p)
    return im


def tampa():
    im = Image.new("RGBA", (180, 12))            # fundo transparente
    cy = 6
    # barra: 5 linhas (4..8), da luz (em cima) para a sombra (embaixo)
    for x in range(4, 176):
        for y, c in zip(range(4, 9), "olgdo"):
            p = OURO[c]
            if c == "l" and x % 30 in (10, 11, 12):   # reflexo suave e espaçado
                p = OURO["h"]
            im.putpixel((x, y), p)

    def placa_joia(cx):
        for y in range(cy - 5, cy + 6):
            for x in range(cx - 5, cx + 6):
                dx, dy = x - cx, y - cy
                dist = abs(dx) + abs(dy)
                if dist > 5 or not (0 <= y < 12):
                    continue
                if dist == 5:
                    c = "o"
                elif dist == 4:                          # aro dourado: claro em cima/esquerda, escuro embaixo/direita
                    c = "l" if dx + dy < 0 else ("g" if dx + dy == 0 else "d")
                elif dist == 3:
                    c = "g" if dx + dy < 0 else ("b" if dx + dy == 0 else "o")
                elif dist == 2:                          # esmeralda
                    c = "f" if dx + dy < 0 else ("e" if dx + dy == 0 else "E")
                else:
                    c = "e" if dx + dy <= 0 else "E"
                im.putpixel((x, y), OURO[c])
        im.putpixel((cx - 1, cy - 1), OURO["w"])          # brilho da esmeralda
        im.putpixel((cx, cy - 1), OURO["f"])

    for cx in (8, 90, 171):                       # 8 e 171 = centro das correntes (ver style.css)
        placa_joia(cx)
    return im


def limpa_alfa(im):
    r, g, b, a = im.convert("RGBA").split()
    a = a.point(lambda v: 255 if v >= 240 else (0 if v < 8 else v))
    return Image.merge("RGBA", (r, g, b, a))


def tira_fundo(im):
    """Imagem sem transparência (ex.: o ChatGPT desenha o xadrez cinza/branco no lugar do fundo transparente):
    apaga os pixels claros e sem cor ligados à borda. O contorno preto do desenho segura o preenchimento,
    então o branco de dentro da figura fica."""
    from PIL import ImageDraw
    if im.mode == "RGBA" and im.getchannel("A").getextrema()[0] < 250:
        return im                                            # já tem transparência de verdade
    rgb = im.convert("RGB")
    mascara = Image.new("L", rgb.size, 0)
    mascara.putdata([255 if min(px) > 195 and max(px) - min(px) < 22 else 0 for px in rgb.getdata()])
    w, h = rgb.size
    borda = [(x, 0) for x in range(w)] + [(x, h - 1) for x in range(w)] + [(0, y) for y in range(h)] + [(w - 1, y) for y in range(h)]
    for pt in borda:
        if mascara.getpixel(pt) == 255:
            ImageDraw.floodfill(mascara, pt, 128)
    alfa = mascara.point(lambda v: 0 if v == 128 else 255)
    r, g, b = rgb.split()
    return Image.merge("RGBA", (r, g, b, alfa))


def preparar_imagens_ia():
    """Canto ornamental e ícones do menu, gerados no ChatGPT e salvos em novo-tema/."""
    import glob
    pasta = os.path.join(BASE, "novo-tema")
    canto = glob.glob(os.path.join(pasta, "Moldura*.png"))
    if canto:
        # mantém o quadro inteiro (as posições no CSS dependem dele); 128px = 2x do tamanho exibido
        im = limpa_alfa(Image.open(canto[0]))
        im.resize((128, 128), Image.LANCZOS).save(os.path.join(SAIDA, "canto.png"), optimize=True)
    icones = glob.glob(os.path.join(pasta, "*cones*.png"))
    if icones:
        im = limpa_alfa(Image.open(icones[0]))
        a = im.getchannel("A")
        cols = [any(a.getpixel((x, y)) > 8 for y in range(0, im.height, 2)) for x in range(im.width)]
        partes, ini = [], None
        for x, cheio in enumerate(cols + [False]):
            if cheio and ini is None:
                ini = x
            elif not cheio and ini is not None:
                if x - ini > 40:
                    partes.append((ini, x))
                ini = None
        for nome, (x0, x1) in zip(["icone-bosses", "icone-outfits", "icone-bestiario"], partes):
            p = im.crop((x0, 0, x1, im.height))
            p = p.crop(p.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox())
            lado = max(p.size)
            q = Image.new("RGBA", (lado, lado))
            q.paste(p, ((lado - p.width) // 2, (lado - p.height) // 2))
            q.resize((64, 64), Image.LANCZOS).save(os.path.join(SAIDA, nome + ".png"), optimize=True)
    # ícones avulsos (uma imagem por ícone): "novo-tema/*Montaria*.png" ou "*Cavalo*.png" -> icone-montarias.png
    for padroes, nome in ((("*ontaria*.png", "*avalo*.png", "*Sela*.png"), "icone-montarias"),):
        # se houver mais de uma versão, vale a mais recente
        achou = sorted({a for p in padroes for a in glob.glob(os.path.join(pasta, p))}, key=os.path.getmtime, reverse=True)
        if achou:
            p = limpa_alfa(tira_fundo(Image.open(achou[0])))
            p = p.crop(p.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox())
            lado = max(p.size)
            q = Image.new("RGBA", (lado, lado))
            q.paste(p, ((lado - p.width) // 2, (lado - p.height) // 2))
            q.resize((64, 64), Image.LANCZOS).save(os.path.join(SAIDA, nome + ".png"), optimize=True)


def encaixa(im, T):
    """Coloca a imagem num quadrado TxT perdendo o mínimo de qualidade:
    - pequena: amplia só por número inteiro (pixel duplicado, nítido) e centraliza;
    - se o inteiro ficar pequeno demais (< 65% do quadro): amplia por inteiro e reduz uma vez (LANCZOS);
    - grande: reduz uma vez (LANCZOS)."""
    lado = max(im.size)
    k = T // lado
    if k >= 1 and k * lado >= 0.65 * T:
        im = im.resize((im.width * k, im.height * k), Image.NEAREST)
    else:
        if lado < T:
            m = -(-T // lado)
            im = im.resize((im.width * m, im.height * m), Image.NEAREST)
        f = T / max(im.size)
        im = im.resize((max(1, round(im.width * f)), max(1, round(im.height * f))), Image.LANCZOS)
    c = Image.new("RGBA", (T, T))
    c.paste(im, ((T - im.width) // 2, (T - im.height) // 2), im)
    return c


def icones_stats():
    """Ícones do quadro de estatísticas, todos do mesmo tamanho (16px; 20px nos títulos dos grupos),
    com um arquivo por escala de tela (1x, 1,5x e 2x) para o navegador não redimensionar de novo:
    img/icones/st-<nome>-<px>.png"""
    from PIL import ImageSequence
    fontes = {
        "outfit": "img/outfits/citizen-m.gif", "montaria": "img/montarias/war-horse.gif",
        "addon": "img/itens-outfit/brutus-bloodbeards-hat.gif", "completo": "img/icones/sim.png",
        "store": "img/icones/tibia-coin-icone.png", "bestiary": "img/bestiario-icones/bestiary-icon.gif",
        "charm": "img/bestiario-icones/charm-icon.gif", "warden": "img/bestiario-icones/echo-warden.png",
        "core": "img/bestiario-icones/animus-mastery.png",
        "g-outfits": "tema/collection/icone-outfits.png", "g-montarias": "tema/collection/icone-montarias.png",
        "g-bestiario": "tema/collection/icone-bestiario.png",
    }
    pasta = os.path.join(BASE, "img", "icones")
    for nome, arq in fontes.items():
        caminho = os.path.join(BASE, arq)
        if not os.path.exists(caminho):
            continue
        q = next(ImageSequence.Iterator(Image.open(caminho))).convert("RGBA")
        q = q.crop(q.getchannel("A").getbbox())
        base = 20 if nome.startswith("g-") else 16
        for esc in (1, 1.5, 2):
            T = int(base * esc)
            encaixa(q, T).save(os.path.join(pasta, "st-%s-%d.png" % (nome, T)), optimize=True)


def main():
    os.makedirs(SAIDA, exist_ok=True)

    # Faixa de cima/baixo das seções (6px de altura, repete na horizontal): mesmo dourado das tampas
    salvar(faixa_ouro(30, "olggdo"), "border-1.png")

    # Corrente dourada das laterais do menu (7x10, repete na vertical)
    elo = [
        "..kgk..",
        ".kllgk.",
        ".kgkbk.",   # pontinho escuro no meio de todo elo
        ".kgbdk.",
        "..kdk..",
    ]
    salvar(grade(elo + elo), "chain.png")

    # Luzinha dos botões do menu (2x2)
    salvar(grade(["fe", "eE"]), "green-light.png")

    # + e − do menu (12x12)
    moldura = [
        "kkkkkkkkkkkk",
        "klllllllllgk",
        "klkkkkkkkkbk",
        "klkiiiiiikbk",
        "klkiiiiiikbk",
        "klkiiiiiikbk",
        "klkiiiiiikbk",
        "klkiiiiiikbk",
        "klkiiiiiikbk",
        "klkkkkkkkkbk",
        "kgbbbbbbbbdk",
        "kkkkkkkkkkkk",
    ]
    mais = [list(l) for l in moldura]
    for p in range(3, 9):
        mais[p][5] = mais[p][6] = "f" if p < 6 else "e"
        mais[5][p] = mais[6][p] = "f" if p < 6 else "e"
    salvar(grade(["".join(l) for l in mais]), "plus.png")
    menos = [list(l) for l in moldura]
    for p in range(3, 9):
        menos[5][p] = "R"
        menos[6][p] = "r"
    salvar(grade(["".join(l) for l in menos]), "minus.png")

    # Setinha do item ativo do submenu (10x10)
    salvar(grade([
        "..........",
        ".kk.......",
        ".klkk.....",
        ".kllgkk...",
        ".klgggbkk.",
        ".kggbbbdk.",
        ".kgbdkk...",
        ".kbkk.....",
        ".kk.......",
        "..........",
    ]), "icon-activesubmenu.png")

    # Moldurinhas das tabelas e cartões
    # (mesmo dourado das tampas; rebite = mini losango com esmeralda)
    rebite = Image.new("RGBA", (5, 5))
    for y in range(5):
        for x in range(5):
            dx, dy = x - 2, y - 2
            dist = abs(dx) + abs(dy)
            if dist == 2:
                c = "l" if dx + dy < 0 else ("g" if dx + dy == 0 else "d")
            elif dist == 1:
                c = "e" if dx + dy < 0 else "E"
            elif dist == 0:
                c = "f"
            else:
                continue
            rebite.putpixel((x, y), OURO[c])
    salvar(rebite, "box-frame-edge.png")
    salvar(faixa_ouro(84, "olgo", periodo=42), "box-frame-horizontal.png")
    salvar(faixa_ouro(84, "olgo", periodo=42), "table-headline-border.png")
    vert = Image.new("RGBA", (3, 13))
    for y in range(13):
        for x, c in enumerate("lgd"):                # luz da esquerda
            vert.putpixel((x, y), OURO[c])
    salvar(vert, "box-frame-vertical.png")

    # Tampas do menu e da busca (180x12): barra dourada sobre fundo transparente, com placas de
    # esmeralda nas pontas (em cima das correntes) e no meio. Contornos em bronze escuro, sem preto,
    # e luz vindo de cima à esquerda.
    salvar(tampa(), "box-top.png")
    salvar(tampa(), "box-bottom.png")              # mesma peça: a luz continua vindo de cima

    # Botão (135x25): moldura dourada com miolo vermelho-escuro (mesmo tom da barra vermelha)
    def botao(claro):
        im = Image.new("RGBA", (135, 25))
        topo_c, fundo_c = ((176, 40, 28), (92, 10, 8)) if claro else ((128, 24, 18), (58, 6, 6))
        for y in range(25):
            for x in range(135):
                borda = min(x, y, 134 - x, 24 - y)
                if borda == 0:
                    c = OURO["o"]
                elif borda == 1:
                    c = OURO["l"] if y < 12 else OURO["g"]
                elif borda == 2:
                    c = OURO["g"] if y < 12 else OURO["d"]
                elif borda == 3:
                    c = OURO["o"]
                else:
                    t = (y - 4) / 16
                    c = tuple(round(topo_c[k] + (fundo_c[k] - topo_c[k]) * t) for k in range(3)) + (255,)
                    if y == 5:
                        c = tuple(min(255, v + 34) for v in c[:3]) + (255,)
                im.putpixel((x, y), c)
        for cx, cy in ((0, 0), (134, 0), (0, 24), (134, 24)):   # cantos arredondados
            im.putpixel((cx, cy), cor("."))
        for cx, cy in ((1, 1), (133, 1), (1, 23), (133, 23)):
            im.putpixel((cx, cy), OURO["o"])
        return im
    salvar(botao(False), "button.png")
    over = botao(True)
    for y in range(25):                           # o "over" vai por cima: só o miolo
        for x in range(135):
            if min(x, y, 134 - x, 24 - y) < 4:
                over.putpixel((x, y), cor("."))
    salvar(over, "button-over.png")

    preparar_imagens_ia()
    icones_stats()
    print("Peças geradas em", SAIDA)


if __name__ == "__main__":
    main()
