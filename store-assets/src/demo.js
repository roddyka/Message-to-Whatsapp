'use strict';

// Carrega o painel real (sidepanel.html) num iframe e preenche com dados de exemplo.
// Fora da extensão não existe chrome.storage, então o estado é aplicado direto aqui.
function fillPanel(iframe, opts) {
  iframe.addEventListener('load', function() {
    const w = iframe.contentWindow;
    const d = iframe.contentDocument;
    if (opts.theme) d.documentElement.dataset.theme = opts.theme;
    w.applyLang(opts.lang || 'pt');
    const option = d.querySelector('option[data-countrycode="' + (opts.iso || 'BR') + '"]');
    if (option) option.selected = true;
    d.getElementById('number').value = opts.number || '';
    d.getElementById('message').value = opts.message || '';
    d.getElementById('newTab').checked = !!opts.newTab;
    w.updatePrefix();
    w.updateCounter();
    if (opts.saved) {
      const status = d.getElementById('status');
      status.textContent = w.t('draftSaved');
      status.classList.add('is-saved');
    }
    document.body.dataset.ready = '1';
  });
}
