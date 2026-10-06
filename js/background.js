'use strict';

// Abre o painel lateral ao clicar no ícone da extensão.
// Diferente do popup, o painel não fecha ao clicar fora.
function enableSidePanel() {
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch(function(error) { console.error(error); });
}

chrome.runtime.onInstalled.addListener(enableSidePanel);
chrome.runtime.onStartup.addListener(enableSidePanel);
