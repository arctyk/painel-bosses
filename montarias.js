(function () {
  "use strict";

  var MONTARIAS = window.MONTARIAS || [];
  var raiz = document.getElementById("conteudo-montarias");
  var buscaEl = document.getElementById("busca");

  var estado = { mostrar: ler("montariasMostrar", "todos"), busca: "" };   // todos | faltando | tenho
  var tenho = ler("montariasTenho", {});                                    // { "Nome": 1 }

  // ---------- utilidades ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function milhar(n) { return Number(n).toLocaleString("pt-BR"); }
  function ler(k, padrao) { try { var v = localStorage.getItem(k); return v == null ? padrao : JSON.parse(v); } catch (e) { return padrao; } }
  function guardar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } }
  function wiki(pagina) { return "https://tibia.fandom.com/wiki/" + encodeURIComponent(pagina.replace(/ /g, "_")); }

  function caixa(id, titulo, conteudo) {
    return '<div class="Box" id="' + id + '"><div class="Corner-tl"></div><div class="Corner-tr"></div>' +
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

  // figura centrada pela área com desenho, no tamanho original (igual aos outfits)
  function figura(m) {
    if (!m.sprite) return '<div class="outfit-spr"></div>';
    var r = m.recorte;
    if (!r) return '<div class="outfit-spr"><img class="sprite" src="' + esc(m.sprite) + '" alt=""></div>';
    return '<div class="outfit-spr"><div class="spr-corte" style="width:' + r[2] + "px;height:" + r[3] + 'px">' +
      '<img class="sprite" src="' + esc(m.sprite) + '" alt="" style="width:' + r[4] + "px;height:" + r[5] +
      "px;margin-left:-" + r[0] + "px;margin-top:-" + r[1] + 'px"></div></div>';
  }
  function moeda(v) { return '<span class="preco">' + milhar(v) + ' <img class="pixel icone-tc" src="img/icones/tibia-coin-icone.png" alt="" title="Tibia Coins"></span>'; }

  function casa(m) {
    if (estado.mostrar === "tenho" && !tenho[m.nome]) return false;
    if (estado.mostrar === "faltando" && tenho[m.nome]) return false;
    var b = estado.busca;
    return !b || m.nome.toLowerCase().indexOf(b) !== -1 || String(m.como || "").toLowerCase().indexOf(b) !== -1;
  }

  function linha(m, i, colunas) {
    return '<tr class="' + (i % 2 ? "Even" : "Odd") + (tenho[m.nome] ? " ja-tenho" : "") + '">' +
      '<td class="col-tenho"><label class="tenho-op" title="Já tenho esta montaria"><input type="checkbox" class="marca-montaria" data-nome="' +
        esc(m.nome) + '"' + (tenho[m.nome] ? " checked" : "") + "></label></td>" +
      '<td class="col-montaria"><div class="outfit-cel">' + figura(m) + '<div><b><a href="' + esc(wiki(m.pagina)) +
        '" target="_blank" rel="noopener">' + esc(m.nome) + "</a></b></div></div></td>" + colunas + "</tr>";
  }

  // ---------- 1) Montarias (domar, quests, eventos) ----------
  function tabelaMontarias() {
    var lista = MONTARIAS.filter(function (m) { return !m.loja && casa(m); });
    var corpo = lista.map(function (m, i) {
      return linha(m, i, '<td class="col-como">' + esc(m.como || "—") +
        (m.conquista ? '<div class="obs">Conquista: ' + esc(m.conquista) + "</div>" : "") + "</td>");
    }).join("");
    return tabelaSimples('<th class="col-tenho" title="Marque as montarias que você já tem">Tenho</th><th>Montaria</th><th>Como obter</th>',
      corpo || '<tr><td colspan="3" class="vazio-cel">Nada encontrado.</td></tr>', "tabela-montarias");
  }

  // ---------- 2) Store Mounts ----------
  function tabelaStore() {
    var lista = MONTARIAS.filter(function (m) { return m.loja && casa(m); });
    var corpo = lista.map(function (m, i) {
      return linha(m, i, '<td class="col-preco">' + (m.preco ? moeda(m.preco) : "—") + "</td>");
    }).join("");
    return '<p class="intro-itens">Montarias vendidas na Store do Tibia, com o preço em Tibia Coins.</p>' +
      tabelaSimples('<th class="col-tenho">Tenho</th><th>Montaria</th><th class="col-preco">Preço</th>',
        corpo || '<tr><td colspan="3" class="vazio-cel">Nada encontrado.</td></tr>', "tabela-store tabela-montarias-store");
  }

  // ---------- página ----------
  function barra() {
    var normais = MONTARIAS.filter(function (m) { return !m.loja; }), loja = MONTARIAS.filter(function (m) { return m.loja; });
    function conta(l) { return l.filter(function (m) { return tenho[m.nome]; }).length; }
    return '<div class="Box"><div class="Corner-tl"></div><div class="Corner-tr"></div><div class="Border_1"></div>' +
      '<div class="BorderTitleText InfoTitle"><div class="InfoBar">' +
      "<span>Montarias: <b>" + conta(normais) + "</b>/" + normais.length + "</span>" +
      "<span>Store: <b>" + conta(loja) + "</b>/" + loja.length + "</span>" +
      "<span>Total: <b>" + conta(MONTARIAS) + "</b>/" + MONTARIAS.length + "</span>" +
      "<span>Dados: TibiaWiki</span></div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
  }

  function controles() {
    function op(v, t) { return '<button type="button" class="seg' + (estado.mostrar === v ? " ativo" : "") + '" data-mostrar="' + v + '">' + t + "</button>"; }
    return '<div class="controles"><span class="ctrl-rotulo">Mostrar:</span>' + op("todos", "Todas") + op("faltando", "Faltando") + op("tenho", "Tenho") +
      '<span class="ctrl-dica">Na ordem da janela de montarias do jogo. Marque as que você já tem (fica salvo neste navegador).</span></div>';
  }

  function render() {
    var y = window.scrollY;
    raiz.innerHTML = barra() +
      caixa("montarias", "Montarias", controles() + tabelaMontarias()) +
      caixa("store", "Store Mounts", tabelaStore());
    window.scrollTo(0, y);
    if (window.TCStats) window.TCStats.atualizar();
  }

  // ---------- eventos ----------
  raiz.addEventListener("click", function (e) {
    var m = e.target.closest("[data-mostrar]");
    if (m) { estado.mostrar = m.getAttribute("data-mostrar"); guardar("montariasMostrar", estado.mostrar); render(); }
  });
  raiz.addEventListener("change", function (e) {
    var c = e.target.closest(".marca-montaria");
    if (!c) return;
    var nome = c.getAttribute("data-nome");
    if (c.checked) tenho[nome] = 1; else delete tenho[nome];
    guardar("montariasTenho", tenho);
    render();
  });
  buscaEl.addEventListener("input", function () { estado.busca = buscaEl.value.trim().toLowerCase(); render(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && buscaEl.value) { buscaEl.value = ""; estado.busca = ""; render(); }
  });

  render();
  function irParaHash() { var alvo = location.hash && document.querySelector(location.hash); if (alvo) alvo.scrollIntoView(); }
  irParaHash();
  window.addEventListener("load", irParaHash);
})();
