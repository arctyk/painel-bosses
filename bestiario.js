(function () {
  "use strict";

  var CRIATURAS = window.BESTIARIO || [];
  var raiz = document.getElementById("conteudo-bestiario");
  var buscaEl = document.getElementById("busca");

  var DIFS = ["Harmless", "Trivial", "Easy", "Medium", "Hard", "Challenging", "Unknown"];
  var DIF_PT = { Harmless: "Inofensivo", Trivial: "Trivial", Easy: "Fácil", Medium: "Médio", Hard: "Difícil", Challenging: "Desafiador", Unknown: "A confirmar" };
  var TEMPO_PT = { Easy: "Fácil (< 2h)", Medium: "Médio (2-5h)", Hard: "Difícil (> 5h)" };
  var TEMPO_ORDEM = { Easy: 1, Medium: 2, Hard: 3 };
  var RARIDADE_PT = { Common: "Comum", Uncommon: "Incomum", Rare: "Rara", "Very Rare": "Muito rara" };
  var ICONES = "img/bestiario-icones/";
  var ICO_WARDEN = ICONES + "echo-warden.png", ICO_ANIMUS = ICONES + "animus-mastery.png", ICO_CHARM = ICONES + "charm-icon.gif";
  var COLUNAS = 9;

  // marcações salvas neste navegador
  var completos = ler("bestiarioCompletos", {});
  var wardens = ler("bestiarioWardens", {});
  var cores = ler("bestiarioSoulCores", {});
  var abertos = ler("bestiarioGruposAbertos", {});   // "criaturas:Classe" / "completas:Classe" -> true

  var estado = {
    busca: "",
    dificuldade: "",
    soTibiapal: ler("bestiarioSoTibiapal", false),
    ordem: { col: "nome", dir: 1 }
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function milhar(n) { return Number(n).toLocaleString("pt-BR"); }
  function ler(k, padrao) { try { var v = localStorage.getItem(k); return v == null ? padrao : JSON.parse(v); } catch (e) { return padrao; } }
  function guardar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } }
  function wiki(p) { return "https://tibia.fandom.com/wiki/" + encodeURIComponent(p.replace(/ /g, "_")); }
  function icone(arq) { return ICONES + arq.toLowerCase().replace(/ /g, "-") + ".gif"; }
  function nome(c) { return c.exibir || c.nome; }
  function soma(lista, f) { return lista.reduce(function (s, c) { return s + f(c); }, 0); }

  // sprite recortado (sem borda transparente) e centralizado numa caixa quadrada
  function sprite(c, lado) {
    lado = lado || 44;
    if (!c.sprite) return '<div class="spr"></div>';
    var r = c.recorte;
    if (!r) return '<div class="spr"><img loading="lazy" src="' + esc(c.sprite) + '" alt=""></div>';
    var k = Math.min(1, lado / Math.max(r[2], r[3]));
    var px = function (n) { return Math.round(n * k) + "px"; };
    return '<div class="spr" style="flex-basis:' + (lado + 2) + "px;height:" + (lado + 2) + 'px"><div class="spr-corte" style="width:' + px(r[2]) + ";height:" + px(r[3]) + '">' +
      '<img loading="lazy" src="' + esc(c.sprite) + '" alt="" style="width:' + px(r[4]) + ";height:" + px(r[5]) +
      ";margin-left:-" + px(r[0]) + ";margin-top:-" + px(r[1]) + '"></div></div>';
  }

  function caixa(id, titulo, conteudo, classe) {
    return '<div class="Box' + (classe ? " " + classe : "") + '" id="' + id + '"><div class="Corner-tl"></div><div class="Corner-tr"></div>' +
      '<div class="Border_1"></div><div class="BorderTitleText"><div class="Title">' + titulo + "</div></div>" +
      '<div class="Border_2"><div class="Border_3"><div class="BoxContent">' + conteudo + "</div></div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
  }

  var CLASSES = Array.from(new Set(CRIATURAS.map(function (c) { return c.classe || "Outras"; }))).sort();

  function passaFiltro(c) {
    var t = estado.busca;
    if (t && (nome(c) + " " + (c.respawn || "")).toLowerCase().indexOf(t) === -1) return false;
    if (estado.dificuldade && c.dificuldade !== estado.dificuldade) return false;
    if (estado.soTibiapal && c.fonteRespawn !== "tibiapal") return false;
    return true;
  }

  function ordenar(lista) {
    var o = estado.ordem;
    var val = {
      nome: function (c) { return nome(c); },
      dificuldade: function (c) { return DIFS.indexOf(c.dificuldade); },
      pontos: function (c) { return c.pontos; },
      kills: function (c) { return c.kills || 0; },
      tempo: function (c) { return TEMPO_ORDEM[c.tempo] || 9; },
      respawn: function (c) { return c.respawn || "~"; },
      warden: function (c) { return wardens[c.nome] ? 1 : 0; },
      core: function (c) { return cores[c.nome] ? 1 : 0; }
    }[o.col];
    return lista.slice().sort(function (a, b) {
      var x = val(a), y = val(b);
      var r = typeof x === "number" ? x - y : String(x).localeCompare(String(y));
      return r * o.dir || nome(a).localeCompare(nome(b));
    });
  }

  /* ---------------- estatísticas ---------------- */
  function barra() {
    var feitas = CRIATURAS.filter(function (c) { return completos[c.nome]; });
    var ptsTotal = soma(CRIATURAS, function (c) { return c.pontos; });
    var ptsFeitos = soma(feitas, function (c) { return c.pontos; });
    var wTotal = soma(CRIATURAS, function (c) { return c.pontosWarden || 0; });
    var wFeitos = CRIATURAS.filter(function (c) { return wardens[c.nome]; });
    var wPts = soma(wFeitos, function (c) { return c.pontosWarden || 0; });
    var comCore = CRIATURAS.filter(function (c) { return c.soulCore; });
    var coresFeitos = comCore.filter(function (c) { return cores[c.nome]; }).length;
    function pct(a, b) { return b ? String(Math.round(a * 1000 / b) / 10).replace(".", ",") + "%" : "0%"; }
    var charm = '<img class="pixel ico-inline" src="' + ICO_CHARM + '" alt="">';
    return '<div class="Box"><div class="Corner-tl"></div><div class="Corner-tr"></div><div class="Border_1"></div>' +
      '<div class="BorderTitleText InfoTitle"><div class="InfoBar stats-bestiario">' +
      "<span>Bestiário: <b>" + feitas.length + "</b>/" + CRIATURAS.length + " · <b>" + milhar(ptsFeitos) + "</b>/" + milhar(ptsTotal) + " " + charm + " (" + pct(ptsFeitos, ptsTotal) + ")</span>" +
      '<span><img class="pixel ico-inline" src="' + ICO_WARDEN + '" alt=""> Echo Wardens: <b>' + wFeitos.length + "</b>/" + CRIATURAS.length +
        " · <b>" + milhar(wPts) + "</b>/" + milhar(wTotal) + " " + charm + "</span>" +
      '<span><img class="pixel ico-inline" src="' + ICO_ANIMUS + '" alt=""> Soul Cores: <b>' + coresFeitos + "</b>/" + comCore.length + "</span>" +
      "<span>Total de charm points: <b>" + milhar(ptsFeitos + wPts) + "</b> " + charm + "</span>" +
      "</div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
  }

  /* ---------------- tabela agrupada por classe ---------------- */
  function cab(col, rotulo, classe) {
    var o = estado.ordem;
    return '<th class="ordenavel' + (o.col === col ? " ativa" : "") + (classe ? " " + classe : "") + '" data-col="' + col + '">' +
      rotulo + '<span class="seta">' + (o.col === col ? (o.dir > 0 ? " ▲" : " ▼") : "") + "</span></th>";
  }

  function linha(c, i) {
    var feito = !!completos[c.nome], conhecida = c.dificuldade !== "Unknown";
    var respawn = c.respawn
      ? esc(c.respawn) + (c.fonteRespawn === "wiki" ? ' <span class="fonte" title="Locais citados na TibiaWiki (não é uma sugestão do TibiaPal)">wiki</span>' : "")
      : '<span class="sem-dano">—</span>';
    return '<tr class="' + (i % 2 ? "Even" : "Odd") + (feito ? " feito" : "") + '">' +
      '<td class="col-check"><input type="checkbox" class="marca" data-tipo="completo" data-nome="' + esc(c.nome) + '"' + (feito ? " checked" : "") +
        ' title="Bestiário completo" aria-label="Completo: ' + esc(nome(c)) + '"></td>' +
      '<td class="col-nome"><div class="nome-cel">' + sprite(c) +
        '<div><a href="' + esc(wiki(c.nome)) + '" target="_blank" rel="noopener"><b>' + esc(nome(c)) + "</b></a>" +
        '<div class="ocorr"><img class="pixel" src="' + icone("Bestiary Occurrence " + c.raridade) + '" alt="" title="Ocorrência: ' +
          esc(RARIDADE_PT[c.raridade] || c.raridade) + '">' +
          (c.raridade === "Very Rare" ? '<span class="rara">Muito rara (5 kills)</span>' : "") + "</div></div></div></td>" +
      '<td class="dif dif-' + c.dificuldade.toLowerCase() + '">' +
        (conhecida ? '<img class="pixel estrelas" src="' + icone("Bestiary Level " + c.dificuldade) + '" alt="">' : "") +
        "<div>" + esc(DIF_PT[c.dificuldade]) + "</div></td>" +
      '<td class="col-num total"><span class="pts">' + (conhecida ? c.pontos : "?") + '<img class="pixel" src="' + ICO_CHARM + '" alt="" title="Charm points"></span></td>' +
      '<td class="col-num">' + (c.kills ? milhar(c.kills) : "?") + "</td>" +
      '<td class="col-num tempo">' + (c.tempo ? esc(TEMPO_PT[c.tempo] || c.tempo) : '<span class="sem-dano">—</span>') + "</td>" +
      '<td class="col-respawn">' + respawn + "</td>" +
      '<td class="col-extra"><label class="extra' + (wardens[c.nome] ? " marcado" : "") + '" title="Echo Warden morto (+' + (c.pontosWarden || "?") + ' charm points)">' +
        '<input type="checkbox" class="marca" data-tipo="warden" data-nome="' + esc(c.nome) + '"' + (wardens[c.nome] ? " checked" : "") + ">" +
        '<span class="bonus">+' + (c.pontosWarden || "?") + "</span></label></td>" +
      '<td class="col-extra">' + (c.soulCore
        ? '<label class="extra' + (cores[c.nome] ? " marcado" : "") + '" title="Soulpit feito com o Soul Core (Animus Mastery)">' +
          '<input type="checkbox" class="marca" data-tipo="core" data-nome="' + esc(c.nome) + '"' + (cores[c.nome] ? " checked" : "") + "></label>"
        : '<span class="sem-dano" title="Sem Soul Core">—</span>') + "</td></tr>";
  }

  function tabela(secao, lista, buscando) {
    var corpo = "";
    CLASSES.forEach(function (classe) {
      var doGrupo = lista.filter(function (c) { return (c.classe || "Outras") === classe; });
      if (!doGrupo.length) return;
      var chave = secao + ":" + classe;
      var aberto = buscando || !!abertos[chave];
      var pts = soma(doGrupo, function (c) { return c.pontos; });
      var w = doGrupo.filter(function (c) { return wardens[c.nome]; }).length;
      var sc = doGrupo.filter(function (c) { return cores[c.nome]; }).length;
      corpo += '<tbody class="grupo' + (aberto ? " aberto" : "") + '" data-chave="' + esc(chave) + '">' +
        '<tr class="grupo-cab" tabindex="0" role="button" aria-expanded="' + aberto + '"><td colspan="' + COLUNAS + '">' +
        '<span class="grupo-seta">' + (aberto ? "▾" : "▸") + "</span> <b>" + esc(classe) + "</b>" +
        '<span class="grupo-info">' + doGrupo.length + " criatura" + (doGrupo.length > 1 ? "s" : "") + " · " + milhar(pts) + " pontos" +
        ' · <img class="pixel ico-inline" src="' + ICO_WARDEN + '" alt="">' + w + "/" + doGrupo.length +
        ' · <img class="pixel ico-inline" src="' + ICO_ANIMUS + '" alt="">' + sc + "/" + doGrupo.length + "</span></td></tr>" +
        (aberto ? ordenar(doGrupo).map(linha).join("") : "") + "</tbody>";
    });
    return '<div class="tabela-rolagem"><table class="tabela-outfits tabela-bestiario"><thead><tr>' +
      '<th class="col-check" title="Bestiário completo">✓</th>' + cab("nome", "Criatura") + cab("dificuldade", "Dificuldade") +
      cab("pontos", "Pontos") + cab("kills", "Kills") + cab("tempo", "Tempo") + cab("respawn", "Respawn sugerido") +
      cab("warden", '<img class="pixel" src="' + ICO_WARDEN + '" alt=""> Warden', "col-extra") +
      cab("core", '<img class="pixel" src="' + ICO_ANIMUS + '" alt=""> Soul Core', "col-extra") +
      "</tr></thead>" + (corpo || '<tbody><tr><td colspan="' + COLUNAS + '" class="vazio-cel">Nada encontrado.</td></tr></tbody>') +
      "</table></div>";
  }

  function controles() {
    return '<div class="controles">' +
      '<label class="ctrl"><span class="ctrl-rotulo">Dificuldade:</span><select id="f-dif">' +
        [["", "Todas"]].concat(DIFS.map(function (d) { return [d, DIF_PT[d]]; })).map(function (o) {
          return '<option value="' + o[0] + '"' + (o[0] === estado.dificuldade ? " selected" : "") + ">" + esc(o[1]) + "</option>";
        }).join("") + "</select></label>" +
      '<label class="ctrl"><input type="checkbox" id="f-tibiapal"' + (estado.soTibiapal ? " checked" : "") + "> Só com respawn sugerido (TibiaPal)</label>" +
      '<a class="BigButton bt-extrair" href="#" role="button"><span class="BigButtonText">Extrair Lista</span></a>' +
      '<button type="button" class="bt-grupos" data-acao="abrir">Expandir todas</button>' +
      '<button type="button" class="bt-grupos" data-acao="fechar">Recolher todas</button>' +
      '<span class="ctrl-dica">Clique numa classe para abrir ou fechar. Marque ✓ quando completar o bestiário da criatura; ' +
      '<img class="pixel ico-inline" src="' + ICO_WARDEN + '" alt=""> quando matar o Echo Warden dela (dá charm points extras) e ' +
      '<img class="pixel ico-inline" src="' + ICO_ANIMUS + '" alt=""> quando fizer o Soulpit com o Soul Core (Animus Mastery). ' +
      'Tudo fica salvo neste navegador. O "tempo" é a estimativa do TibiaPal para completar a criatura.</span>' +
      "</div>";
  }

  /* ---------------- listas de Echo Wardens e Soul Cores ---------------- */
  function chips(marcados, bonus) {
    var lista = CRIATURAS.filter(function (c) { return marcados[c.nome] && passaFiltro(c); })
      .sort(function (a, b) { return nome(a).localeCompare(nome(b)); });
    if (!lista.length) return '<p class="vazio-cel">Nenhuma criatura marcada ainda.</p>';
    return '<div class="chips-best">' + lista.map(function (c) {
      return '<div class="chip-best">' + sprite(c, 32) + "<span>" + esc(nome(c)) +
        (bonus ? ' <b class="bonus">+' + (c.pontosWarden || "?") + "</b>" : "") + "</span>" +
        '<button type="button" class="tirar" data-tipo="' + (bonus ? "warden" : "core") + '" data-nome="' + esc(c.nome) + '" title="Desmarcar">×</button></div>';
    }).join("") + "</div>";
  }

  function render() {
    var y = window.scrollY;
    var filtradas = CRIATURAS.filter(passaFiltro);
    var buscando = !!estado.busca;
    var pendentes = filtradas.filter(function (c) { return !completos[c.nome]; });
    var feitas = filtradas.filter(function (c) { return completos[c.nome]; });
    var nW = CRIATURAS.filter(function (c) { return wardens[c.nome]; }).length;
    var nC = CRIATURAS.filter(function (c) { return cores[c.nome]; }).length;

    raiz.innerHTML = barra() +
      caixa("criaturas", "Criaturas", controles() +
        '<p class="intro-itens">' + pendentes.length + " criaturas faltando · " + milhar(soma(pendentes, function (c) { return c.pontos; })) + " pontos</p>" +
        tabela("criaturas", pendentes, buscando)) +
      caixa("completas", "Completas", feitas.length
        ? '<p class="intro-itens">' + feitas.length + " criaturas completas · " + milhar(soma(feitas, function (c) { return c.pontos; })) + " pontos</p>" + tabela("completas", feitas, buscando)
        : '<p class="vazio-cel">Nenhuma criatura completa ainda. Marque ✓ na lista acima.</p>', "secao-separada") +
      caixa("echo-warden", "Echo Wardens mortos (" + nW + ")",
        '<p class="intro-itens">Matar o Echo Warden de uma criatura pela primeira vez dá charm points: ' +
        "Inofensivo 1, Trivial 2, Fácil 5, Médio 10, Difícil 15, Desafiador 30. O Warden aparece nas Echo Raids " +
        "(10% de chance por raid, 20% se o bestiário da criatura estiver completo).</p>" + chips(wardens, true), "secao-separada") +
      caixa("soul-core", "Soul Cores completos (" + nC + ")",
        '<p class="intro-itens">Criaturas cujo Soul Core você já usou no Soulpit (Animus Mastery: +2% de XP base nelas, ' +
        "mais 0,1% a cada 10 masteries, até +2% extras).</p>" + chips(cores, false), "secao-separada");
    window.scrollTo(0, y);
  }

  /* ---------------- eventos ---------------- */
  var MAPA = { completo: ["bestiarioCompletos", completos], warden: ["bestiarioWardens", wardens], core: ["bestiarioSoulCores", cores] };
  function marcar(tipo, nomeC, valor) {
    var m = MAPA[tipo];
    if (valor) m[1][nomeC] = 1; else delete m[1][nomeC];
    guardar(m[0], m[1]);
    render();
  }
  function alternarGrupo(tb) {
    var chave = tb.getAttribute("data-chave");
    if (abertos[chave]) delete abertos[chave]; else abertos[chave] = true;
    guardar("bestiarioGruposAbertos", abertos);
    render();
  }

  raiz.addEventListener("click", function (e) {
    var th = e.target.closest("th.ordenavel");
    if (th) {
      var col = th.getAttribute("data-col");
      if (estado.ordem.col === col) estado.ordem.dir = -estado.ordem.dir;
      else { estado.ordem.col = col; estado.ordem.dir = (col === "nome" || col === "respawn" || col === "tempo" || col === "dificuldade") ? 1 : -1; }
      render();
      return;
    }
    var cabG = e.target.closest("tr.grupo-cab");
    if (cabG && !estado.busca) { alternarGrupo(cabG.parentNode); return; }
    if (e.target.closest(".bt-extrair")) { e.preventDefault(); abrirExtrair(); return; }
    var bt = e.target.closest(".bt-grupos");
    if (bt) {
      var abrir = bt.getAttribute("data-acao") === "abrir";
      CLASSES.forEach(function (cl) {
        ["criaturas", "completas"].forEach(function (s) {
          if (abrir) abertos[s + ":" + cl] = true; else delete abertos[s + ":" + cl];
        });
      });
      guardar("bestiarioGruposAbertos", abertos);
      render();
      return;
    }
    var tirar = e.target.closest(".tirar");
    if (tirar) marcar(tirar.getAttribute("data-tipo"), tirar.getAttribute("data-nome"), false);
  });
  raiz.addEventListener("keydown", function (e) {
    var cabG = e.target.closest("tr.grupo-cab");
    if (cabG && (e.key === "Enter" || e.key === " ") && !estado.busca) { e.preventDefault(); alternarGrupo(cabG.parentNode); }
  });
  raiz.addEventListener("change", function (e) {
    var t = e.target;
    if (t.classList.contains("marca")) { marcar(t.getAttribute("data-tipo"), t.getAttribute("data-nome"), t.checked); return; }
    if (t.id === "f-dif") estado.dificuldade = t.value;
    if (t.id === "f-tibiapal") { estado.soTibiapal = t.checked; guardar("bestiarioSoTibiapal", t.checked); }
    render();
  });
  buscaEl.addEventListener("input", function () { estado.busca = buscaEl.value.trim().toLowerCase(); render(); });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!modalEl.hidden) fecharExtrair();
    else if (buscaEl.value) { buscaEl.value = ""; estado.busca = ""; render(); }
  });

  /* ---------------- extrair lista em texto (popup) ---------------- */
  var modalEl = document.getElementById("modal");
  var modalCaixaEl = document.getElementById("modal-caixa");
  var ultimoFoco = null;
  var LISTAS = [
    ["faltando", "Bestiário não completo", function (c) { return !completos[c.nome]; }],
    ["completas", "Bestiário completo", function (c) { return completos[c.nome]; }],
    ["warden", "Echo Warden já morto", function (c) { return wardens[c.nome]; }],
    ["core", "Soul Core já feito", function (c) { return cores[c.nome]; }],
    ["sem-warden", "Echo Warden que falta", function (c) { return !wardens[c.nome]; }],
    ["sem-core", "Soul Core que falta", function (c) { return c.soulCore && !cores[c.nome]; }]
  ];
  var ext = { lista: ler("bestiarioExtrairLista", "core"), formato: ler("bestiarioExtrairFormato", "linhas"), classe: ler("bestiarioExtrairClasse", false) };
  function listaAtual() { return LISTAS.filter(function (l) { return l[0] === ext.lista; })[0] || LISTAS[0]; }

  function textoLista() {
    var def = listaAtual();
    var sel = CRIATURAS.filter(def[2]).sort(function (a, b) { return nome(a).localeCompare(nome(b)); });
    var cabecalho = def[1] + " (" + sel.length + ")";
    function junta(nomes) { return ext.formato === "virgula" ? nomes.join(", ") : nomes.map(function (n) { return "- " + n; }).join("\n"); }
    if (!ext.classe) return { texto: cabecalho + ":\n" + junta(sel.map(nome)), n: sel.length };
    var partes = CLASSES.map(function (cl) {
      var g = sel.filter(function (c) { return (c.classe || "Outras") === cl; });
      return g.length ? cl + " (" + g.length + "):\n" + junta(g.map(nome)) : "";
    }).filter(Boolean);
    return { texto: cabecalho + ":\n\n" + partes.join("\n\n"), n: sel.length };
  }

  // compara uma lista colada (de outra pessoa) com as suas marcações
  function normaliza(t) {
    return t.toLowerCase().replace(/soul ?cores?|echo wardens?/g, "").replace(/\(creature\)/g, "")
      .replace(/[^a-z0-9'()\- ]+/g, " ").replace(/\s+/g, " ").trim();
  }
  var INDICE = {};
  CRIATURAS.forEach(function (c) { INDICE[normaliza(nome(c))] = c; INDICE[normaliza(c.nome)] = c; });
  function comparar(texto) {
    var l = ext.lista;
    var tipo = (l === "warden" || l === "sem-warden") ? "warden" : (l === "completas" || l === "faltando") ? "completo" : "core";
    var marcado = { warden: wardens, core: cores, completo: completos }[tipo];
    var rotulo = { warden: "Echo Warden", core: "Soul Core", completo: "Bestiário completo" }[tipo];
    var ja = [], falta = [], desconhecidos = [], vistos = {};
    texto.split(/[\n,;]+/).forEach(function (bruto) {
      var limpo = bruto.trim();
      if (!limpo || /:$/.test(limpo)) return;                    // linhas de título ("Soul cores à venda:")
      var n = normaliza(limpo.replace(/^(?:[-*•>]+|\d+\s*[.)x-]?)\s*/, ""));
      if (n.length < 3) return;
      var c = INDICE[n] || INDICE[n.replace(/s$/, "")] || INDICE[n.replace(/es$/, "")];
      if (!c) { desconhecidos.push(limpo); return; }
      if (vistos[c.nome]) return;
      vistos[c.nome] = 1;
      (marcado[c.nome] ? ja : falta).push(nome(c));
    });
    function bloco(cls, titulo, itens) {
      return itens.length ? '<div class="cmp-bloco ' + cls + '"><b>' + titulo + " (" + itens.length + ")</b><div>" + itens.map(esc).join(", ") + "</div></div>" : "";
    }
    return bloco("cmp-ja", rotulo + ": você já tem", ja) + bloco("cmp-falta", rotulo + ": você ainda não tem", falta) +
      bloco("cmp-nao", "Não reconhecidos (confira a grafia)", desconhecidos.filter(function (d) { return d.length < 60; }));
  }

  function atualizaExtrair() {
    var r = textoLista();
    document.getElementById("ext-texto").value = r.texto;
    document.getElementById("ext-info").textContent = r.n + " criaturas · " + r.texto.length + " caracteres";
    var cmp = document.getElementById("ext-comparar");
    document.getElementById("ext-resultado").innerHTML = cmp.value.trim() ? comparar(cmp.value) : "";
  }

  function abrirExtrair() {
    var radios = LISTAS.map(function (l) {
      return '<label class="ext-op"><input type="radio" name="ext-lista" value="' + l[0] + '"' + (l[0] === ext.lista ? " checked" : "") + "> " + l[1] + "</label>";
    }).join("");
    var corpo =
      '<div class="ext-grade">' +
        '<div class="ext-ops"><b>Quais criaturas?</b>' + radios +
          '<b class="ext-sub">Formato</b>' +
          '<label class="ext-op"><input type="radio" name="ext-formato" value="linhas"' + (ext.formato === "linhas" ? " checked" : "") + "> Uma por linha</label>" +
          '<label class="ext-op"><input type="radio" name="ext-formato" value="virgula"' + (ext.formato === "virgula" ? " checked" : "") + "> Separadas por vírgula</label>" +
          '<label class="ext-op"><input type="checkbox" id="ext-classe"' + (ext.classe ? " checked" : "") + "> Agrupar por classe</label>" +
        "</div>" +
        '<div class="ext-saida"><textarea id="ext-texto" readonly spellcheck="false"></textarea>' +
          '<div class="ext-acoes"><span id="ext-info"></span><button type="button" class="bt-grupos" id="ext-copiar">Copiar texto</button></div></div>' +
      "</div>" +
      '<div class="ext-cmp"><b>Comparar com a lista de outra pessoa</b>' +
        '<p class="intro-itens">Cole aqui a lista que recebeu (ex.: os Soul Cores que alguém está vendendo). ' +
        "Ela é comparada com o tipo marcado acima: Soul Core, Echo Warden ou Bestiário.</p>" +
        '<textarea id="ext-comparar" placeholder="Dragon Lord&#10;Frost Dragon&#10;Hydra..." spellcheck="false"></textarea>' +
        '<div id="ext-resultado"></div></div>' +
      '<div class="botoes"><a class="BigButton" href="#" data-fechar="1"><span class="BigButtonText">Fechar</span></a></div>';
    modalCaixaEl.innerHTML = '<div class="Box"><div class="Corner-tl"></div><div class="Corner-tr"></div><div class="Border_1"></div>' +
      '<div class="BorderTitleText"><div class="Title"><span id="m-nome">Extrair lista</span></div>' +
      '<button class="fechar-x" type="button" data-fechar="1" aria-label="Fechar">X</button></div>' +
      '<div class="Border_2"><div class="Border_3"><div class="BoxContent">' + corpo + "</div></div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
    ultimoFoco = document.activeElement;
    modalEl.hidden = false;
    modalEl.scrollTop = 0;
    document.body.style.overflow = "hidden";
    atualizaExtrair();
    modalCaixaEl.querySelector(".fechar-x").focus();
  }
  function fecharExtrair() {
    if (modalEl.hidden) return;
    modalEl.hidden = true;
    document.body.style.overflow = "";
    if (ultimoFoco) ultimoFoco.focus();
  }
  function copiar() {
    var ta = document.getElementById("ext-texto"), bt = document.getElementById("ext-copiar");
    function ok() { bt.textContent = "Copiado!"; setTimeout(function () { bt.textContent = "Copiar texto"; }, 1500); }
    function antigo() { ta.focus(); ta.select(); try { if (document.execCommand("copy")) ok(); } catch (e) { /* fica selecionado para Ctrl+C */ } }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(ta.value).then(ok, antigo);
    else antigo();
  }

  modalEl.addEventListener("click", function (e) {
    if (e.target === modalEl || e.target.closest("[data-fechar]")) { e.preventDefault(); fecharExtrair(); return; }
    if (e.target.id === "ext-copiar") copiar();
  });
  modalEl.addEventListener("change", function (e) {
    var t = e.target;
    if (t.name === "ext-lista") { ext.lista = t.value; guardar("bestiarioExtrairLista", t.value); }
    if (t.name === "ext-formato") { ext.formato = t.value; guardar("bestiarioExtrairFormato", t.value); }
    if (t.id === "ext-classe") { ext.classe = t.checked; guardar("bestiarioExtrairClasse", t.checked); }
    atualizaExtrair();
  });
  modalEl.addEventListener("input", function (e) { if (e.target.id === "ext-comparar") atualizaExtrair(); });

  render();
})();
