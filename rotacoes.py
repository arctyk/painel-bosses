"""
Gera a rotação de ataque de cada vocação para um boss, a partir das resistências do boss
(campo "elementos", vindo da TibiaWiki BR) e dos dados atuais das magias (TibiaWiki em inglês,
tibia.fandom.com, já com o update "Vocation Adjustments 2026" de 16/06/2026 e os ajustes do
monk de 01/09/2026).

Ideia geral: magias e runas de ataque dividem a recarga global de 2s. A rotação é a ordem de
prioridade do que usar a cada 2s: a magia mais forte disponível primeiro, e um "tapa-buraco"
quando tudo estiver em recarga.

Ajustes manuais por boss vão em bosses.js, campo "rotacaoAjustes":
    "sdPrincipal": true      -> SD como ataque principal de sorcerer/druid
    "semMorte": true         -> nunca usar death (ex.: o boss se cura com death)
    "semTerra": true         -> nunca usar terra
    "semEnergia": true       -> nunca usar energia
    "elementos": {"fogo": "0%"} -> corrige resistências (ex.: dado da wiki em inglês)
    "nota": "texto"          -> observação geral mostrada embaixo da rotação
    "notas": {"knight": "texto", ...} -> observação de uma vocação
"""

# nome: (palavras, elemento, força base, recarga própria (s), level)
MAGIAS = {
    # sorcerer
    "Ultimate Flame Strike": ("exori max flam", "fogo", 210, 30, 90),
    "Ultimate Energy Strike": ("exori max vis", "energia", 210, 30, 100),
    "Strong Flame Strike": ("exori gran flam", "fogo", 125, 8, 70),
    "Strong Energy Strike": ("exori gran vis", "energia", 125, 8, 80),
    "Flame Strike": ("exori flam", "fogo", 45, 2, 8),
    "Energy Strike": ("exori vis", "energia", 45, 2, 12),
    "Lightning": ("exori amp vis", "energia", 110, 8, 55),
    "Great Death Beam": ("exevo max mort", "morte", 155, 6, 66),
    "Great Energy Beam": ("exevo gran vis lux", "energia", 155, 6, 29),
    "Energy Wave": ("exevo vis hur", "energia", 150, 8, 38),
    "Great Fire Wave": ("exevo gran flam hur", "fogo", 100, 4, 38),
    "Death Echo": ("exevo mort ora", "morte", 112, 6, 120),  # 75 + eco de 50%
    "Death Strike": ("exori mort", "morte", 45, 2, 16),
    # druid
    "Ultimate Ice Strike": ("exori max frigo", "gelo", 195, 30, 100),
    "Ultimate Terra Strike": ("exori max tera", "terra", 195, 30, 90),
    "Strong Ice Strike": ("exori gran frigo", "gelo", 115, 8, 80),
    "Strong Terra Strike": ("exori gran tera", "terra", 115, 8, 70),
    "Ice Strike": ("exori frigo", "gelo", 45, 2, 8),
    "Strong Ice Wave": ("exevo gran frigo hur", "gelo", 150, 4, 40),
    "Terra Wave": ("exevo tera hur", "terra", 120, 4, 38),
    "Forked Glacier": ("exevo fur frigo", "gelo", 90, 6, 90),
    "Forked Thorns": ("exevo fur tera", "terra", 97, 6, 80),
    "Terra Strike": ("exori tera", "terra", 45, 2, 13),
    # runa (qualquer vocação com magic level 15)
    "Sudden Death Rune": ("adori gran mort", "morte", 150, 2, 45),
    # paladin
    "Divine Grenade": ("exevo tempo mas san", "sagrado", 190, 26, 300),
    "Divine Barrage": ("exori dir san", "sagrado", 130, 4, 70),
    "Ethereal Barrage": ("exori dir moe", "fisico", None, 4, 60),
    "Divine Missile": ("exori san", "sagrado", 60, 2, 40),
    "Strong Ethereal Spear": ("exori gran con", "fisico", 38, 8, 90),
    "Ethereal Spear": ("exori con", "fisico", 25, 2, 23),
    # knight
    "Annihilation": ("exori gran ico", "fisico", 125, 30, 110),
    "Fierce Berserk": ("exori gran", "fisico", 92, 6, 90),
    "Front Sweep": ("exori min", "fisico", 80, 6, 70),
    "Brutal Strike": ("exori ico", "fisico", 39, 6, 16),
    "Shield Bash": ("exori ico scu", "fisico", 55, 4, 18),
    # monk
    "Thousand Fist Blows": ("exori mas amp pug", "fisico", 62, 8, 120),
    "Mystic Repulse": ("exori amp pug", "fisico", 72, 8, 30),
    "Double Jab": ("exori pug", "fisico", 40, 4, 14),
    "Devastating Knockout": ("exori gran nia", "fisico", 62, 8, 125),
    "Greater Tiger Clash": ("exori nia", "fisico", 44, 8, 18),
    "Forceful Uppercut": ("exori gran pug", "fisico", 130, 60, 110),
}

