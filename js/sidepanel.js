'use strict';

const DRAFT_KEY = 'draft';
const LANG_KEY = 'lang';

const form = document.getElementById('form');
const country = document.getElementById('country');
const number = document.getElementById('number');
const message = document.getElementById('message');
const newTab = document.getElementById('newTab');
const prefix = document.getElementById('prefix');
const counter = document.getElementById('counter');
const phoneWrap = document.getElementById('phoneWrap');
const numberError = document.getElementById('numberError');
const status = document.getElementById('status');
const clear = document.getElementById('clear');
const langButtons = document.querySelectorAll('[data-lang]');

// País salvo como "ISO:DDI" (o índice muda ao reordenar a lista por idioma)
function countryKey() {
  const option = country.selectedOptions[0];
  return option ? option.dataset.countrycode + ':' + option.value : '';
}

function selectCountry(key) {
  const parts = (key || '').split(':');
  const option = country.querySelector(
    'option[data-countrycode="' + parts[0] + '"][value="' + parts[1] + '"]');
  if (option) option.selected = true;
}

function updatePrefix() {
  prefix.textContent = '+' + country.value;
}

function updateCounter() {
  counter.textContent = message.value.length;
}

function setError(visible) {
  numberError.hidden = !visible;
  phoneWrap.classList.toggle('is-invalid', visible);
}

// Rascunho: tudo que é digitado fica salvo no storage local,
// então fechar o painel ou o navegador não apaga nada.
let saveTimer;
let statusTimer;
let loaded = false;

function writeDraft() {
  clearTimeout(saveTimer);
  // Não sobrescreve o rascunho salvo antes de ele ter sido carregado
  if (!loaded) return;
  chrome.storage.local.set({
    [DRAFT_KEY]: {
      country: countryKey(),
      number: number.value,
      message: message.value,
      newTab: newTab.checked
    }
  }, function() {
    clearTimeout(statusTimer);
    status.textContent = t('draftSaved');
    status.classList.add('is-saved');
    statusTimer = setTimeout(function() {
      status.textContent = t('draftAuto');
      status.classList.remove('is-saved');
    }, 1200);
  });
}

// Enquanto digita, espera uma pausa curta antes de salvar
function saveDraft() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(writeDraft, 250);
}

function loadDraft() {
  chrome.storage.local.get([DRAFT_KEY, LANG_KEY], function(data) {
    const draft = data[DRAFT_KEY];
    // Rascunhos antigos (v2.1) guardavam a posição na lista original;
    // converte antes que a troca de idioma reordene as opções.
    if (draft && !draft.country && country.options[draft.countryIndex]) {
      const option = country.options[draft.countryIndex];
      draft.country = option.dataset.countrycode + ':' + option.value;
    }
    applyLang(data[LANG_KEY] || detectLang());
    if (draft) {
      if (draft.country) selectCountry(draft.country);
      number.value = draft.number || '';
      message.value = draft.message || '';
      newTab.checked = !!draft.newTab;
    }
    updatePrefix();
    updateCounter();
    loaded = true;
  });
}

function send() {
  const digits = number.value.replace(/\D/g, '');
  if (!digits) {
    setError(true);
    number.focus();
    return;
  }

  const link = 'https://web.whatsapp.com/send?phone=' + country.value + digits +
    '&text=' + encodeURIComponent(message.value);

  if (newTab.checked) {
    chrome.tabs.create({ url: link });
    return;
  }
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs[0]) {
      chrome.tabs.update(tabs[0].id, { url: link });
    } else {
      chrome.tabs.create({ url: link });
    }
  });
}

country.addEventListener('change', function() {
  updatePrefix();
  writeDraft();
});
number.addEventListener('input', function() {
  setError(false);
  saveDraft();
});
message.addEventListener('input', function() {
  updateCounter();
  saveDraft();
});
newTab.addEventListener('change', writeDraft);

// Garante que o que estiver pendente seja salvo ao fechar o painel
window.addEventListener('pagehide', writeDraft);

// Ctrl/Cmd + Enter envia a partir da mensagem
message.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    send();
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  send();
});

clear.addEventListener('click', function() {
  number.value = '';
  message.value = '';
  setError(false);
  updateCounter();
  saveDraft();
  number.focus();
});

langButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    applyLang(btn.dataset.lang);
    chrome.storage.local.set({ [LANG_KEY]: btn.dataset.lang });
  });
});

loadDraft();
