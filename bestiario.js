(function () {
  "use strict";

  var CRIATURAS = window.BESTIARIO || [];
  var raiz = document.getElementById("conteudo-bestiario");
  var buscaEl = document.getElementById("busca");

  var DIFS = ["Harmless", "Trivial", "Easy", "Medium", "Hard", "Challenging"];
  var DIF_PT = { Harmless: "Inofensivo", Trivial: "Trivial", Easy: "Fácil", Medium: "Médio", Hard: "Difícil", Challenging: "Desafiador" };
  var TEMPO_PT = { Easy: "Fácil (< 2h)", Medium: "Médio (2-5h)", Hard: "Difícil (> 5h)" };
  var TEMPO_ORDEM = { Easy: 1, Medium: 2, Hard: 3 };

  var completos = ler("bestiarioCompletos", {});
  var estado = {
    busca: "",
    classe: "",
    dificuldade: "",
    situacao: ler("bestiarioSituacao", "todas"),
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

  var ICONES = "img/bestiario-icones/";
  var RARIDADE_PT = { Common: "Comum", Uncommon: "Incomum", Rare: "Rara", "Very Rare": "Muito rara" };
  function icone(arq) { return ICONES + arq.toLowerCase().replace(/ /g, "-") + ".gif"; }

  // sprite recortado (sem borda transparente) e centralizado numa caixa de 44px
  function sprite(c) {
    if (!c.sprite) return '<div class="spr"></div>';
    var r = c.recorte;
    if (!r) return '<div class="spr"><img loading="lazy" src="' + esc(c.sprite) + '" alt=""></div>';
    var esc_ = Math.min(1, 44 / Math.max(r[2], r[3]));
    var px = function (n) { return Math.round(n * esc_) + "px"; };
    return '<div class="spr"><div class="spr-corte" style="width:' + px(r[2]) + ";height:" + px(r[3]) + '">' +
      '<img loading="lazy" src="' + esc(c.sprite) + '" alt="" style="width:' + px(r[4]) + ";height:" + px(r[5]) +
      ";margin-left:-" + px(r[0]) + ";margin-top:-" + px(r[1]) + '"></div></div>';
  }

  function caixa(id, titulo, conteudo) {
    return '<div class="Box" id="' + id + '"><div class="Corner-tl"></div><div class="Corner-tr"></div>' +
      '<div class="Border_1"></div><div class="BorderTitleText"><div class="Title">' + titulo + "</div></div>" +
      '<div class="Border_2"><div class="Border_3"><div class="BoxContent">' + conteudo + "</div></div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
  }

  var classes = Array.from(new Set(CRIATURAS.map(function (c) { return c.classe; }).filter(Boolean))).sort();

  function filtradas() {
    var t = estado.busca;
    return CRIATURAS.filter(function (c) {
      if (t && (c.nome + " " + (c.respawn || "") + " " + (c.classe || "")).toLowerCase().indexOf(t) === -1) return false;
      if (estado.classe && c.classe !== estado.classe) return false;
      if (estado.dificuldade && c.dificuldade !== estado.dificuldade) return false;
      if (estado.soTibiapal && c.fonteRespawn !== "tibiapal") return false;
      var feito = !!completos[c.nome];
      if (estado.situacao === "completas" && !feito) return false;
      if (estado.situacao === "faltando" && feito) return false;
      return true;
    });
  }

  function ordenar(lista) {
    var o = estado.ordem;
    var val = {
      nome: function (c) { return c.exibir || c.nome; },
      classe: function (c) { return c.classe || "~"; },
      dificuldade: function (c) { return DIFS.indexOf(c.dificuldade); },
      pontos: function (c) { return c.pontos; },
      kills: function (c) { return c.kills; },
      tempo: function (c) { return TEMPO_ORDEM[c.tempo] || 9; },
      respawn: function (c) { return c.respawn || "~"; },
      feito: function (c) { return completos[c.nome] ? 1 : 0; }
    }[o.col];
    return lista.slice().sort(function (a, b) {
      var x = val(a), y = val(b);
      var r = typeof x === "number" ? x - y : String(x).localeCompare(String(y));
      return r * o.dir || a.nome.localeCompare(b.nome);
    });
  }

  function cab(col, rotulo, classe) {
    var o = estado.ordem;
    return '<th class="ordenavel' + (o.col === col ? " ativa" : "") + (classe ? " " + classe : "") + '" data-col="' + col + '">' +
      rotulo + '<span class="seta">' + (o.col === col ? (o.dir > 0 ? " ▲" : " ▼") : "") + "</span></th>";
  }

  function resumo() {
    var total = 0, feitos = 0, nFeitas = 0;
    CRIATURAS.forEach(function (c) {
      total += c.pontos;
      if (completos[c.nome]) { feitos += c.pontos; nFeitas++; }
    });
    return { total: total, feitos: feitos, nFeitas: nFeitas, pct: total ? Math.round(feitos * 1000 / total) / 10 : 0 };
  }

  function barra() {
    var r = resumo();
    return '<div class="Box"><div class="Corner-tl"></div><div class="Corner-tr"></div><div class="Border_1"></div>' +
      '<div class="BorderTitleText InfoTitle"><div class="InfoBar">' +
      "<span><b>" + CRIATURAS.length + "</b> criaturas</span>" +
      "<span><b>" + milhar(r.total) + "</b> pontos no total</span>" +
      '<span>Completas: <b id="b-feitas">' + r.nFeitas + "</b> · <b id=\"b-pontos\">" + milhar(r.feitos) + "</b> pontos (<b id=\"b-pct\">" + String(r.pct).replace(".", ",") + "%</b>)</span>" +
      "</div></div>" +
      '<div class="Border_1"></div><div class="CornerWrapper-b"><div class="Corner-bl"></div></div>' +
      '<div class="CornerWrapper-b"><div class="Corner-br"></div></div></div>';
  }

  function controles() {
    function sel(id, rotulo, opcoes, atual) {
      return '<label class="ctrl"><span class="ctrl-rotulo">' + rotulo + '</span><select id="' + id + '">' +
        opcoes.map(function (o) {
          return '<option value="' + esc(o[0]) + '"' + (o[0] === atual ? " selected" : "") + ">" + esc(o[1]) + "</option>";
        }).join("") + "</select></label>";
    }
    return '<div class="controles">' +
      sel("f-situacao", "Mostrar:", [["todas", "Todas"], ["faltando", "Faltando"], ["completas", "Completas"]], estado.situacao) +
      sel("f-classe", "Classe:", [["", "Todas"]].concat(classes.map(function (c) { return [c, c]; })), estado.classe) +
      sel("f-dif", "Dificuldade:", [["", "Todas"]].concat(DIFS.map(function (d) { return [d, DIF_PT[d]]; })), estado.dificuldade) +
      '<label class="ctrl"><input type="checkbox" id="f-tibiapal"' + (estado.soTibiapal ? " checked" : "") + "> Só com respawn sugerido (TibiaPal)</label>" +
      '<span class="ctrl-dica">Marque a caixa quando completar a criatura (fica salvo neste navegador). Clique no cabeçalho para ordenar. ' +
      'O "tempo" é a estimativa do TibiaPal para completar a criatura.</span>' +
      "</div>";
  }

  function linhas(lista) {
    return lista.map(function (c, i) {
      var feito = !!completos[c.nome];
      var respawn = c.respawn
        ? esc(c.respawn) + (c.fonteRespawn === "wiki" ? ' <span class="fonte" title="Locais citados na TibiaWiki (não é uma sugestão do TibiaPal)">wiki</span>' : "")
        : '<span class="sem-dano">—</span>';
      return '<tr class="' + (i % 2 ? "Even" : "Odd") + (feito ? " feito" : "") + '">' +
        '<td class="col-check"><input type="checkbox" class="marca" data-nome="' + esc(c.nome) + '"' + (feito ? " checked" : "") +
          ' aria-label="Completo: ' + esc(c.nome) + '"></td>' +
        '<td class="col-nome"><div class="nome-cel">' + sprite(c) +
          '<div><a href="' + esc(wiki(c.nome)) + '" target="_blank" rel="noopener"><b>' + esc(c.exibir || c.nome) + "</b></a>" +
          '<div class="ocorr"><img class="pixel" src="' + icone("Bestiary Occurrence " + c.raridade) + '" alt="" title="Ocorrência: ' +
            esc(RARIDADE_PT[c.raridade] || c.raridade) + '">' +
            (c.raridade === "Very Rare" ? '<span class="rara">Muito rara (5 kills)</span>' : "") + "</div></div></div></td>" +
        "<td>" + esc(c.classe || "—") + "</td>" +
        '<td class="dif dif-' + c.dificuldade.toLowerCase() + '"><img class="pixel estrelas" src="' + icone("Bestiary Level " + c.dificuldade) +
          '" alt=""><div>' + esc(DIF_PT[c.dificuldade]) + "</div></td>" +
        '<td class="col-num total"><span class="pts">' + c.pontos + '<img class="pixel" src="' + ICONES + 'charm-icon.gif" alt="" title="Charm points"></span></td>' +
        '<td class="col-num">' + milhar(c.kills) + "</td>" +
        '<td class="col-num tempo">' + (c.tempo ? esc(TEMPO_PT[c.tempo] || c.tempo) : '<span class="sem-dano">—</span>') + "</td>" +
        '<td class="col-respawn">' + respawn + "</td></tr>";
    }).join("");
  }

  function tabela() {
    var lista = ordenar(filtradas());
    var pendentes = lista.filter(function (c) { return !completos[c.nome]; });
    var feitas = lista.filter(function (c) { return completos[c.nome]; });
    var corpo = linhas(pendentes) +
      (feitas.length ? '<tr class="divisao"><td colspan="8">Completas (' + feitas.length + " · " +
        milhar(feitas.reduce(function (s, c) { return s + c.pontos; }, 0)) + " pontos)</td></tr>" + linhas(feitas) : "");
    var pts = lista.reduce(function (s, c) { return s + c.pontos; }, 0);
    return '<p class="intro-itens">' + lista.length + " criaturas na lista · " + milhar(pts) + " pontos</p>" +
      '<div class="tabela-rolagem"><table class="tabela-outfits tabela-bestiario"><thead><tr>' +
      "<th class=\"col-check\">✓</th>" + cab("nome", "Criatura") + cab("classe", "Classe") + cab("dificuldade", "Dificuldade") +
      cab("pontos", "Pontos") + cab("kills", "Kills") + cab("tempo", "Tempo") + cab("respawn", "Respawn sugerido") +
      "</tr></thead><tbody>" + (corpo || '<tr><td colspan="8" class="vazio-cel">Nada encontrado.</td></tr>') +
      "</tbody></table></div>";
  }

  function render() {
    raiz.innerHTML = barra() + caixa("tabela", "Bestiário", controles() + '<div id="area-tabela">' + tabela() + "</div>");
  }
  function renderTabela() { document.getElementById("area-tabela").innerHTML = tabela(); }
  function atualizaBarra() {
    var r = resumo();
    document.getElementById("b-feitas").textContent = r.nFeitas;
    document.getElementById("b-pontos").textContent = milhar(r.feitos);
    document.getElementById("b-pct").textContent = String(r.pct).replace(".", ",") + "%";
  }

  raiz.addEventListener("click", function (e) {
    var th = e.target.closest("th.ordenavel");
    if (th) {
      var col = th.getAttribute("data-col");
      if (estado.ordem.col === col) estado.ordem.dir = -estado.ordem.dir;
      else { estado.ordem.col = col; estado.ordem.dir = (col === "pontos" || col === "kills" || col === "feito") ? -1 : 1; }
      renderTabela();
    }
  });
  raiz.addEventListener("change", function (e) {
    var t = e.target;
    if (t.classList.contains("marca")) {
      var nome = t.getAttribute("data-nome");
      if (t.checked) completos[nome] = 1; else delete completos[nome];
      guardar("bestiarioCompletos", completos);
      atualizaBarra();
      renderTabela();
      return;
    }
    if (t.id === "f-situacao") { estado.situacao = t.value; guardar("bestiarioSituacao", t.value); }
    if (t.id === "f-classe") estado.classe = t.value;
    if (t.id === "f-dif") estado.dificuldade = t.value;
    if (t.id === "f-tibiapal") { estado.soTibiapal = t.checked; guardar("bestiarioSoTibiapal", t.checked); }
    renderTabela();
  });
  buscaEl.addEventListener("input", function () { estado.busca = buscaEl.value.trim().toLowerCase(); renderTabela(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && buscaEl.value) { buscaEl.value = ""; estado.busca = ""; renderTabela(); }
  });

  render();
})();
