(function () {
  "use strict";

  var OUTFITS = window.OUTFITS || [];
  var ITENS = window.ITENS_OUTFIT || {};
  var EXTRA = window.OUTFITS_EXTRA || {};       // como conseguir as partes sem itens (outfits-extra.js)
  var raiz = document.getElementById("conteudo-outfits");
  var buscaEl = document.getElementById("busca");

  var estado = {
    genero: ler("outfitGenero", "m"),
    mostrar: ler("outfitMostrar", "todos"),     // todos | faltando | tenho
    busca: ""
  };
  // marcações salvas neste navegador: { "Nome": { o: 1, a1: 1, a2: 1 } }
  var tenho = ler("outfitsTenho", {});
  var abertos = {};                              // linhas com os detalhes abertos (só nesta visita)
  var PARTE = { 0: "Outfit", 1: "Addon 1", 2: "Addon 2" };
  var CHAVE_PARTE = { 0: "o", 1: "a1", 2: "a2" };
  var TIPO_PT = { Quest: "Quest", Basic: "Básico", Premium: "Premium", Special: "Especial" };

  // Tabela "Itens": só itens que vêm de criaturas (drop) e gold. Itens de quest/troca ficam de fora.
  var SEMPRE_NA_TABELA = { "Gold Coin": "" };
  var OBTIDO_DE_CRIATURA = { "Vampire Dust": "Blessed Wooden Stake no corpo de vampiros" };
  function entraNaTabela(nome) {
    return nome in SEMPRE_NA_TABELA || nome in OBTIDO_DE_CRIATURA || ((ITENS[nome] || {}).dropadoPor || []).length > 0;
  }

  // ---------- utilidades ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function milhar(n) { return Number(n).toLocaleString("pt-BR"); }
  // números grandes de forma curta (gold): 1.000.326.000 -> "1 bi", 500.000.000 -> "500 kk"
  function curto(n) {
    if (n >= 1e9) return (Math.round(n / 1e8) / 10).toLocaleString("pt-BR") + " bi";
    if (n >= 1e6) return (Math.round(n / 1e5) / 10).toLocaleString("pt-BR") + " kk";
    return milhar(n);
  }
  function ler(k, padrao) { try { var v = localStorage.getItem(k); return v == null ? padrao : JSON.parse(v); } catch (e) { return padrao; } }
  function guardar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } }
  function wiki(pagina) { return "https://tibia.fandom.com/wiki/" + encodeURIComponent(pagina.replace(/ /g, "_")); }
  function link(pagina, texto) {
    return '<a href="' + esc(wiki(pagina)) + '" target="_blank" rel="noopener">' + esc(texto || pagina) + "</a>";
  }

  function caixa(id, titulo, conteudo, classe) {
    return '<div class="Box' + (classe ? " " + classe : "") + '" id="' + id + '"><div class="Corner-tl"></div><div class="Corner-tr"></div>' +
      '<div class="Border_1"></div><div class="BorderTitleText"><div class="Title">' + titulo + "</div></div>" +
      '<div class="Border_2"><div class="Border_3"><div class="BoxContent">' + conteudo + "</div></div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
  }

  function tabelaSimples(cabecalhos, corpo, classe) {
    return '<div class="TableContainer"><div class="Table1"><div class="InnerTableContainer"><div class="TableContentContainer">' +
      '<table class="TableContent tabela-lista ' + (classe || "") + '"><thead><tr>' + cabecalhos + "</tr></thead><tbody>" +
      corpo + "</tbody></table></div></div></div></div>";
  }

  // partes visíveis para o gênero escolhido
  function partesDe(o) {
    return o.partes.filter(function (p) { return !p.genero || p.genero === estado.genero; });
  }
  function temAddons(o) { return o.comoAddons !== "sem addons"; }
  // outfits que já vêm com a conta (básicos) ou com a Premium: o outfit base conta sempre como "tenho"
  function deBase(o) { return o.tipo === "Basic" || o.tipo === "Premium"; }
  function marcado(o, k) { return (k === "o" && deBase(o)) || !!(tenho[o.nome] && tenho[o.nome][k]); }
  // ordem da janela de outfits do jogo (ID de aparência do gênero escolhido)
  function ordemJogo(a, b) {
    var x = (a.ids || {})[estado.genero] || 1e9, y = (b.ids || {})[estado.genero] || 1e9;
    return x - y || a.nome.localeCompare(b.nome);
  }

  // ---------- "já tenho" ----------
  function caixasTenho(o) {
    var partes = temAddons(o) ? [["o", "Outfit"], ["a1", "Addon 1"], ["a2", "Addon 2"]] : [["o", "Outfit"]];
    return '<div class="tenho">' + partes.map(function (p) {
      var fixo = p[0] === "o" && deBase(o);
      return '<label class="tenho-op' + (fixo ? " fixo" : "") + '" title="' +
        (fixo ? (o.tipo === "Basic" ? "Vem com a conta" : "Vem com a Premium Account") : "Já tenho: " + p[1]) +
        '"><input type="checkbox" class="marca-outfit" data-nome="' +
        esc(o.nome) + '" data-parte="' + p[0] + '"' + (marcado(o, p[0]) ? " checked" : "") + (fixo ? " disabled" : "") + ">" +
        "<span>" + (p[0] === "o" ? "O" : p[0] === "a1" ? "A1" : "A2") + "</span></label>";
    }).join("") + "</div>";
  }
  function completo(o) {
    return marcado(o, "o") && (!temAddons(o) || (marcado(o, "a1") && marcado(o, "a2")));
  }

  // ---------- busca e filtro ----------
  function casa(texto) { return !estado.busca || String(texto || "").toLowerCase().indexOf(estado.busca) !== -1; }
  function outfitCasa(o) {
    if (estado.mostrar === "tenho" && !completo(o)) return false;
    if (estado.mostrar === "faltando" && completo(o)) return false;
    if (casa(o.nome) || casa(o.quest)) return true;
    return partesDe(o).some(function (p) {
      return p.itens.some(function (it) { return casa(it.item) || ((ITENS[it.item] || {}).dropadoPor || []).some(casa); });
    });
  }

  // ---------- peças visuais ----------
  function spriteItem(nome) {
    var d = ITENS[nome] || {};
    return d.sprite ? '<img class="sprite" src="' + esc(d.sprite) + '" alt="" title="' + esc(nome) + '">' : '<span class="sem-img">?</span>';
  }
  function chipItem(it) {
    var d = ITENS[it.item] || {};
    var dica = it.item + (it.obs ? " (" + it.obs + ")" : "") +
      ((d.dropadoPor || []).length ? "\nDropado por: " + d.dropadoPor.join(", ") : "");
    return '<button type="button" class="item-chip" data-item="' + esc(it.item) + '" title="' + esc(dica) + '">' +
      '<span class="slot-item">' + spriteItem(it.item) + "</span>" +
      '<span class="item-chip-txt"><b>' + milhar(it.qtd) + "×</b> " + esc(it.item) + "</span></button>";
  }
  // figura centrada pela área com desenho (os quadros de 64x64 da wiki deixam a figura deslocada).
  // Tamanho original; só reduz se a figura passar de 64px.
  function figura(src, r, titulo) {
    if (!r) return '<div class="outfit-spr"><img class="sprite" src="' + esc(src) + '" alt=""></div>';
    var k = Math.min(1, 64 / Math.max(r[2], r[3]));
    function px(n) { return Math.round(n * k) + "px"; }
    return '<div class="outfit-spr"' + (titulo ? ' title="' + esc(titulo) + '"' : "") + '><div class="spr-corte" style="width:' + px(r[2]) + ";height:" + px(r[3]) + '">' +
      '<img class="sprite" src="' + esc(src) + '" alt="" style="width:' + px(r[4]) + ";height:" + px(r[5]) +
      ";margin-left:-" + px(r[0]) + ";margin-top:-" + px(r[1]) + '"></div></div>';
  }
  function spriteOutfit(o) {
    var g = (o.sprite || {})[estado.genero] ? estado.genero : "m";
    var src = (o.sprite || {})[g];
    if (!src) return '<div class="outfit-spr"></div>';
    var rs = (o.recorte || {})[g] || [null];
    if (rs.length === 2)   // Yalaharian: lado bom e lado mau, conforme a escolha na quest
      return '<div class="outfit-duplo">' + figura(src, rs[0], "Lado bom") + figura(src, rs[1], "Lado mau") + "</div>";
    return figura(src, rs[0]);
  }
  function celulaOutfit(o) {
    return '<div class="outfit-cel">' + spriteOutfit(o) + "<div>" + "<b>" + link(o.pagina, o.nome) + "</b>" +
      (o.loja ? "" : '<div class="outfit-tipo">' + esc(TIPO_PT[o.tipo] || o.tipo || "") + "</div>") + "</div></div>";
  }
  function botaoSeta(id, aberto) {
    return '<button type="button" class="botao-sec bt-detalhes" data-abrir="' + esc(id) + '" aria-expanded="' + aberto + '" title="' +
      (aberto ? "Recolher" : "Ver detalhes") + '"><span class="seta-bt aberta' + (aberto ? " cima" : "") + '"></span></button>';
  }
  function moeda(v) { return '<span class="preco">' + milhar(v) + ' <img class="pixel icone-tc" src="img/icones/tibia-coin-icone.png" alt="" title="Tibia Coins"></span>'; }

  // ---------- 1) Outfits (quest, básicos, premium, especiais) ----------
  function comoObter(o) {
    if (o.quest) return link(o.quest);
    return '<span class="obs">' + esc(o.comoOutfit || "—") + "</span>";
  }

  // texto para uma parte que não pede itens
  function semItens(o, n) {
    if (n === 0 && deBase(o)) return o.tipo === "Basic" ? "Vem com a conta (todos os personagens)." : "Vem com a Premium Account.";
    var txt = (EXTRA[o.nome] || {})[CHAVE_PARTE[n]];
    if (txt) return txt;
    var como = n === 0 ? o.comoOutfit : o.comoAddons;
    if (o.quest) return "Não pede itens: vem da " + o.quest + (como && /premium/i.test(como) ? " (Premium)" : "") + ".";
    return "Não pede itens" + (como ? " (" + como + ")" : "") + ".";
  }

  function detalhesOutfit(o) {
    var partes = partesDe(o);
    var blocos = [0, 1, 2].map(function (n) {
      if (n > 0 && !temAddons(o)) return "";
      var ps = partes.filter(function (p) { return p.parte === n; });
      var conteudo = ps.length ? ps.map(function (p) {
        return (ps.length > 1 || (p.secao && p.secao !== PARTE[n]) ? '<div class="secao-nome">' + esc(p.secao) + "</div>" : "") +
          '<div class="chips">' + p.itens.map(chipItem).join("") + "</div>" +
          p.itens.filter(function (it) { return it.obs; }).map(function (it) {
            return '<div class="obs">' + esc(it.item) + ": " + esc(it.obs) + "</div>";
          }).join("");
      }).join("") : '<div class="como-parte">' + esc(semItens(o, n)) + "</div>";
      return '<div class="det-parte"><div class="det-parte-tit">' + PARTE[n] + "</div>" + conteudo + "</div>";
    }).join("");
    var extra = [
      o.conquista && o.conquista !== "None" ? "<b>Conquista:</b> " + link(o.conquista) : "",
      o.lancado ? "<b>Lançado na versão:</b> " + esc(o.lancado) : ""
    ].filter(Boolean).join(" · ");
    return '<div class="det-partes">' + blocos + "</div>" + (extra ? '<div class="det-extra">' + extra + "</div>" : "");
  }

  function tabelaOutfits() {
    var lista = OUTFITS.filter(function (o) { return !o.loja; }).filter(outfitCasa)
      .sort(ordemJogo);
    var corpo = lista.map(function (o, i) {
      var id = "o:" + o.nome, ab = !!abertos[id];
      return '<tr class="' + (i % 2 ? "Even" : "Odd") + (completo(o) ? " ja-tenho" : "") + (ab ? " aberta" : "") + '">' +
        '<td class="col-tenho">' + caixasTenho(o) + "</td>" +
        '<td class="col-outfit">' + celulaOutfit(o) + "</td>" +
        '<td class="col-quest">' + comoObter(o) + "</td>" +
        '<td class="col-lvl">' + esc(o.level || "—") + "</td>" +
        '<td class="col-det">' + botaoSeta(id, ab) + "</td></tr>" +
        '<tr class="det-linha"' + (ab ? "" : " hidden") + '><td colspan="5">' + (ab ? detalhesOutfit(o) : "") + "</td></tr>";
    }).join("");
    return tabelaSimples('<th class="col-tenho" title="Marque o que você já tem: Outfit, Addon 1 e Addon 2">Tenho</th>' +
      "<th>Outfit</th><th>Quest / como obter</th>" + '<th class="col-lvl">Level</th><th class="col-det"></th>',
      corpo || '<tr><td colspan="5" class="vazio-cel">Nada encontrado.</td></tr>', "tabela-outf");
  }

  // ---------- 2) Store Outfits ----------
  function tabelaStore() {
    var lista = OUTFITS.filter(function (o) { return o.loja; }).filter(outfitCasa)
      .sort(ordemJogo);
    var corpo = lista.map(function (o, i) {
      var p = o.precos || {};
      var partes = [];
      if (p.base) partes.push("Outfit " + moeda(p.base));
      if (p.addon1) partes.push("Addon 1 " + moeda(p.addon1));
      if (p.addon2) partes.push("Addon 2 " + moeda(p.addon2));
      return '<tr class="' + (i % 2 ? "Even" : "Odd") + (completo(o) ? " ja-tenho" : "") + '">' +
        '<td class="col-tenho">' + caixasTenho(o) + "</td>" +
        '<td class="col-outfit">' + celulaOutfit(o) + "</td>" +
        '<td class="col-preco">' + (p.completo ? moeda(p.completo) : p.base ? moeda(p.base) : "—") + "</td>" +
        '<td class="col-separado">' + (p.completo && partes.length ? partes.join('<span class="sep">·</span>') :
          '<span class="sem-dano">' + (temAddons(o) ? "só o pacote completo" : "sem addons") + "</span>") + "</td></tr>";
    }).join("");
    return '<p class="intro-itens">Outfits vendidos na Store do Tibia, com o preço em Tibia Coins. "Completo" = outfit com os dois addons.</p>' +
      tabelaSimples('<th class="col-tenho">Tenho</th><th>Outfit</th><th class="col-preco">Completo</th><th>Separado</th>',
        corpo || '<tr><td colspan="4" class="vazio-cel">Nada encontrado.</td></tr>', "tabela-store");
  }

  // ---------- 3) Itens ----------
  function agregarItens() {
    var mapa = {};
    OUTFITS.forEach(function (o) {
      partesDe(o).forEach(function (p) {
        var ja = marcado(o, CHAVE_PARTE[p.parte]);
        p.itens.forEach(function (it) {
          var a = mapa[it.item] || (mapa[it.item] = { nome: it.item, total: 0, falta: 0, usos: [] });
          a.total += it.qtd;
          if (!ja) a.falta += it.qtd;
          a.usos.push({ outfit: o.nome, parte: p.parte, qtd: it.qtd, obs: it.obs, ja: ja });
        });
      });
    });
    return Object.keys(mapa).map(function (k) { return mapa[k]; }).filter(function (a) { return entraNaTabela(a.nome); });
  }
  function itemCasa(a) {
    return casa(a.nome) || a.usos.some(function (u) { return casa(u.outfit); }) || ((ITENS[a.nome] || {}).dropadoPor || []).some(casa);
  }

  function detalhesItem(a) {
    var d = ITENS[a.nome] || {};
    var drops = d.dropadoPor || [];
    var usos = a.usos.map(function (u) {
      return '<li class="' + (u.ja ? "ja-tenho" : "") + '"><b>' + esc(u.outfit) + "</b> · " + PARTE[u.parte] + ": " + milhar(u.qtd) +
        (u.obs ? ' <span class="obs">(' + esc(u.obs) + ")</span>" : "") + (u.ja ? ' <span class="tag-ja">já tenho</span>' : "") + "</li>";
    }).join("");
    var dropsHtml = OBTIDO_DE_CRIATURA[a.nome] ? '<span class="obs">' + esc(OBTIDO_DE_CRIATURA[a.nome]) + "</span>"
      : a.nome in SEMPRE_NA_TABELA ? '<span class="sem-dano">dinheiro</span>'
      : drops.map(function (m) { return '<a class="monstro" href="' + esc(wiki(m)) + '" target="_blank" rel="noopener">' + esc(m) + "</a>"; }).join(", ");
    return '<div class="det-partes det-item">' +
      '<div class="det-parte"><div class="det-parte-tit">Usado em</div><ul class="lista-usos">' + usos + "</ul></div>" +
      '<div class="det-parte"><div class="det-parte-tit">Dropado por' + (drops.length ? " (" + drops.length + ")" : "") + "</div>" +
        '<div class="lista-drops">' + dropsHtml + "</div></div></div>";
  }

  function tabelaItens() {
    var lista = agregarItens().filter(itemCasa).sort(function (a, b) { return b.falta - a.falta || a.nome.localeCompare(b.nome); });
    var corpo = lista.map(function (a, i) {
      var d = ITENS[a.nome] || {};
      var id = "i:" + a.nome, ab = !!abertos[id];
      var nDrops = (d.dropadoPor || []).length;
      return '<tr class="' + (i % 2 ? "Even" : "Odd") + (a.falta ? "" : " ja-tenho") + (ab ? " aberta" : "") + '">' +
        '<td class="col-item"><div class="outfit-cel"><span class="slot-item">' + spriteItem(a.nome) + "</span>" +
          '<a href="' + esc(d.link || wiki(a.nome)) + '" target="_blank" rel="noopener"><b>' + esc(a.nome) + "</b></a></div></td>" +
        '<td class="col-num" title="' + milhar(a.falta) + '"><b>' + curto(a.falta) + "</b></td>" +
        '<td class="col-num" title="' + milhar(a.total) + '">' + curto(a.total) + "</td>" +
        '<td class="col-num">' + a.usos.length + "</td>" +
        '<td class="col-num">' + (nDrops || '<span class="sem-dano">—</span>') + "</td>" +
        '<td class="col-det">' + botaoSeta(id, ab) + "</td></tr>" +
        '<tr class="det-linha"' + (ab ? "" : " hidden") + '><td colspan="6">' + (ab ? detalhesItem(a) : "") + "</td></tr>";
    }).join("");
    return '<p class="intro-itens">Itens de drop (e gold) para todos os outfits e addons (' +
      (estado.genero === "m" ? "personagem masculino" : "personagem feminino") + '). <b>Falta</b> desconta o que você já marcou como "tenho". ' +
      "Abra a linha para ver em quais outfits o item é usado e quais criaturas o dropam.</p>" +
      tabelaSimples('<th>Item</th><th class="col-num" title="Quantidade que ainda falta (sem os outfits/addons que você já tem)">Falta</th>' +
        '<th class="col-num" title="Quantidade para todos os outfits e addons">Total</th><th class="col-num" title="Em quantos outfits/addons o item é usado">Usos</th>' +
        '<th class="col-num" title="Quantas criaturas dropam o item">Criaturas</th><th class="col-det"></th>',
        corpo || '<tr><td colspan="6" class="vazio-cel">Nada encontrado.</td></tr>', "tabela-itens");
  }

  // ---------- página ----------
  function barra() {
    var normais = OUTFITS.filter(function (o) { return !o.loja; }), loja = OUTFITS.filter(function (o) { return o.loja; });
    function conta(l) { return l.filter(function (o) { return marcado(o, "o"); }).length; }
    var addons = 0, addonsTot = 0;
    OUTFITS.forEach(function (o) { if (temAddons(o)) { addonsTot += 2; addons += (marcado(o, "a1") ? 1 : 0) + (marcado(o, "a2") ? 1 : 0); } });
    return '<div class="Box"><div class="Corner-tl"></div><div class="Corner-tr"></div><div class="Border_1"></div>' +
      '<div class="BorderTitleText InfoTitle"><div class="InfoBar">' +
      "<span>Outfits: <b>" + conta(normais) + "</b>/" + normais.length + "</span>" +
      "<span>Store: <b>" + conta(loja) + "</b>/" + loja.length + "</span>" +
      "<span>Addons: <b>" + addons + "</b>/" + addonsTot + "</span>" +
      "<span>Dados: TibiaWiki</span></div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
  }

  function controles() {
    function op(v, t) { return '<button type="button" class="seg' + (estado.mostrar === v ? " ativo" : "") + '" data-mostrar="' + v + '">' + t + "</button>"; }
    return '<div class="controles">' +
      '<span class="ctrl-rotulo">Personagem:</span>' +
      '<button type="button" class="seg' + (estado.genero === "m" ? " ativo" : "") + '" data-genero="m">Masculino</button>' +
      '<button type="button" class="seg' + (estado.genero === "f" ? " ativo" : "") + '" data-genero="f">Feminino</button>' +
      '<span class="ctrl-rotulo ctrl-espaco">Mostrar:</span>' + op("todos", "Todos") + op("faltando", "Faltando") + op("tenho", "Completos") +
      '<span class="ctrl-dica">Marque O / A1 / A2 quando tiver o outfit e cada addon (fica salvo neste navegador). ' +
      "Abra a linha (▾) para ver os itens de cada parte. Clique num item para ver onde ele dropa.</span>" +
      "</div>";
  }

  function render() {
    var y = window.scrollY;
    raiz.innerHTML = barra() +
      caixa("por-outfit", "Outfits e addons", controles() + tabelaOutfits()) +
      caixa("store", "Store Outfits", tabelaStore()) +
      caixa("por-item", "Itens", tabelaItens());
    window.scrollTo(0, y);
    if (window.TCStats) window.TCStats.atualizar();
  }

  // ---------- eventos ----------
  raiz.addEventListener("click", function (e) {
    var bt = e.target.closest("[data-abrir]");
    if (bt) { var id = bt.getAttribute("data-abrir"); abertos[id] = !abertos[id]; render(); return; }
    var g = e.target.closest("[data-genero]");
    if (g) { estado.genero = g.getAttribute("data-genero"); guardar("outfitGenero", estado.genero); render(); return; }
    var m = e.target.closest("[data-mostrar]");
    if (m) { estado.mostrar = m.getAttribute("data-mostrar"); guardar("outfitMostrar", estado.mostrar); render(); return; }
    var chip = e.target.closest(".item-chip");
    if (chip) {
      var nome = chip.getAttribute("data-item");
      buscaEl.value = nome;
      estado.busca = nome.toLowerCase();
      abertos["i:" + nome] = true;
      render();
      document.getElementById("por-item").scrollIntoView({ behavior: "smooth" });
    }
  });
  raiz.addEventListener("change", function (e) {
    var c = e.target.closest(".marca-outfit");
    if (!c) return;
    var nome = c.getAttribute("data-nome"), parte = c.getAttribute("data-parte");
    var t = tenho[nome] || (tenho[nome] = {});
    if (c.checked) t[parte] = 1; else delete t[parte];
    if (!Object.keys(t).length) delete tenho[nome];
    guardar("outfitsTenho", tenho);
    render();
  });
  buscaEl.addEventListener("input", function () { estado.busca = buscaEl.value.trim().toLowerCase(); render(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && buscaEl.value) { buscaEl.value = ""; estado.busca = ""; render(); }
  });

  render();
  // vai para a seção do link (#store, #por-item) de novo depois que as imagens carregam e a altura se acerta
  function irParaHash() { var alvo = location.hash && document.querySelector(location.hash); if (alvo) alvo.scrollIntoView(); }
  irParaHash();
  window.addEventListener("load", irParaHash);
})();
