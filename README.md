# Mensagem para Whatsapp

Extensão para o Google Chrome, onde você pode enviar uma mensagem para algum contato via WhatsApp sem a necessidade e o trabalho de adicioná-lo na agenda. O resultado é esse aí faça o download e vamos melhorar aos poucos o processo.

## [Baixe a extensão aqui](https://bit.ly/2S9aWOS)

### NEWS

02/02/2019
* Atualização no estilo da extensão.
* Extensão só habilitando em páginas https (Sem abrir uma página não funciona, entende-se que você esteja offline)

03/02/2019
* Remoção da obrigatoriedade do envio de mensagem
* Envio direto para o Whatsapp web sem a confirmação da api antes.

05/02/2019
* Alterado comunicação do botão para o texto Enviar
* Hyperlink para download da extenção no README.

06/10/2026
* Migração para o Manifest V3 (padrão atual de extensões do Chrome; o MV2 foi descontinuado).
* `page_action` substituído por `action` e removido o background/`declarativeContent`: a extensão agora funciona em qualquer aba.
* Navegação feita via `chrome.tabs.update` (sem `executeScript`) e sem nenhuma permissão extra.
* Mensagem codificada com `encodeURIComponent` (acentos, `&`, quebras de linha funcionam) e número limpo de caracteres não numéricos.
* Popup substituído pelo **painel lateral** (Side Panel API): não fecha mais ao clicar fora.
* Rascunho salvo automaticamente (país, número, mensagem) no `chrome.storage.local`: nada se perde ao fechar o painel.
* Novo visual: layout moderno nas cores do WhatsApp, modo escuro automático, prefixo do país no campo de número, contador de caracteres, opção "Abrir em nova aba", botão Limpar e atalho Ctrl+Enter para enviar.
* Requer Chrome 116+.
* Multilíngue: português, inglês e espanhol, com seletor de idioma (PT/EN/ES) e nomes dos países traduzidos; nome e descrição da extensão traduzidos via `_locales`.
* Botão "Me pague um café" (Buy Me a Coffee).
* Código do Paquistão (+92) de volta e correção de vários DDIs (República Tcheca, Geórgia, Liechtenstein, Dominica, Ilhas Virgens).
* País selecionado agora também fica salvo no rascunho.
* Imagens e textos da Chrome Web Store em `store-assets/`.

### Installation

### Tech

Tecnologia utilizada para a criação da extensão:

* [HTML] - Código escrito em documento html.
* [CSS] - Estilo da extensão
* [Javascript] - Onde é feito toda a mágica.

### Installation

* Baixe o projeto no git.
* Vá na aba do chrome e digite "chrome://extensions/" sem aspas.
* Ative o modo desenvolvedor no canto direito da tela.
* Em "Carregar sem compactação" escolha a pasta do projeto.
* Pronto aparecerá o icone da extensão no cantinho do navegador la em cima na direita.

Obs: Com essa aba aberta onde você carregou o arquivo da extensão baixado, toda modificação no código com seu editor favorito ja é carregado automaticamente na extensão ou vá no botão de atualizar na extensão.

### To Do

 - Botão que abrirá campos para adicionar número com ddd e codigo do país + nome da pessoa, criando assim uma agenda no storage.
 - Reconhecer números de qualquer página web e transformá-los em clicáveis levando direto para a tela do whatsapp web.
 - Implementar bootstrap para estilização

 Ideias são bem-vindas

### Development

Hands on!

License
----

MIT


**Free Software, Hell Yeah!**