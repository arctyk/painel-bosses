/* Quadro "Estatísticas" na coluna da direita, igual em todas as páginas.
   Lê as marcações salvas neste navegador (as mesmas chaves que cada página usa) e carrega sozinho
   os arquivos de dados que a página atual não tem (ex.: na página de bosses carrega outfits, bestiário e montarias).
   As páginas chamam TCStats.atualizar() depois de cada mudança. */
(function () {
  "use strict";

  var DADOS = [
    ["OUTFITS", "outfits-dados.js"],
    ["BESTIARIO", "bestiario-dados.js"],
    ["MONTARIAS", "montarias-dados.js"]
  ];
  var ICONES = "img/bestiario-icones/";
  var coluna = null;

  function ler(k, padrao) { try { var v = localStorage.getItem(k); return v == null ? padrao : JSON.parse(v); } catch (e) { return padrao; } }
  function milhar(n) { return Number(n).toLocaleString("pt-BR"); }
  function soma(l, f) { return l.reduce(function (s, x) { return s + f(x); }, 0); }
  function pct(a, b) { return b ? Math.round(a * 100 / b) : 0; }

  // ícones (os mesmos do site e do jogo), gerados por gerar_tema.py em img/icones/st-<nome>-<px>.png:
  // todos com 16px (20px nos títulos dos grupos) e um arquivo por escala de tela, para não serem esticados
  var ICO = {
    outfits: "g-outfits", montarias: "g-montarias", bestiario: "g-bestiario",
    outfit: "outfit", montaria: "montaria", addon: "addon", completo: "completo", store: "store",
    bestiary: "bestiary", charm: "charm", warden: "warden", core: "core"
  };
  function ico(nome) {
    var t = nome.indexOf("g-") === 0 ? 20 : 16, b = "img/icones/st-" + nome + "-";
    return '<img class="st-ico" src="' + b + t + '.png" srcset="' + b + t + ".png 1x, " + b + (t * 1.5) + ".png 1.5x, " +
      b + (t * 2) + '.png 2x" width="' + t + '" height="' + t + '" alt="">';
  }

  // uma linha: ícone + rótulo numa linha só; logo embaixo a barra, com o número colado nela
  function linha(icone, rotulo, feito, total, extra) {
    var p = pct(feito, total);
    return '<div class="st-linha' + (total && feito >= total ? " st-completa" : "") + '">' +
      '<div class="st-rot" title="' + rotulo + '">' + ico(icone) + "<span>" + rotulo + "</span></div>" +
      '<div class="st-progresso"><div class="st-barra" title="' + p + '%"><div style="width:' + p + '%"></div></div>' +
      '<span class="st-val"><b>' + milhar(feito) + "</b>/" + milhar(total) + "</span></div>" +
      (extra ? '<div class="st-extra">' + extra + "</div>" : "") + "</div>";
  }
  function grupo(icone, titulo, link, corpo) {
    return '<div class="st-grupo"><a class="st-tit" href="' + link + '">' + ico(icone) + titulo + "</a>" + corpo + "</div>";
  }

  function blocoOutfits() {
    var O = window.OUTFITS;
    if (!O) return "";
    var tenho = ler("outfitsTenho", {});
    function base(o) { return o.tipo === "Basic" || o.tipo === "Premium"; }        // vêm com a conta/Premium
    function tem(o, k) { return (k === "o" && base(o)) || !!(tenho[o.nome] && tenho[o.nome][k]); }
    function addons(o) { return o.comoAddons !== "sem addons"; }
    var normais = O.filter(function (o) { return !o.loja; }), loja = O.filter(function (o) { return o.loja; });
    var aTot = 0, aFeitos = 0, completos = 0;
    O.forEach(function (o) {
      if (addons(o)) { aTot += 2; aFeitos += (tem(o, "a1") ? 1 : 0) + (tem(o, "a2") ? 1 : 0); }
      if (tem(o, "o") && (!addons(o) || (tem(o, "a1") && tem(o, "a2")))) completos++;
    });
    function conta(l) { return l.filter(function (o) { return tem(o, "o"); }).length; }
    return grupo(ICO.outfits, "Outfits", "outfits.html#por-outfit",
      linha(ICO.outfit, "Outfits", conta(normais), normais.length) +
      linha(ICO.store, "Store Outfits", conta(loja), loja.length) +
      linha(ICO.addon, "Addons", aFeitos, aTot) +
      linha(ICO.completo, "Completos (com addons)", completos, O.length));
  }

  function blocoMontarias() {
    var M = window.MONTARIAS;
    if (!M) return "";
    var tenho = ler("montariasTenho", {});
    var normais = M.filter(function (m) { return !m.loja; }), loja = M.filter(function (m) { return m.loja; });
    function conta(l) { return l.filter(function (m) { return tenho[m.nome]; }).length; }
    return grupo(ICO.montarias, "Montarias", "montarias.html#montarias",
      linha(ICO.montaria, "Montarias", conta(normais), normais.length) +
      linha(ICO.store, "Store Mounts", conta(loja), loja.length));
  }

  function blocoBestiario() {
    var C = window.BESTIARIO;
    if (!C) return "";
    var completos = ler("bestiarioCompletos", {}), wardens = ler("bestiarioWardens", {}), cores = ler("bestiarioSoulCores", {});
    var feitas = C.filter(function (c) { return completos[c.nome]; });
    var ptsTot = soma(C, function (c) { return c.pontos || 0; }), pts = soma(feitas, function (c) { return c.pontos || 0; });
    var comW = C.filter(function (c) { return c.pontosWarden; });
    var wFeitos = C.filter(function (c) { return wardens[c.nome]; });
    var wPts = soma(wFeitos, function (c) { return c.pontosWarden || 0; });
    var comCore = C.filter(function (c) { return c.soulCore; });
    return grupo(ICO.bestiario, "Bestiário", "bestiario.html#criaturas",
      linha(ICO.bestiary, "Bestiários completos", feitas.length, C.length) +
      linha(ICO.charm, "Charm points", pts, ptsTot) +
      linha(ICO.warden, "Echo Wardens mortos", wFeitos.length, comW.length, "+" + milhar(wPts) + " charm points") +
      linha(ICO.core, "Soul Cores completos", comCore.filter(function (c) { return cores[c.nome]; }).length, comCore.length) +
      '<div class="st-total">' + ico(ICO.charm) + "<span>Total de charm points: <b>" + milhar(pts + wPts) + "</b></span></div>");
  }

  function caixa(conteudo) {
    return '<div class="Box caixa-stats"><div class="Corner-tl"></div><div class="Corner-tr"></div>' +
      '<div class="Border_1"></div><div class="BorderTitleText"><div class="Title">Estatísticas</div></div>' +
      '<div class="Border_2"><div class="Border_3"><div class="BoxContent">' + conteudo + "</div></div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
  }

  // o quadro começa na altura da primeira barra verde do conteúdo
  function alinhar() {
    if (!coluna) return;
    var pag = document.getElementById("Pagina");
    var verde = document.querySelector("#ContentColumn .BorderTitleText:not(.InfoTitle)");
    if (!pag || !verde) return;
    var box = verde.closest(".Box") || verde;
    var topo = box.getBoundingClientRect().top - pag.getBoundingClientRect().top;
    coluna.style.paddingTop = Math.max(0, Math.round(topo - 4)) + "px";   // -4: margem de cima da Box
  }

  function atualizar() {
    if (!coluna) return;
    coluna.innerHTML = caixa(blocoOutfits() + blocoMontarias() + blocoBestiario() +
      '<p class="st-nota">Marcações salvas neste navegador.</p>');
    alinhar();
  }

  function iniciar() {
    var pag = document.getElementById("Pagina");
    if (!pag) return;
    coluna = document.createElement("div");
    coluna.id = "StatsColumn";
    coluna.className = "Content";
    pag.appendChild(coluna);
    var faltam = DADOS.filter(function (d) { return !window[d[0]]; });
    var pendentes = faltam.length;
    atualizar();
    faltam.forEach(function (d) {
      var s = document.createElement("script");
      s.src = d[1] + "?v=" + Math.floor(Date.now() / 6e5);    // muda a cada 10 min: cache curto
      s.onload = s.onerror = function () { if (--pendentes === 0) atualizar(); };
      document.body.appendChild(s);
    });
    window.addEventListener("resize", alinhar);
    window.addEventListener("load", alinhar);
    // marcações feitas em outra aba
    window.addEventListener("storage", atualizar);
  }

  window.TCStats = { atualizar: atualizar };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
