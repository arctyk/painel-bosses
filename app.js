(function () {
  "use strict";

  // Ordem das seções. Grupos que não estiverem aqui aparecem no final.
  var ORDEM_GRUPOS = ["Grave Danger", "Heart of Destruction", "Dream Courts", "Avulsos"];


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
  var EXTRA = window.BOSSES_EXTRA || {};   // resumo da mecânica e cooldown (bosses-extra.js)
  var secoesEl = document.getElementById("secoes");
  var buscaEl = document.getElementById("busca");
  var vazioEl = document.getElementById("vazio");

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

  // ---------- tabela ----------
  function textoCooldown(h) {
    if (h == null) return '<span class="sem-dano" title="A TibiaWiki não informa o cooldown deste boss">—</span>';
    if (h < 24) return "<b>" + h + "h</b>";
    var d = Math.floor(h / 24), r = h % 24;
    return "<b>" + d + "d" + (r ? " " + r + "h" : "") + "</b>";
  }

  // só o ícone do elemento (o nome aparece ao passar o mouse)
  function icoElemento(el, comSD) {
    var rotulo = NOME_ELEMENTO[el] || el;
    if (el === "morte" && comSD) rotulo = "SD (Sudden Death)";
    return '<span class="el-ic el-' + el + '" title="' + esc(rotulo) + '">' + icone(el, rotulo) + "</span>";
  }

  function celulaDano(b) {
    var a = b.ataque || {};
    var sd = { sorcerer: 1, druid: 1, paladin: 1 };       // death de quem usa runa = SD
    return '<div class="dano-voc">' + VOCACOES.map(function (v) {
      var d = a[v[0]] || {};
      var els = d.elementos || [];
      var alt = (d.alternativas || []).length
        ? '<span class="el-ou">ou</span>' + d.alternativas.map(function (e) { return icoElemento(e); }).join("") : "";
      return '<div class="dv"><span class="dv-voc">' + v[1] + '</span><span class="dv-els">' +
        (els.length ? els.map(function (e) { return icoElemento(e, sd[v[0]]); }).join('<span class="el-mais">+</span>')
          : '<span class="sem-dano">sem dano</span>') + alt + "</span></div>";
    }).join("") + "</div>";
  }

  function celulaDefesa(b) {
    var d = b.defesa || {};
    var lista = d.elementos || [];
    return (lista.length ? '<div class="def-lista">' + lista.map(function (e) { return icoElemento(e); }).join("") + "</div>"
      : '<span class="sem-dano">—</span>') +
      (d.melee ? '<div class="def-melee" title="Knight e monk lutam colados no boss: também precisam de proteção física">' +
        icoElemento("fisico") + " EK/EM</div>" : "");
  }

  function linhaBoss(b, i, n) {
    var ex = EXTRA[b.nome] || {};
    var tipo = b.tipo && TIPOS[b.tipo] ? '<div class="boss-tipo">' + icone(b.tipo, TIPOS[b.tipo]) + " " + TIPOS[b.tipo] + "</div>" : "";
    return '<tr class="boss-linha ' + (n % 2 ? "Even" : "Odd") + '" data-i="' + i + '" data-busca="' +
        esc((b.nome + " " + (b.local || "")).toLowerCase()) + '">' +
      '<td class="col-boss"><div class="boss-cel"><div class="boss-spr">' + sprite(b.sprite, b.nome) + "</div>" +
        '<div><b class="boss-nome">' + esc(b.nome) + "</b>" + tipo +
        (b.local ? '<div class="boss-local">' + esc(b.local) + "</div>" : "") + "</div></div></td>" +
      '<td class="col-dano">' + celulaDano(b) + "</td>" +
      '<td class="col-def">' + celulaDefesa(b) + "</td>" +
      '<td class="col-resumo">' + esc(ex.resumo || "") + "</td>" +
      '<td class="col-cd">' + textoCooldown(ex.cooldown) + "</td>" +
      '<td class="col-det"><button type="button" class="botao-sec bt-detalhes" aria-expanded="false" ' +
        'title="Ver detalhes" aria-label="Detalhes de ' + esc(b.nome) + '"><span class="seta-bt aberta"></span></button></td>' +
      "</tr>" +
      '<tr class="det-linha" hidden><td colspan="6"><div class="det-corpo"></div></td></tr>';
  }

  function tabelaBosses(lista) {
    return '<div class="TableContainer"><div class="Table1"><div class="InnerTableContainer"><div class="TableContentContainer">' +
      '<table class="TableContent tabela-bosses"><thead><tr>' +
        "<th>Boss</th><th>Dano por vocação</th><th>Defesa</th><th>Mecânica</th>" +
        '<th class="col-cd" title="Cooldown (tempo de espera para matar de novo)">CD</th><th></th>' +
      "</tr></thead><tbody>" +
      lista.map(function (x, n) { return linhaBoss(x.b, x.i, n); }).join("") +
      "</tbody></table></div></div></div></div>";
  }

  // conteúdo do "Detalhes" (o que antes ficava no popup)
  function detalhes(b) {
    return blocoInfo(b) + blocoResistencias(b) + blocoFases(b) + blocoDefesa(b) + blocoLoot(b) + blocoMecanica(b) + blocoTabela(b) +
      (b.link ? '<div class="botoes"><a class="BigButton" href="' + esc(b.link) + '" target="_blank" rel="noopener">' +
        '<span class="BigButtonText">Ver na TibiaWiki</span></a></div>' : "");
  }

  function alternarDetalhes(tr, abrir) {
    var det = tr.nextElementSibling, bt = tr.querySelector(".bt-detalhes");
    if (abrir === undefined) abrir = det.hidden;
    if (abrir && !det.querySelector(".det-corpo").innerHTML) det.querySelector(".det-corpo").innerHTML = detalhes(bosses[Number(tr.getAttribute("data-i"))]);
    det.hidden = !abrir;
    tr.classList.toggle("aberta", abrir);
    bt.setAttribute("aria-expanded", abrir);
    bt.querySelector(".seta-bt").classList.toggle("cima", abrir);   // ▾ fechado, ▴ aberto
    bt.title = abrir ? "Recolher detalhes" : "Ver detalhes";
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
        corpo += tabelaBosses(doSub) + "</div>";
      });

      html += '<div class="secao" id="g-' + slug(g) + '">' +
        caixa(esc(g) + ' <small class="contagem-total">(' + lista.length + ")</small>", corpo) + "</div>";
    });
    secoesEl.innerHTML = html;
  }


  // ---------- busca ----------
  function filtrar() {
    var termo = buscaEl.value.trim().toLowerCase();
    var algum = false;
    secoesEl.querySelectorAll(".secao").forEach(function (sec) {
      var total = 0;
      sec.querySelectorAll(".subgrupo").forEach(function (sub) {
        var vis = 0;
        sub.querySelectorAll(".boss-linha").forEach(function (tr) {
          var ok = !termo || tr.getAttribute("data-busca").indexOf(termo) !== -1;
          tr.hidden = !ok;
          if (!ok) tr.nextElementSibling.hidden = true;
          else if (tr.classList.contains("aberta")) tr.nextElementSibling.hidden = false;
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

  // Elemento de cada vocação (calculado por rotacoes.py considerando a luta inteira)
  var NOME_ELEMENTO = { fisico: "Físico", terra: "Terra", fogo: "Fogo", morte: "Death", energia: "Energia",
    sagrado: "Holy", gelo: "Gelo" };

  function chipElemento(el, extra) {
    var rotulo = NOME_ELEMENTO[el] || el;
    if (el === "morte" && extra) rotulo = "SD";
    return '<span class="el-chip el-' + el + '">' + icone(el, rotulo) + " " + rotulo + "</span>";
  }

  function listaElementos(lista, comSD) {
    if (!lista || !lista.length) return '<span class="sem-dano">sem dano</span>';
    return lista.map(function (e) { return chipElemento(e, comSD); }).join('<span class="el-mais">+</span>');
  }

  function blocoDefesa(b) {
    var d = b.defesa;
    if (!d) return "";
    var cols = VOCACOES.map(function (v) {
      var lista = (d.elementos || []).slice();
      if (d.melee && (v[0] === "knight" || v[0] === "monk") && lista.indexOf("fisico") === -1) lista.unshift("fisico");
      return '<div class="voc-el"><div class="voc-titulo">' + v[1] + '</div><div class="el-linha">' +
        (lista.length ? lista.map(function (e) { return chipElemento(e); }).join(" ") : '<span class="sem-dano">sem dado</span>') +
        "</div></div>";
    }).join("");
    return tabela("Defesa", '<div class="elementos-voc">' + cols + "</div>" +
      (d.nota ? '<p class="rot-nota Even">' + esc(d.nota) + "</p>" : "") +
      '<p class="rot-rodape Odd">Elemento de proteção do set. Knight e monk lutam colados no boss, então também precisam de proteção física.</p>');
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
        var els = (f.elemento && f.elemento[v[0]]) || [];
        return '<div class="fase-voc"><span class="fase-voc-nome">' + v[1] + "</span>" +
          '<div class="el-linha">' + (els.length ? els.map(function (e) { return chipElemento(e, v[0] !== "knight" && v[0] !== "monk"); }).join(" ") : '<span class="sem-dano">sem dano</span>') + "</div></div>";
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
      '<p class="rot-rodape Odd">Melhor elemento de cada vocação contra cada fase. ' +
      "Resistências da TibiaWiki BR, corrigidas pela wiki em inglês quando a BR só tinha o valor padrão.</p>");
  }

  // ---------- eventos ----------
  secoesEl.addEventListener("click", function (e) {
    var bt = e.target.closest(".bt-detalhes");
    if (bt) alternarDetalhes(bt.closest("tr"));
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && buscaEl.value) { buscaEl.value = ""; filtrar(); }
  });
  buscaEl.addEventListener("input", filtrar);
  buscaEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var primeira = secoesEl.querySelector(".boss-linha:not([hidden])");
      if (primeira) { alternarDetalhes(primeira, true); primeira.scrollIntoView({ block: "start" }); }
    }
  });

  renderConteudo();
})();