NOME_ELEMENTO = {"fogo": "fogo", "energia": "energia", "gelo": "gelo", "terra": "terra",
                 "morte": "death", "sagrado": "holy", "fisico": "físico"}


def _mods(boss):
    m = {}
    elementos = dict(boss.get("elementos") or {})
    elementos.update((boss.get("rotacaoAjustes") or {}).get("elementos") or {})
    for k, v in elementos.items():
        try:
            m[k] = int(str(v).replace("%", "").strip())
        except (TypeError, ValueError):
            m[k] = 100
    return m


def _passo(nome, obs=None):
    p = {"magia": nome, "palavras": MAGIAS[nome][0]}
    if obs:
        p["obs"] = obs
    return p


def _pct(v):
    return "%d%%" % v


def _mago(mods, aj, voc):
    """Sorcerer e druid. Ordem = dano efetivo (força base x resistência do boss); SD (força 150,
    recarga 2s) entra na ordem certa, e o que for mais fraco que ele fica como "economia"."""
    if voc == "sorcerer":
        opcoes = {"fogo": ("Ultimate Flame Strike", "Strong Flame Strike", "Flame Strike"),
                  "energia": ("Ultimate Energy Strike", "Strong Energy Strike", "Energy Strike")}
    else:
        opcoes = {"gelo": ("Ultimate Ice Strike", "Strong Ice Strike", "Ice Strike"),
                  "terra": ("Ultimate Terra Strike", "Strong Terra Strike", "Terra Strike")}
    for el, chave in (("terra", "semTerra"), ("energia", "semEnergia")):
        if aj.get(chave):
            opcoes.pop(el, None)
    morte = -1 if aj.get("semMorte") else mods.get("morte", 100)

    validos = {e: mods.get(e, 100) for e in opcoes if mods.get(e, 100) > 0}
    usa_sd = morte >= 50
    if not validos and not usa_sd:
        return None

    RETA = "com o boss na reta (wave/beam)"
    EXTRAS = {
        ("sorcerer", "energia"): [("Lightning", "a cada 8s; pula para mais 2 alvos"),
                                  ("Great Energy Beam", "a cada 6s, " + RETA),
                                  ("Energy Wave", "a cada 8s, " + RETA)],
        ("sorcerer", "fogo"): [("Great Fire Wave", "a cada 4s, " + RETA)],
        ("druid", "gelo"): [("Strong Ice Wave", "a cada 4s, " + RETA),
                            ("Forked Glacier", "a cada 6s; pula para até 6 alvos")],
        ("druid", "terra"): [("Terra Wave", "a cada 4s, " + RETA),
                             ("Forked Thorns", "a cada 6s; pula para até 5 alvos")],
    }

    def candidatos(e):
        f = validos[e] / 100.0
        ult, strong, _ = opcoes[e]
        lista = [(MAGIAS[ult][2] * f, ult, "na recarga (30s)"), (MAGIAS[strong][2] * f, strong, "a cada 8s")]
        lista += [(MAGIAS[n][2] * f, n, o) for n, o in EXTRAS.get((voc, e), [])]
        return lista

    cand = []  # (dano efetivo, magia, obs)
    el = None
    if validos:
        # escolhe o elemento pelo conjunto: soma das 3 magias mais fortes contra este boss
        el = max(validos, key=lambda e: sum(sorted((c[0] for c in candidatos(e)), reverse=True)[:3]))
        cand += candidatos(el)
    if voc == "sorcerer" and morte >= 100:
        cand.append((MAGIAS["Great Death Beam"][2] * morte / 100.0, "Great Death Beam", "a cada 6s, com o boss na reta (beam)"))
        cand.append((MAGIAS["Death Echo"][2] * morte / 100.0, "Death Echo", "a cada 6s; área 5x5 com eco de 50%"))
    sd = MAGIAS["Sudden Death Rune"][2] * morte / 100.0 if usa_sd else None

    cand.sort(key=lambda c: -c[0])
    passos = []
    if aj.get("sdPrincipal") and usa_sd:
        passos.append(_passo("Sudden Death Rune", "ataque principal neste boss"))
    for dano, nome, obs in cand:
        if usa_sd and not aj.get("sdPrincipal") and dano < sd and not any(p["magia"] == "Sudden Death Rune" for p in passos):
            passos.append(_passo("Sudden Death Rune", "a cada 2s, sempre que nada mais forte estiver pronto"))
        if usa_sd and dano < sd:
            obs = "mais fraca que o SD aqui: só para economizar runa"
        passos.append(_passo(nome, obs))
    if usa_sd and not any(p["magia"] == "Sudden Death Rune" for p in passos):
        passos.append(_passo("Sudden Death Rune", "nos intervalos (recarga de 2s)"))
    if not usa_sd and el:
        passos.append(_passo(opcoes[el][2], "nos intervalos; sem SD neste boss"))

    nota = []
    if el:
        empates = [e for e in validos if e != el and
                   sum(sorted((c[0] for c in candidatos(e)), reverse=True)[:3]) ==
                   sum(sorted((c[0] for c in candidatos(el)), reverse=True)[:3])]
        nota.append("Elemento: %s (%s)" % (NOME_ELEMENTO[el], _pct(validos[el])) +
                    (" ou %s, que dá o mesmo" % NOME_ELEMENTO[empates[0]] if empates else "") +
                    ("; escolhido pelas waves/beams mais fortes" if voc == "sorcerer" and
                     any(validos[e] > validos[el] for e in validos) else "") + ".")
        nota.append("Stance: %s." % ({"fogo": "Master of Flames", "energia": "Master of Thunder"}.get(el, "Elemental Synthesis")))
    if mods.get("morte", 100) <= 0:
        nota.append("Nunca use death (SD): o boss %s." % ("se cura" if mods["morte"] < 0 else "é imune"))
    return {"passos": passos, "nota": " ".join(nota)}


