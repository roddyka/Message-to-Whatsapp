'use strict';

const I18N = {
  pt: {
    title: 'Mensagem para Whats',
    subtitle: 'Converse com qualquer número sem salvar o contato.',
    country: 'País',
    otherCountries: 'Outros países',
    number: 'Número',
    numberPlaceholder: 'DDD + número (ex.: 11 91234-5678)',
    numberError: 'Informe o número com DDD.',
    message: 'Mensagem',
    optional: '(opcional)',
    messagePlaceholder: 'Escreva sua mensagem…',
    newTab: 'Abrir em nova aba',
    clear: 'Limpar',
    send: 'Enviar no WhatsApp',
    draftAuto: 'Rascunho salvo automaticamente',
    draftSaved: 'Rascunho salvo',
    madeBy: 'Desenvolvido por',
    language: 'Idioma',
    support: 'Me pague um café'
  },
  en: {
    title: 'Message to Whats',
    subtitle: 'Chat with any number without saving the contact.',
    country: 'Country',
    otherCountries: 'Other countries',
    number: 'Number',
    numberPlaceholder: 'Area code + number (e.g. 415 555 0123)',
    numberError: 'Enter the number with area code.',
    message: 'Message',
    optional: '(optional)',
    messagePlaceholder: 'Write your message…',
    newTab: 'Open in a new tab',
    clear: 'Clear',
    send: 'Send on WhatsApp',
    draftAuto: 'Draft saved automatically',
    draftSaved: 'Draft saved',
    madeBy: 'Developed by',
    language: 'Language',
    support: 'Buy me a coffee'
  },
  es: {
    title: 'Mensaje a Whats',
    subtitle: 'Chatea con cualquier número sin guardar el contacto.',
    country: 'País',
    otherCountries: 'Otros países',
    number: 'Número',
    numberPlaceholder: 'Código de área + número (ej.: 11 1234-5678)',
    numberError: 'Ingresa el número con código de área.',
    message: 'Mensaje',
    optional: '(opcional)',
    messagePlaceholder: 'Escribe tu mensaje…',
    newTab: 'Abrir en una pestaña nueva',
    clear: 'Limpiar',
    send: 'Enviar por WhatsApp',
    draftAuto: 'Borrador guardado automáticamente',
    draftSaved: 'Borrador guardado',
    madeBy: 'Desarrollado por',
    language: 'Idioma',
    support: 'Invítame un café'
  }
};

const LANGS = Object.keys(I18N);

function detectLang() {
  const ui = (chrome.i18n && chrome.i18n.getUILanguage()) || navigator.language || 'en';
  const base = ui.toLowerCase().split('-')[0];
  return LANGS.includes(base) ? base : 'en';
}

let currentLang = 'pt';

function t(key) {
  return I18N[currentLang][key] || I18N.en[key] || key;
}

// Nomes dos países traduzidos via Intl.DisplayNames. Códigos ISO repetidos
// (ex.: Chipre Norte/Sul) mantêm o texto original para não ficarem iguais.
function localizeCountries(lang) {
  const select = document.getElementById('country');
  const options = Array.from(select.querySelectorAll('option'));
  const counts = {};
  options.forEach(function(o) {
    const code = o.dataset.countrycode;
    counts[code] = (counts[code] || 0) + 1;
    if (!o.dataset.original) o.dataset.original = o.textContent.replace(/\s*\(\+\d+\)\s*$/, '');
  });

  let names;
  try {
    names = new Intl.DisplayNames([lang], { type: 'region' });
  } catch (e) {
    names = null;
  }

  options.forEach(function(o) {
    const code = o.dataset.countrycode;
    let name = o.dataset.original;
    if (names && counts[code] === 1) {
      const localized = names.of(code);
      if (localized && localized !== code) name = localized;
    }
    o.textContent = name + ' (+' + o.value + ')';
  });

  // Reordena "outros países" pelo nome no idioma escolhido
  const group = select.querySelector('optgroup');
  const selected = select.value && select.selectedOptions[0];
  Array.from(group.children)
    .sort(function(a, b) { return a.textContent.localeCompare(b.textContent, lang); })
    .forEach(function(o) { group.appendChild(o); });
  if (selected) selected.selected = true;
}

function applyLang(lang) {
  currentLang = LANGS.includes(lang) ? lang : 'en';
  document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es' }[currentLang];
  document.title = t('title');

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-label]').forEach(function(el) {
    el.label = t(el.dataset.i18nLabel);
  });
  document.getElementById('lang').setAttribute('aria-label', t('language'));
  document.querySelectorAll('[data-lang]').forEach(function(btn) {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
  });

  localizeCountries(currentLang);
}
