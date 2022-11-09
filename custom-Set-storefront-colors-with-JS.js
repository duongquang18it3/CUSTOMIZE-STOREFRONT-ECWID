window.Ecwid.OnAPILoaded.add(function() {
    window.ec = window.ec || Object();
window.ec.config = window.ec.config || Object();
window.ec.config.chameleon = window.ec.config.chameleon || Object();
window.ec.config.chameleon = {
  colors: {
    'color-button':'blue'
  },
  font: {
    'font-family': 'arial,sans-serif'
  }
}

Ecwid.refreshConfig();
    console.log("Ecwid storefront JS API has loaded");
});
