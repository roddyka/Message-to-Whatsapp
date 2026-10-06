# Chrome Web Store: textos da ficha

## Título do pacote

Vem do manifest (`_locales/*/messages.json`):

- en: Message to Whats
- pt_BR: Mensagem para Whats
- es: Mensaje a Whats

## Resumo do pacote (máx. 132 caracteres)

- en: Send WhatsApp messages to any number without saving the contact.
- pt_BR: Envie mensagens no WhatsApp para qualquer número sem salvar o contato.
- es: Envía mensajes por WhatsApp a cualquier número sin guardar el contacto.

## Descrição (EN)

```
Send a WhatsApp message to any number without adding it to your contacts.

Need to talk to a store, a delivery person or someone from a classified ad just once? Pick the country, type the number, write your message (optional) and click Send. WhatsApp Web opens directly in the chat, with no temporary contact cluttering your phonebook.

FEATURES
• Side panel that stays open while you browse (it doesn't close when you click outside)
• Draft saved automatically: country, number and message are kept even if you close the panel or the browser
• Over 200 country codes, with the dial code shown next to the number
• Open WhatsApp in the current tab or in a new one
• Automatic dark mode
• Available in Portuguese, English and Spanish
• Ctrl + Enter to send
• No sign-up, no ads, no tracking. Everything stays on your computer.

PRIVACY
The extension doesn't collect or send any data. Your draft is stored only in your browser (chrome.storage.local) and the message only leaves when you open WhatsApp Web.

Open source: https://github.com/roddyka/Message-to-Whatsapp
Like it? Buy me a coffee: https://buymeacoffee.com/jnjrai6
More projects: https://antunescode.com

NEWS

10/06/2026 (v2.2.1)
* Rebuilt for Manifest V3 (the current Chrome extension platform)
* New side panel that doesn't close when you click outside
* Automatic draft saving
* Brand-new design with dark mode
* Portuguese, English and Spanish with a language switcher; country names translated
* Option to open in a new tab and Ctrl + Enter shortcut
* Fixed several country codes (Czech Republic, Georgia, Liechtenstein, Dominica, Virgin Islands)

05/11/2024
* Add translations: PT, ES, EN

07/07/2020
* Add Pakistan code
* Support button to help keep this and other projects going

02/05/2019
* Changed the button text to Send

02/03/2019
* Message is no longer required
* Opens WhatsApp Web directly, without the API confirmation page

------------------
Privacy policy: https://antunescode.com/mtowhatsapp/contrato-politica-privacidade.pdf
Support / FAQ: https://antunescode.com/mtowhatsapp/support
```

## Descrição (PT-BR)

```
Envie mensagem no WhatsApp para qualquer número sem precisar adicioná-lo à agenda.

Precisa falar só uma vez com uma loja, um entregador ou alguém de um anúncio? Escolha o país, digite o número, escreva a mensagem (opcional) e clique em Enviar. O WhatsApp Web abre direto na conversa, sem contato temporário bagunçando sua agenda.

RECURSOS
• Painel lateral que fica aberto enquanto você navega (não fecha ao clicar fora)
• Rascunho salvo automaticamente: país, número e mensagem continuam lá mesmo se você fechar o painel ou o navegador
• Mais de 200 códigos de país, com o DDI exibido ao lado do número
• Abra o WhatsApp na aba atual ou em uma nova
• Modo escuro automático
• Disponível em português, inglês e espanhol
• Ctrl + Enter para enviar
• Sem cadastro, sem anúncios, sem rastreamento. Tudo fica no seu computador.

PRIVACIDADE
A extensão não coleta nem envia nenhum dado. O rascunho fica salvo apenas no seu navegador (chrome.storage.local) e a mensagem só sai quando você abre o WhatsApp Web.

Código aberto: https://github.com/roddyka/Message-to-Whatsapp
Gostou? Me pague um café: https://buymeacoffee.com/jnjrai6
Outros projetos: https://antunescode.com

NOVIDADES

06/10/2026 (v2.2.1)
* Reescrita para o Manifest V3 (padrão atual das extensões do Chrome)
* Novo painel lateral que não fecha ao clicar fora
* Rascunho salvo automaticamente
* Visual totalmente novo, com modo escuro
* Português, inglês e espanhol com seletor de idioma; nomes dos países traduzidos
* Opção de abrir em nova aba e atalho Ctrl + Enter
* Correção de vários códigos de país (República Tcheca, Geórgia, Liechtenstein, Dominica, Ilhas Virgens)

------------------
Política de privacidade: https://antunescode.com/mtowhatsapp/contrato-politica-privacidade.pdf
Suporte / FAQ: https://antunescode.com/mtowhatsapp/support
```

## URLs da ficha

- **Página inicial:** https://antunescode.com/mtowhatsapp
- **URL de suporte:** https://antunescode.com/mtowhatsapp/support
- **Política de privacidade:** https://antunescode.com/mtowhatsapp/contrato-politica-privacidade.pdf

## Aba "Práticas de privacidade": justificativas das permissões

- **Finalidade única:** Abrir uma conversa do WhatsApp Web com um número de telefone informado pelo usuário, sem precisar salvar o contato.
- **sidePanel:** A interface da extensão é exibida no painel lateral do Chrome para que permaneça aberta enquanto o usuário navega e copia o número de uma página.
- **storage:** Salva localmente o rascunho (país, número, mensagem), o idioma escolhido e a preferência "abrir em nova aba", para que nada se perca ao fechar o painel. Nada é enviado a servidores.
- **Código remoto:** Não, a extensão não usa código remoto.
- **Uso de dados:** Nenhum dado do usuário é coletado ou transmitido.

## Imagens

| Arquivo | Campo na loja | Tamanho |
|---|---|---|
| `screenshot-1.png` | Print 1 (painel lateral numa página real) | 1280x800 |
| `screenshot-2.png` | Print 2 (não fecha + rascunho) | 1280x800 |
| `screenshot-3.png` | Print 3 (modo escuro + idiomas) | 1280x800 |
| `screenshot-4.png` | Print 4 (inglês) | 1280x800 |
| `promo-small.png` | Bloco promocional pequeno | 440x280 |
| `marquee.png` | Bloco promocional de letreiro | 1400x560 |

Para regerar as imagens, rode `python store-assets/src/render.py` (requer Chrome e Pillow).