def _paladin(mods, aj):
    holy, fis = mods.get("sagrado", 100), mods.get("fisico", 100)
    if holy <= 0 and fis <= 0:
        return None
    passos = []
    if aj.get("sdPrincipal") and mods.get("morte", 100) >= 50:
        passos.append(_passo("Sudden Death Rune", "ataque principal neste boss (se tiver magic level 15+)"))
    if holy >= fis and holy > 0:
        passos += [_passo("Divine Grenade", "a cada 26s (level 300+)"),
                   _passo("Divine Barrage", "a cada 4s")]
        if fis > 0:
            passos.append(_passo("Ethereal Barrage", "a cada 4s, alternando com a Divine Barrage"))
        passos.append(_passo("Divine Missile", "nos intervalos"))
        nota = "Holy %s, físico %s. Ataque básico com arma o tempo todo. Stance: Sharpshooter." % (_pct(holy), _pct(fis))
    else:
        passos += [_passo("Ethereal Barrage", "a cada 4s")]
        if holy > 0:
            passos.append(_passo("Divine Barrage", "a cada 4s, alternando com a Ethereal Barrage"))
        passos += [_passo("Strong Ethereal Spear", "a cada 8s"), _passo("Ethereal Spear", "nos intervalos")]
        nota = "Físico %s, holy %s. Ataque básico com arma o tempo todo. Stance: Sharpshooter." % (_pct(fis), _pct(holy))
    return {"passos": passos, "nota": nota}


def _knight(mods, aj):
    fis = mods.get("fisico", 100)
    if fis <= 0:
        return None
    passos = [_passo("Annihilation", "sempre que sair da recarga (30s)"),
              _passo("Fierce Berserk", "a cada 6s"),
              _passo("Front Sweep", "a cada 6s, alternando com o Fierce Berserk"),
              _passo("Brutal Strike", "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)")]
    return {"passos": passos, "nota": "Físico %s. Stance: Blood Rage para dano; Protector se for o blocker." % _pct(fis)}


def _monk(mods, aj):
    fis = mods.get("fisico", 100)
    if fis <= 0:
        return None
    passos = [_passo("Thousand Fist Blows", "builder, a cada 8s"),
              _passo("Mystic Repulse", "builder, a cada 8s (alcance 7)"),
              _passo("Double Jab", "builder, a cada 4s, até juntar 5 de Harmony"),
              _passo("Devastating Knockout", "spender com 5 de Harmony (a cada 8s, alcance 7)"),
              _passo("Forceful Uppercut", "sempre que sair da recarga (60s)")]
    return {"passos": passos,
            "nota": "Físico %s. Gaste a Harmony só com 5 pontos (+112%% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender." % _pct(fis)}


def gerar(boss):
    """Retorna {"knight": {...}, "paladin": ..., "sorcerer": ..., "druid": ..., "monk": ..., "nota": ...}."""
    mods = _mods(boss)
    aj = boss.get("rotacaoAjustes") or {}
    rot = {
        "knight": _knight(mods, aj),
        "paladin": _paladin(mods, aj),
        "sorcerer": _mago(mods, aj, "sorcerer"),
        "druid": _mago(mods, aj, "druid"),
        "monk": _monk(mods, aj),
    }
    for voc, texto in (aj.get("notas") or {}).items():
        if rot.get(voc):
            rot[voc]["nota"] = (rot[voc]["nota"] + " " + texto).strip()
        else:
            rot[voc] = {"passos": [], "nota": texto}
    for voc in list(rot):
        if rot[voc] is None:
            rot[voc] = {"passos": [], "nota": "Não causa dano relevante neste boss (imune aos elementos dessa vocação)."}
    if aj.get("nota"):
        rot["nota"] = aj["nota"]
    return rot


def magias_usadas(rot):
    return sorted({p["magia"] for v in rot.values() if isinstance(v, dict) for p in v.get("passos", [])})
