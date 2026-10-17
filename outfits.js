(function () {
  "use strict";

  var OUTFITS = window.OUTFITS || [];
  var ITENS = window.ITENS_OUTFIT || {};
  var raiz = document.getElementById("conteudo-outfits");
  var buscaEl = document.getElementById("busca");

  var estado = {
    genero: ler("outfitGenero", "m"),
    busca: "",
    ordemOutfit: { col: "nome", dir: 1 },
    ordemItem: { col: "total", dir: -1 }
  };
  var PARTE = { 0: "Outfit", 1: "Addon 1", 2: "Addon 2" };

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
  function ler(k, padrao) { try { var v = localStorage.getItem(k); return v == null ? padrao : JSON.parse(v); } catch (e) { return padrao; } }
  function guardar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } }
  function levelNum(o) { var n = parseInt(o.level || "", 10); return isNaN(n) ? 99999 : n; }
  function wiki(pagina) { return "https://tibia.fandom.com/wiki/" + encodeURIComponent(pagina.replace(/ /g, "_")); }

  function caixa(id, titulo, conteudo) {
    return '<div class="Box" id="' + id + '"><div class="Corner-tl"></div><div class="Corner-tr"></div>' +
      '<div class="Border_1"></div><div class="BorderTitleText"><div class="Title">' + titulo + "</div></div>" +
      '<div class="Border_2"><div class="Border_3"><div class="BoxContent">' + conteudo + "</div></div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
  }

  // partes visíveis para o gênero escolhido
  function partesDe(o) {
    return o.partes.filter(function (p) { return !p.genero || p.genero === estado.genero; });
  }

  // ---------- agregação por item ----------
  function agregarItens() {
    var mapa = {};
    OUTFITS.forEach(function (o) {
      partesDe(o).forEach(function (p) {
        p.itens.forEach(function (it) {
          var a = mapa[it.item] || (mapa[it.item] = { nome: it.item, total: 0, usos: [] });
          a.total += it.qtd;
          a.usos.push({ outfit: o.nome, parte: p.parte, qtd: it.qtd, obs: it.obs });
        });
      });
    });
    return Object.keys(mapa).map(function (k) { return mapa[k]; });
  }

  // ---------- busca ----------
  function casa(texto) { return !estado.busca || String(texto).toLowerCase().indexOf(estado.busca) !== -1; }

  function outfitCasa(o) {
    if (casa(o.nome)) return true;
    return partesDe(o).some(function (p) {
      return p.itens.some(function (it) {
        return casa(it.item) || ((ITENS[it.item] || {}).dropadoPor || []).some(casa);
      });
    });
  }
  function itemCasa(a) {
    return casa(a.nome) || a.usos.some(function (u) { return casa(u.outfit); }) ||
      ((ITENS[a.nome] || {}).dropadoPor || []).some(casa);
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

  function cabecalho(tabela, col, rotulo, ordem) {
    var seta = ordem.col === col ? (ordem.dir > 0 ? " ▲" : " ▼") : "";
    return '<th class="ordenavel' + (ordem.col === col ? " ativa" : "") + '" data-tabela="' + tabela + '" data-col="' + col + '">' +
      rotulo + '<span class="seta">' + seta + "</span></th>";
  }

  // ---------- tabela por outfit ----------
  function tabelaOutfits() {
    var o2 = estado.ordemOutfit;
    var lista = OUTFITS.filter(outfitCasa).map(function (o) {
      var partes = partesDe(o);
      var distintos = {};
      partes.forEach(function (p) { p.itens.forEach(function (it) { distintos[it.item] = 1; }); });
      return { o: o, partes: partes, n: Object.keys(distintos).length };
    });
    lista.sort(function (a, b) {
      var r = o2.col === "level" ? levelNum(a.o) - levelNum(b.o)
        : o2.col === "itens" ? a.n - b.n
        : a.o.nome.localeCompare(b.o.nome);
      return r * o2.dir || a.o.nome.localeCompare(b.o.nome);
    });
    var linhas = lista.map(function (x, i) {
      var o = x.o;
      var spr = o.sprite[estado.genero] || o.sprite.m;
      var celula = function (n) {
        var ps = x.partes.filter(function (p) { return p.parte === n; });
        if (!ps.length) return '<td class="vazio-cel">—</td>';
        return "<td>" + ps.map(function (p) {
          return (ps.length > 1 || (p.secao && p.secao !== PARTE[n]) ? '<div class="secao-nome">' + esc(p.secao) + "</div>" : "") +
            '<div class="chips">' + p.itens.map(chipItem).join("") + "</div>";
        }).join("") + "</td>";
      };
      return '<tr class="' + (i % 2 ? "Even" : "Odd") + '">' +
        '<td class="col-outfit"><div class="outfit-cel">' +
          (spr ? '<img class="sprite" src="' + esc(spr) + '" alt="">' : "") +
          '<div><a href="' + esc(wiki(o.pagina)) + '" target="_blank" rel="noopener"><b>' + esc(o.nome) + "</b></a>" +
          (o.quest ? '<div class="quest-nome"><a href="' + esc(wiki(o.quest)) + '" target="_blank" rel="noopener">' + esc(o.quest) + "</a></div>" : "") +
          "</div></div></td>" +
        '<td class="col-num">' + esc(o.level || "—") + "</td>" +
        celula(0) + celula(1) + celula(2) +
        '<td class="col-num">' + x.n + "</td></tr>";
    }).join("");
    return '<div class="tabela-rolagem"><table class="tabela-outfits">' +
      "<thead><tr>" + cabecalho("outfit", "nome", "Outfit", o2) + cabecalho("outfit", "level", "Level rec.", o2) +
      "<th>Outfit (base)</th><th>Addon 1</th><th>Addon 2</th>" + cabecalho("outfit", "itens", "Itens", o2) +
      "</tr></thead><tbody>" + (linhas || '<tr><td colspan="6" class="vazio-cel">Nada encontrado.</td></tr>') +
      "</tbody></table></div>";
  }

  // ---------- tabela por item ----------
  function tabelaItens() {
    var o2 = estado.ordemItem;
    var lista = agregarItens().filter(function (a) { return entraNaTabela(a.nome); }).filter(itemCasa);
    lista.sort(function (a, b) {
      var r = o2.col === "total" ? a.total - b.total
        : o2.col === "usos" ? a.usos.length - b.usos.length
        : o2.col === "drops" ? ((ITENS[a.nome] || {}).dropadoPor || []).length - ((ITENS[b.nome] || {}).dropadoPor || []).length
        : a.nome.localeCompare(b.nome);
      return r * o2.dir || a.nome.localeCompare(b.nome);
    });
    var linhas = lista.map(function (a, i) {
      var d = ITENS[a.nome] || {};
      var drops = d.dropadoPor || [];
      var MAX = 8;
      var dropsHtml = OBTIDO_DE_CRIATURA[a.nome] ? '<span class="obs">' + esc(OBTIDO_DE_CRIATURA[a.nome]) + "</span>"
        : a.nome in SEMPRE_NA_TABELA ? '<span class="sem-dano">dinheiro</span>'
        : drops.length
        ? drops.slice(0, MAX).map(function (m) { return '<a class="monstro" href="' + esc(wiki(m)) + '" target="_blank" rel="noopener">' + esc(m) + "</a>"; }).join(", ") +
          (drops.length > MAX ? ' <span class="mais" title="' + esc(drops.slice(MAX).join(", ")) + '">+' + (drops.length - MAX) + " outros</span>" : "")
        : '<span class="sem-dano">não é dropado (comprado, trocado ou de quest)</span>';
      var usos = a.usos.map(function (u) {
        return '<div class="uso"><b>' + esc(u.outfit) + "</b> · " + PARTE[u.parte] + ": " + milhar(u.qtd) +
          (u.obs ? ' <span class="obs">(' + esc(u.obs) + ")</span>" : "") + "</div>";
      }).join("");
      return '<tr class="' + (i % 2 ? "Even" : "Odd") + '">' +
        '<td class="col-item"><div class="outfit-cel"><span class="slot-item">' + spriteItem(a.nome) + "</span>" +
          '<a href="' + esc(d.link || wiki(a.nome)) + '" target="_blank" rel="noopener"><b>' + esc(a.nome) + "</b></a></div></td>" +
        '<td class="col-num total">' + milhar(a.total) + "</td>" +
        '<td class="col-num">' + a.usos.length + "</td>" +
        "<td>" + usos + "</td>" +
        '<td class="col-drops">' + dropsHtml + "</td></tr>";
    }).join("");
    return '<div class="tabela-rolagem"><table class="tabela-outfits">' +
      "<thead><tr>" + cabecalho("item", "nome", "Item", o2) + cabecalho("item", "total", "Total", o2) +
      cabecalho("item", "usos", "Usos", o2) + "<th>Usado em</th>" + cabecalho("item", "drops", "Dropado por", o2) +
      "</tr></thead><tbody>" + (linhas || '<tr><td colspan="5" class="vazio-cel">Nada encontrado.</td></tr>') +
      "</tbody></table></div>";
  }

  // ---------- página ----------
  function controles() {
    return '<div class="controles">' +
      '<span class="ctrl-rotulo">Personagem:</span>' +
      '<button type="button" class="seg' + (estado.genero === "m" ? " ativo" : "") + '" data-genero="m">Masculino</button>' +
      '<button type="button" class="seg' + (estado.genero === "f" ? " ativo" : "") + '" data-genero="f">Feminino</button>' +
      '<span class="ctrl-dica">Mage/Summoner e Oriental pedem itens diferentes para cada gênero. Clique num item para filtrar por ele; clique no cabeçalho para ordenar.</span>' +
      "</div>";
  }

  function render() {
    var itens = agregarItens().filter(function (a) { return entraNaTabela(a.nome); });
    var barra = '<div class="Box"><div class="Corner-tl"></div><div class="Corner-tr"></div><div class="Border_1"></div>' +
      '<div class="BorderTitleText InfoTitle"><div class="InfoBar"><span><b>' + OUTFITS.length + "</b> outfits com itens</span><span><b>" +
      itens.length + "</b> itens de drop</span><span>Dados: TibiaWiki</span></div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
    raiz.innerHTML = barra +
      caixa("por-outfit", "Outfits e addons", controles() + tabelaOutfits()) +
      caixa("por-item", "Itens", '<p class="intro-itens">Total de cada item para conseguir <b>todos</b> os outfits e addons da tabela (' +
        (estado.genero === "m" ? "personagem masculino" : "personagem feminino") + "). Só itens dropados por criaturas e gold; " +
        "itens de quest ou troca aparecem apenas na tabela de outfits.</p>" + tabelaItens());
  }

  // ---------- eventos ----------
  raiz.addEventListener("click", function (e) {
    var th = e.target.closest("th.ordenavel");
    if (th) {
      var ordem = th.getAttribute("data-tabela") === "outfit" ? estado.ordemOutfit : estado.ordemItem;
      var col = th.getAttribute("data-col");
      if (ordem.col === col) ordem.dir = -ordem.dir;
      else { ordem.col = col; ordem.dir = (col === "total" || col === "usos" || col === "drops" || col === "itens") ? -1 : 1; }
      render();
      return;
    }
    var g = e.target.closest("[data-genero]");
    if (g) { estado.genero = g.getAttribute("data-genero"); guardar("outfitGenero", estado.genero); render(); return; }
    var chip = e.target.closest(".item-chip");
    if (chip) {
      buscaEl.value = chip.getAttribute("data-item");
      estado.busca = buscaEl.value.toLowerCase();
      render();
      document.getElementById("por-item").scrollIntoView({ behavior: "smooth" });
    }
  });
  buscaEl.addEventListener("input", function () { estado.busca = buscaEl.value.trim().toLowerCase(); render(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && buscaEl.value) { buscaEl.value = ""; estado.busca = ""; render(); }
  });

  render();
  // vai para a seção do link (#por-item) de novo depois que as imagens carregam e a altura se acerta
  function irParaHash() { var alvo = location.hash && document.querySelector(location.hash); if (alvo) alvo.scrollIntoView(); }
  irParaHash();
  window.addEventListener("load", irParaHash);
})();
