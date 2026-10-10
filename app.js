(function () {
  "use strict";

  // Ordem das seções. Grupos que não estiverem aqui aparecem no final.
  var ORDEM_GRUPOS = ["Grave Danger", "Heart of Destruction", "Dream Courts", "Avulsos"];

  // Ícone (32x32) de cada grupo no menu lateral.
  var ICONE_GRUPO = {
    "Grave Danger": "img/itens/final-judgement.gif",
    "Heart of Destruction": "img/itens/devourer-core.gif",
    "Dream Courts": "img/itens/dream-shroud.gif",
    "Avulsos": "img/itens/silver-token.gif"
  };

  // Ícone da manchete de cada subgrupo (ícones de notícia do tibia.com).
  function iconeSubgrupo(s) {
    if (/final|last/i.test(s)) return "tema/newsicon_development_big.png";
    if (/di[aá]rio/i.test(s)) return "tema/newsicon_community_big.png";
    return "tema/newsicon_cipsoft_big.png";
  }

  // Ícones baixados por coletar.py para img/icones/.
  var ICONES = {
    fisico: "fisico.png", terra: "terra.gif", fogo: "fogo.gif", morte: "morte.gif",
    energia: "energia.gif", sagrado: "sagrado.gif", gelo: "gelo.gif", cura: "cura.png",
    paralisia: "paralisia.gif", invisibilidade: "invisibilidade.gif",
    sim: "sim.png", nao: "nao.png", hp: "hp.png", xp: "xp.png",
    bane: "bane.png", archfoe: "archfoe.png", nemesis: "nemesis.png"
  };
  var ELEMENTOS = [
    ["fisico", "Físico"], ["terra", "Terra"], ["fogo", "Fogo"], ["morte", "Morte"],
    ["energia", "Energia"], ["sagrado", "Sagrado"], ["gelo", "Gelo"], ["cura", "Cura"]
  ];
  var IMUNIDADES = { Paralysis: ["paralisia", "Paralisia"], Invisibility: ["invisibilidade", "Invisibilidade"] };
  var CAMPOS = { Fire: ["fogo", "Fogo"], Energy: ["energia", "Energia"], Poison: ["terra", "Veneno"] };
  var TIPOS = { bane: "Bane", archfoe: "Archfoe", nemesis: "Nemesis" };

  var bosses = (window.BOSSES || []).slice();
  var secoesEl = document.getElementById("secoes");
  var menuEl = document.getElementById("MenuItens");
  var buscaEl = document.getElementById("busca");
  var vazioEl = document.getElementById("vazio");
  var modalEl = document.getElementById("modal");
  var modalCaixaEl = document.getElementById("modal-caixa");
  var ultimoFoco = null;

  // ---------- utilidades ----------
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function milhar(n) {
    return String(n).replace(/\d+/g, function (x) { return Number(x).toLocaleString("pt-BR"); });
  }
  function slug(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function sprite(src, alt) {
    if (!src) return '<span class="sem-img" title="sprite não encontrado">?</span>';
    return '<img class="sprite" src="' + esc(src) + '" alt="' + esc(alt) + '" title="' + esc(alt) + '">';
  }
  function icone(chave, titulo) {
    return '<img class="icone" src="img/icones/' + ICONES[chave] + '" alt="' + esc(titulo) + '" title="' + esc(titulo) + '">';
  }
  function guardar(chave, valor) { try { localStorage.setItem(chave, JSON.stringify(valor)); } catch (e) { /* sem armazenamento */ } }
  function ler(chave, padrao) {
    try { var v = localStorage.getItem(chave); return v == null ? padrao : JSON.parse(v); } catch (e) { return padrao; }
  }

  // ---------- peças do layout do tibia.com ----------
  function caixa(titulo, conteudo, opcoes) {
    opcoes = opcoes || {};
    return '<div class="Box"' + (opcoes.id ? ' id="' + opcoes.id + '"' : "") + ">" +
      '<div class="Corner-tl"></div><div class="Corner-tr"></div>' +
      '<div class="Border_1"></div>' +
      '<div class="BorderTitleText"><div class="Title">' + titulo + "</div>" + (opcoes.extraTitulo || "") + "</div>" +
      '<div class="Border_2"><div class="Border_3"><div class="BoxContent">' + conteudo + "</div></div></div>" +
      '<div class="Border_1"></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div>' +
      "</div>";
  }

  function legenda(texto) {
    return '<div class="CaptionContainer"><div class="CaptionInnerContainer">' +
      '<span class="CaptionEdgeLeftTop"></span><span class="CaptionEdgeRightTop"></span>' +
      '<span class="CaptionBorderTop"></span><span class="CaptionVerticalLeft"></span>' +
      '<div class="Text">' + texto + "</div>" +
      '<span class="CaptionVerticalRight"></span><span class="CaptionBorderBottom"></span>' +
      '<span class="CaptionEdgeLeftBottom"></span><span class="CaptionEdgeRightBottom"></span>' +
      "</div></div>";
  }

  function tabela(titulo, corpo) {
    return '<div class="TableContainer">' + legenda(esc(titulo)) +
      '<div class="Table1"><div class="InnerTableContainer"><div class="TableContentContainer">' +
      corpo + "</div></div></div></div>";
  }

  function textoLevel(lv) {
    if (!lv || !lv.recomendado) return "";
    return "Lv rec. <b>" + esc(lv.recomendado) + "</b>";
  }

  // ---------- grupos ----------
  function grupos() {
    var nomes = ORDEM_GRUPOS.slice();
    bosses.forEach(function (b) { if (nomes.indexOf(b.grupo) === -1) nomes.push(b.grupo); });
    return nomes.filter(function (g) { return bosses.some(function (b) { return b.grupo === g; }); });
  }

  // Grupos ordenados pelo level recomendado (menor primeiro) em vez do campo "ordem".
  var ORDENAR_POR_LEVEL = ["Avulsos"];

  function levelNum(b) {
    var n = parseInt((b.level && b.level.recomendado) || "", 10);
    return isNaN(n) ? 99999 : n;
  }

  function bossesDoGrupo(g) {
    var porLevel = ORDENAR_POR_LEVEL.indexOf(g) !== -1;
    return bosses
      .map(function (b, i) { return { b: b, i: i }; })
      .filter(function (x) { return x.b.grupo === g; })
      .sort(function (a, b) {
        if (porLevel && levelNum(a.b) !== levelNum(b.b)) return levelNum(a.b) - levelNum(b.b);
        return (a.b.ordem || 0) - (b.b.ordem || 0);
      });
  }

  // ---------- cards ----------
  function card(b, i) {
    var lv = textoLevel(b.level);
    return '<button class="card" type="button" data-i="' + i + '" id="card-' + i + '" data-busca="' +
      esc((b.nome + " " + (b.local || "")).toLowerCase()) + '">' +
      '<div class="TableContainer">' + legenda(esc(b.nome)) +
      '<div class="Table1"><div class="InnerTableContainer"><div class="TableContentContainer">' +
      '<div class="slot">' + sprite(b.sprite, b.nome) + "</div>" +
      (b.local ? '<div class="linha Even">' + esc(b.local) + "</div>" : "") +
      (lv ? '<div class="linha Odd">' + lv + "</div>" : "") +
      "</div></div></div></div></button>";
  }

  // ---------- conteúdo ----------
  function renderConteudo() {
    var gs = grupos();
    // Barra vermelha de informações, como a do topo do tibia.com
    var html = '<div class="Box"><div class="Corner-tl"></div><div class="Corner-tr"></div><div class="Border_1"></div>' +
      '<div class="BorderTitleText InfoTitle"><div class="InfoBar"><span><b>' + bosses.length + "</b> bosses</span><span><b>" +
      gs.length + "</b> grupos</span><span>Dados: TibiaWiki BR</span></div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';

    gs.forEach(function (g) {
      var lista = bossesDoGrupo(g);
      var subs = [];
      lista.forEach(function (x) { var s = x.b.subgrupo || ""; if (subs.indexOf(s) === -1) subs.push(s); });

      var corpo = "";
      subs.forEach(function (s) {
        var doSub = lista.filter(function (x) { return (x.b.subgrupo || "") === s; });
        corpo += '<div class="subgrupo">';
        if (s) {
          // mesma estrutura das manchetes do tibia.com
          corpo += '<div class="NewsHeadline"><div class="NewsHeadlineBackground"><div>' +
            '<img class="NewsHeadlineIcon" src="' + iconeSubgrupo(s) + '" alt="">' +
            '<div class="NewsHeadlineDate"><span class="contagem">' + doSub.length + "</span>&nbsp;" +
            (doSub.length === 1 ? "boss" : "bosses") + " -</div></div>" +
            '<div class="NewsHeadlineText">' + esc(s) + "</div></div></div>";
        }
        corpo += '<div class="grade">' + doSub.map(function (x) { return card(x.b, x.i); }).join("") + "</div></div>";
      });

      html += '<div class="secao" id="g-' + slug(g) + '">' +
        caixa(esc(g) + ' <small class="contagem-total">(' + lista.length + ")</small>", corpo) + "</div>";
    });
    secoesEl.innerHTML = html;
  }

  // ---------- menu lateral ----------
  function renderMenu() {
    var abertos = ler("menuAbertos", null);
    var html = "";
    grupos().forEach(function (g, n) {
      var lista = bossesDoGrupo(g);
      var aberto = abertos ? abertos.indexOf(g) !== -1 : n === 0;
      var ic = ICONE_GRUPO[g] || (lista[0] && lista[0].b.sprite);
      html += '<div class="menuitem' + (aberto ? " aberto" : "") + '" data-grupo="' + esc(g) + '">' +
        '<div class="MenuButton" role="button" tabindex="0" aria-expanded="' + aberto + '">' +
          '<div class="Button"></div>' +
          '<span class="Lights"><div class="light_lu"></div><div class="light_ld"></div><div class="light_ru"></div></span>' +
          '<div class="Icon">' + (ic ? '<img class="pixel" src="' + esc(ic) + '" alt="">' : "") + "</div>" +
          '<div class="Label' + (g.length > 14 ? " longo" : "") + '">' + esc(g) + "</div>" +
          '<div class="Extend"></div>' +
        "</div>" +
        '<div class="Submenu">' +
        lista.map(function (x) {
          return '<a class="Submenuitem" href="#card-' + x.i + '" data-i="' + x.i + '">' +
            '<div class="LeftChain"></div><div class="ActiveSubmenuItemIcon"></div>' +
            '<div class="SubmenuitemLabel">' + esc(x.b.nome) + "</div>" +
            '<div class="RightChain"></div></a>';
        }).join("") +
        "</div></div>";
    });
    menuEl.innerHTML = html;
  }

  function alternarGrupo(item, rolar) {
    var aberto = !item.classList.contains("aberto");
    item.classList.toggle("aberto", aberto);
    item.querySelector(".MenuButton").setAttribute("aria-expanded", aberto);
    var abertos = [].map.call(menuEl.querySelectorAll(".menuitem.aberto"), function (m) { return m.getAttribute("data-grupo"); });
    guardar("menuAbertos", abertos);
    if (aberto && rolar) {
      var sec = document.getElementById("g-" + slug(item.getAttribute("data-grupo")));
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // ---------- busca ----------
  function filtrar() {
    var termo = buscaEl.value.trim().toLowerCase();
    var algum = false;
    secoesEl.querySelectorAll(".secao").forEach(function (sec) {
      var total = 0;
      sec.querySelectorAll(".subgrupo").forEach(function (sub) {
        var vis = 0;
        sub.querySelectorAll(".card").forEach(function (c) {
          var ok = !termo || c.getAttribute("data-busca").indexOf(termo) !== -1;
          c.hidden = !ok;
          if (ok) vis++;
        });
        sub.hidden = vis === 0;
        var cont = sub.querySelector(".contagem");
        if (cont) cont.textContent = vis;
        total += vis;
      });
      sec.hidden = total === 0;
      sec.querySelector(".contagem-total").textContent = "(" + total + ")";
      if (total) algum = true;
    });
    vazioEl.hidden = algum;
    // menu acompanha a busca
    menuEl.querySelectorAll(".Submenuitem").forEach(function (a) {
      var c = document.getElementById("card-" + a.getAttribute("data-i"));
      a.classList.toggle("oculto", !!(c && c.hidden));
    });
    if (termo) menuEl.querySelectorAll(".menuitem").forEach(function (m) {
      var tem = m.querySelector(".Submenuitem:not(.oculto)");
      m.classList.toggle("aberto", !!tem);
    });
  }

  // ---------- popup ----------
  function classeElemento(v) {
    var n = parseInt(v, 10);
    if (isNaN(n)) return ["", "Sem informação"];
    if (n < 0) return ["cura-se", "Cura-se"];
    if (n === 0) return ["imune", "Imune"];
    if (n < 100) return ["forte", "Forte a"];
    if (n > 100) return ["fraco", "Fraco a"];
    return ["neutro", "Neutro a"];
  }

  function blocoInfo(b) {
    var xp = b.xp && /^\d+$/.test(b.xp) ? Number(b.xp) : null;
    var lv = b.level || {};
    var linhas = [
      ["Local", esc(b.local || "?")],
      ["Level recomendado", lv.recomendado ? "<b>" + esc(lv.recomendado) + "</b>" + (lv.minimo ? " (mínimo " + esc(lv.minimo) + ")" : "") : "?"],
      ["Quest", lv.quest ? '<a href="' + esc(lv.link) + '" target="_blank" rel="noopener">' + esc(lv.quest) + "</a>" : "?"],
      ["HP", icone("hp", "HP") + " " + (b.hp ? esc(milhar(b.hp)) : "?")],
      ["XP", icone("xp", "XP") + " " + (b.xp ? esc(milhar(b.xp)) : "?") +
        (xp ? ' <small>(<span class="bonus">' + milhar(Math.round(xp * 1.5)) + "</span> com bônus)</small>" : "")],
      ["Nível de boss", b.tipo && TIPOS[b.tipo] ? '<span class="tipo-boss">' + icone(b.tipo, TIPOS[b.tipo]) + " " + TIPOS[b.tipo] + "</span>" : "?"]
    ];
    if (b.subgrupo) linhas.splice(1, 0, ["Grupo", esc(b.grupo + " · " + b.subgrupo)]);
    return tabela("Informações",
      '<div class="info-boss"><table class="TableContent">' + linhas.map(function (l) {
        return '<tr><td class="LabelV">' + l[0] + ":</td><td>" + l[1] + "</td></tr>";
      }).join("") + '</table><div class="info-sprite">' + sprite(b.sprite, b.nome) + "</div></div>");
  }

  function blocoResistencias(b) {
    var el = b.elementos;
    if (!el) return "";
    var cels = ELEMENTOS.map(function (e) {
      var v = el[e[0]], c = classeElemento(v);
      var dica = c[1] === "Cura-se" ? "Cura-se quando atacado com " + e[1] : c[1] === "Imune" ? "Imune a " + e[1] : c[1] + " " + e[1];
      return '<div class="elem" title="' + esc(dica) + '"><span class="elem-ic">' + icone(e[0], e[1]) +
        '</span><span class="elem-v ' + c[0] + '">' + esc(v || "?") + "</span></div>";
    }).join("");
    function icones(lista, mapa) {
      if (!lista || !lista.length) return "Nada.";
      return lista.map(function (x) { return mapa[x] ? icone(mapa[x][0], mapa[x][1]) : esc(x); }).join(" ");
    }
    function simNao(v) { return v === true ? icone("sim", "Sim") : v === false ? icone("nao", "Não") : "?"; }
    return tabela("Resistências",
      '<div class="Odd" style="padding:6px"><div class="elementos">' + cels + "</div>" +
      '<div class="caract">' +
        "<div><b>Imunidades:</b><div>" + icones(b.imunidades, IMUNIDADES) + "</div></div>" +
        "<div><b>Pode ser puxado:</b><div>" + simNao(b.podeSerPuxado) + "</div></div>" +
        "<div><b>Passa por:</b><div>" + icones(b.passaPor, CAMPOS) + "</div></div>" +
        "<div><b>Empurra objetos:</b><div>" + simNao(b.empurraObjetos) + "</div></div>" +
      "</div></div>");
  }

  function gradeItens(lista) {
    return '<div class="loot">' + lista.map(function (it) {
      return '<a class="item" href="' + esc(it.link) + '" target="_blank" rel="noopener" title="' + esc(it.nome) + '">' +
        '<span class="slot-item">' + sprite(it.sprite, it.nome) + "</span><span>" +
        (it.qtd ? '<span class="qtd-item">' + esc(it.qtd) + "</span> " : "") + esc(it.nome) + "</span></a>";
    }).join("") + "</div>";
  }

  // Loot: tokens primeiro (só se o boss dropar) e depois de comum a muito raro.
  var ROTULO_RARIDADE = { "comum": "Comum", "incomum": "Incomum", "semi-raro": "Semi-raro", "raro": "Raro",
    "muito raro": "Muito raro", "sem raridade": "Sem raridade" };

  function blocoLoot(b) {
    var linhas = "";
    var t = b.tokens || [];
    if (t.length) {
      linhas += '<tr><td class="LabelV">Tokens:</td><td><div class="tokens">' + t.map(function (tk) {
        var classe = /gold/i.test(tk.nome) ? "gold" : "silver";
        return '<div class="token ' + classe + '">' + sprite(tk.sprite, tk.nome) +
          '<div><div class="qtd">' + esc(tk.qtd) + '</div><div class="info">' + esc(tk.nome) + " · " + esc(tk.raridade) + "</div></div></div>";
      }).join("") + "</div></td></tr>";
    }
    (b.lootTiers || []).forEach(function (tier) {
      linhas += '<tr><td class="LabelV">' + esc(ROTULO_RARIDADE[tier.raridade] || tier.raridade) + ":</td><td>" + gradeItens(tier.itens) + "</td></tr>";
    });
    if (b.lootStatus === "pendente") {
      linhas += '<tr><td class="LabelV">Aviso:</td><td><p class="aviso pendente">A wiki não informa a raridade do loot deste boss; acima está a lista geral.</p></td></tr>';
    }
    if (!linhas) return "";
    return tabela("Loot", '<table class="TableContent">' + linhas + "</table>");
  }

  // Rotação de ataque por vocação (gerada por rotacoes.py)
  var VOCACOES = [["knight", "Knight"], ["paladin", "Paladin"], ["sorcerer", "Sorcerer"], ["druid", "Druid"], ["monk", "Monk"]];

  function blocoRotacao(b) {
    var r = b.rotacao;
    if (!r) return "";
    var colunas = VOCACOES.map(function (v) {
      var dados = r[v[0]] || { passos: [] };
      var passos = (dados.passos || []).map(function (p, n) {
        return '<li class="passo"><span class="ordem">' + (n + 1) + "</span>" +
          (p.icone ? '<img class="icone-magia" src="' + esc(p.icone) + '" alt="" title="' + esc(p.magia) + '">' : '<span class="icone-magia vazio"></span>') +
          '<span class="passo-txt"><b>' + esc(p.magia) + '</b><span class="palavras">' + esc(p.palavras) + "</span>" +
          (p.obs ? '<span class="obs">' + esc(p.obs) + "</span>" : "") + "</span></li>";
      }).join("");
      return '<div class="voc"><div class="voc-titulo">' + v[1] + "</div>" +
        (passos ? '<ol class="passos">' + passos + "</ol>" : "") +
        (dados.nota ? '<p class="voc-nota">' + esc(dados.nota) + "</p>" : "") + "</div>";
    }).join("");
    return tabela("Rotação de ataque",
      '<div class="rotacao">' + colunas + "</div>" +
      (r.nota ? '<p class="rot-nota Even"><b>Neste boss:</b> ' + esc(r.nota) + "</p>" : "") +
      '<p class="rot-rodape Odd">Ordem de prioridade a cada 2s (magias e runas de ataque dividem a mesma recarga). ' +
      "Calculada a partir das resistências do boss e dos dados das magias após o update de 16/06/2026 (TibiaWiki). Ajuste ao seu level e equipamento.</p>");
  }

  // [[Nome]] ou [[Nome|texto]] vira "texto" + sprite.
  function textoMecanica(linha, sprites) {
    var partes = [], ultimo = 0, re = /\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, m;
    while ((m = re.exec(linha))) {
      partes.push(esc(linha.slice(ultimo, m.index)));
      var alvo = m[1].trim(), rotulo = m[2] != null ? m[2] : alvo;
      var src = sprites && sprites[alvo];
      partes.push('<span class="ref">' + esc(rotulo) +
        (src ? ' <img class="sprite ref-img" src="' + esc(src) + '" alt="' + esc(alvo) + '" title="' + esc(alvo) + '">' : "") + "</span>");
      ultimo = re.lastIndex;
    }
    partes.push(esc(linha.slice(ultimo)));
    return partes.join("");
  }

  function blocoMecanica(b) {
    var m = b.mecanica;
    if (!m || !m.length) return tabela("Mecânica", '<p class="aviso pendente Odd" style="padding:6px">Mecânica ainda não escrita.</p>');
    if (typeof m === "string") m = [m];
    // Linhas que começam com "- " viram subtópicos da linha anterior.
    var html = "", aberto = false, sub = false;
    m.forEach(function (l) {
      var eSub = /^- /.test(l);
      var txt = textoMecanica(eSub ? l.slice(2) : l, b.spritesMecanica);
      if (eSub) {
        if (!sub) { html += "<ul>"; sub = true; }
        html += "<li>" + txt + "</li>";
      } else {
        if (sub) { html += "</ul>"; sub = false; }
        if (aberto) html += "</li>";
        html += "<li>" + txt;
        aberto = true;
      }
    });
    if (sub) html += "</ul>";
    if (aberto) html += "</li>";
    return tabela("Mecânica", '<div class="Odd" style="padding:6px 8px"><ul class="mecanica">' + html + "</ul></div>");
  }

  function blocoTabela(b) {
    var t = b.tabela;
    if (!t || !t.linhas) return "";
    return tabela(t.titulo || "", '<table class="TableContent tabela-extra">' +
      "<tr>" + (t.colunas || []).map(function (c) { return '<td class="LabelV">' + esc(c) + "</td>"; }).join("") + "</tr>" +
      t.linhas.map(function (l) { return "<tr>" + l.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") +
      "</table>");
  }

  // Fases, minibosses e criaturas importantes da luta
  var NOMES_EL = { fisico: "físico", terra: "terra", fogo: "fogo", morte: "death", energia: "energia", sagrado: "holy", gelo: "gelo" };

  function resumoElementos(el) {
    var lista = Object.keys(NOMES_EL).map(function (k) { return [k, parseInt(el && el[k], 10)]; })
      .filter(function (x) { return !isNaN(x[1]); });
    var fortes = lista.filter(function (x) { return x[1] > 100; }).sort(function (a, b) { return b[1] - a[1]; });
    var cura = lista.filter(function (x) { return x[1] < 0; });
    var imune = lista.filter(function (x) { return x[1] === 0; });
    var resiste = lista.filter(function (x) { return x[1] > 0 && x[1] < 100; }).sort(function (a, b) { return a[1] - b[1]; });
    function chips(l, classe) {
      return l.map(function (x) {
        return '<span class="chip ' + classe + '">' + icone(x[0], NOMES_EL[x[0]]) + " " + NOMES_EL[x[0]] + " " + x[1] + "%</span>";
      }).join(" ");
    }
    var html = "";
    if (fortes.length) html += '<div><b>Toma mais:</b> ' + chips(fortes, "fraco") + "</div>";
    if (imune.length === lista.length && lista.length) html += '<div><b>Imune a todo dano.</b></div>';
    else {
      if (imune.length) html += '<div><b>Imune:</b> ' + chips(imune, "imune") + "</div>";
      if (cura.length) html += '<div><b>Cura com:</b> ' + chips(cura, "cura-se") + "</div>";
      if (resiste.length) html += '<div><b>Resiste:</b> ' + chips(resiste, "forte") + "</div>";
      if (!fortes.length && !imune.length && !cura.length && !resiste.length) html += '<div>Sem fraquezas nem imunidades conhecidas (todos 100%).</div>';
    }
    return html;
  }

  function blocoFases(b) {
    var fases = b.fases || [];
    if (!fases.length) return "";
    var linhas = fases.map(function (f) {
      var ataques = VOCACOES.map(function (v) {
        var a = (f.ataques && f.ataques[v[0]]) || [];
        return '<div class="fase-voc"><span class="fase-voc-nome">' + v[1] + "</span>" +
          (a.length ? a.map(function (m) {
            return '<span class="fase-magia" title="' + esc(m.magia + " (" + m.palavras + ")") + '">' +
              (m.icone ? '<img class="icone-magia peq" src="' + esc(m.icone) + '" alt="">' : "") +
              '<span class="palavras">' + esc(m.palavras) + "</span></span>";
          }).join("") : '<span class="sem-dano">sem dano</span>') + "</div>";
      }).join("");
      return '<div class="fase">' +
        '<div class="fase-topo">' +
          '<div class="fase-sprite">' + sprite(f.sprite, f.nome) + "</div>" +
          '<div class="fase-info"><b class="fase-nome">' + esc(f.nome) + "</b>" +
            (f.hp ? ' <span class="fase-hp">' + icone("hp", "HP") + " " + esc(milhar(f.hp)) + "</span>" : "") +
            '<div class="fase-dica">' + esc(f.dica || "") + "</div>" +
            '<div class="fase-el">' + resumoElementos(f.elementos) + "</div>" +
          "</div>" +
        "</div>" +
        '<div class="fase-ataques">' + ataques + "</div>" +
      "</div>";
    }).join("");
    return tabela("Fases e alvos", '<div class="fases">' + linhas + "</div>" +
      '<p class="rot-rodape Odd">Melhor ataque de cada vocação contra cada fase (as 2 primeiras magias da rotação calculada para ela). ' +
      "Resistências da TibiaWiki BR, corrigidas pela wiki em inglês quando a BR só tinha o valor padrão.</p>");
  }

  function botao(texto, attrs) {
    return '<a class="BigButton" ' + attrs + '><span class="BigButtonText">' + texto + "</span></a>";
  }

  function abrir(i) {
    var b = bosses[i];
    if (!b) return;
    var corpo =
      blocoInfo(b) + blocoResistencias(b) + blocoRotacao(b) + blocoFases(b) + blocoLoot(b) + blocoMecanica(b) + blocoTabela(b) +
      '<div class="botoes">' +
      (b.link ? botao("Ver na TibiaWiki", 'href="' + esc(b.link) + '" target="_blank" rel="noopener"') : "") +
      botao("Fechar", 'href="#" data-fechar="1"') + "</div>";
    modalCaixaEl.innerHTML = caixa('<span id="m-nome">' + esc(b.nome) + "</span>", corpo, {
      extraTitulo: '<button class="fechar-x" type="button" data-fechar="1" aria-label="Fechar">X</button>'
    });
    // separa as tabelas do popup
    modalCaixaEl.querySelectorAll(".BoxContent > .TableContainer").forEach(function (t, n) { if (n) t.style.marginTop = "14px"; });
    menuEl.querySelectorAll(".Submenuitem").forEach(function (a) { a.classList.toggle("ativo", a.getAttribute("data-i") === String(i)); });
    ultimoFoco = document.activeElement;
    modalEl.hidden = false;
    modalEl.scrollTop = 0;
    document.body.style.overflow = "hidden";
    modalCaixaEl.querySelector(".fechar-x").focus();
  }

  function fechar() {
    if (modalEl.hidden) return;
    modalEl.hidden = true;
    document.body.style.overflow = "";
    if (ultimoFoco) ultimoFoco.focus();
  }

  // ---------- eventos ----------
  secoesEl.addEventListener("click", function (e) {
    var c = e.target.closest(".card");
    if (c) abrir(Number(c.getAttribute("data-i")));
  });
  menuEl.addEventListener("click", function (e) {
    var bt = e.target.closest(".MenuButton");
    if (bt) { alternarGrupo(bt.parentNode, true); return; }
    var sub = e.target.closest(".Submenuitem");
    if (sub) {
      e.preventDefault();
      var c = document.getElementById("card-" + sub.getAttribute("data-i"));
      if (c) {
        c.scrollIntoView({ behavior: "smooth", block: "center" });
        c.classList.remove("destaque"); void c.offsetWidth; c.classList.add("destaque");
      }
      abrir(Number(sub.getAttribute("data-i")));
    }
  });
  menuEl.addEventListener("keydown", function (e) {
    var bt = e.target.closest(".MenuButton");
    if (bt && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); alternarGrupo(bt.parentNode, true); }
  });
  modalEl.addEventListener("click", function (e) {
    if (e.target === modalEl || e.target.closest("[data-fechar]")) { e.preventDefault(); fechar(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!modalEl.hidden) fechar();
      else if (buscaEl.value) { buscaEl.value = ""; filtrar(); }
    }
  });
  buscaEl.addEventListener("input", filtrar);
  buscaEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var primeiro = secoesEl.querySelector(".card:not([hidden])");
      if (primeiro) primeiro.click();
    }
  });

  renderConteudo();
  renderMenu();
})();
