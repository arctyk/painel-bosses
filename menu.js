/* Menu lateral (estilo tibia.com) compartilhado pelas páginas do painel.
   Cada página diz quem ela é em <body data-pagina="bosses|outfits">. */
(function () {
  "use strict";

  var MENU = [
    {
      id: "bosses", rotulo: "Bosses", pagina: "index.html", icone: "img/itens/final-judgement.gif",
      sub: [
        ["Grave Danger", "index.html#g-grave-danger"],
        ["Heart of Destruction", "index.html#g-heart-of-destruction"],
        ["Dream Courts", "index.html#g-dream-courts"],
        ["Avulsos", "index.html#g-avulsos"]
      ]
    },
    {
      id: "outfits", rotulo: "Outfits", pagina: "outfits.html", icone: "img/itens-outfit/ape-fur.gif",
      sub: [
        ["Por outfit", "outfits.html#por-outfit"],
        ["Por item", "outfits.html#por-item"]
      ]
    }
  ];

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function ler() { try { return JSON.parse(localStorage.getItem("menuAbertos2")); } catch (e) { return null; } }
  function guardar(v) { try { localStorage.setItem("menuAbertos2", JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } }

  function render() {
    var el = document.getElementById("MenuItens");
    if (!el) return;
    var atual = document.body.getAttribute("data-pagina");
    var abertos = ler() || [atual];
    if (abertos.indexOf(atual) === -1) abertos.push(atual);
    el.innerHTML = MENU.map(function (m) {
      var aberto = abertos.indexOf(m.id) !== -1;
      var mesma = m.id === atual;
      return '<div class="menuitem' + (aberto ? " aberto" : "") + (mesma ? " atual" : "") + '" data-id="' + m.id + '">' +
        '<div class="MenuButton" role="button" tabindex="0" aria-expanded="' + aberto + '" data-pagina="' + m.pagina + '">' +
          '<div class="Button"></div>' +
          '<span class="Lights"><div class="light_lu"></div><div class="light_ld"></div><div class="light_ru"></div></span>' +
          '<div class="Icon"><img class="pixel" src="' + esc(m.icone) + '" alt=""></div>' +
          '<div class="Label">' + esc(m.rotulo) + "</div>" +
          '<div class="Extend"></div>' +
        "</div>" +
        '<div class="Submenu">' + m.sub.map(function (s) {
          // na própria página o link vira só "#âncora" (rola sem recarregar)
          var href = mesma ? s[1].slice(s[1].indexOf("#")) : s[1];
          return '<a class="Submenuitem" href="' + esc(href) + '">' +
            '<div class="LeftChain"></div><div class="ActiveSubmenuItemIcon"></div>' +
            '<div class="SubmenuitemLabel">' + esc(s[0]) + "</div>" +
            '<div class="RightChain"></div></a>';
        }).join("") + "</div></div>";
    }).join("");

    el.addEventListener("click", function (e) {
      var bt = e.target.closest(".MenuButton");
      if (!bt) return;
      var item = bt.parentNode;
      if (!item.classList.contains("atual")) {           // outra página: navega
        window.location.href = bt.getAttribute("data-pagina");
        return;
      }
      var aberto = !item.classList.contains("aberto");   // página atual: abre/fecha
      item.classList.toggle("aberto", aberto);
      bt.setAttribute("aria-expanded", aberto);
      guardar([].map.call(el.querySelectorAll(".menuitem.aberto"), function (m) { return m.getAttribute("data-id"); }));
    });
    el.addEventListener("keydown", function (e) {
      var bt = e.target.closest(".MenuButton");
      if (bt && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); bt.click(); }
    });
    // destaca o item do submenu da seção atual
    function marcar() {
      var h = location.hash;
      el.querySelectorAll(".Submenuitem").forEach(function (a) {
        a.classList.toggle("ativo", !!h && a.getAttribute("href").slice(a.getAttribute("href").indexOf("#")) === h);
      });
    }
    window.addEventListener("hashchange", marcar);
    marcar();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
