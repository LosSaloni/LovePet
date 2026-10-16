# Love Pet — pacote completo para GitHub Pages

Este pacote contém **um único `index.html`** e os arquivos necessários para a página:

- `index.html` — conteúdo e estrutura da página;
- `styles.css` — estilos, cores e layout responsivo;
- `script.js` — menu móvel e formulário que prepara uma mensagem no WhatsApp;
- `favicon.svg` — ícone da aba do navegador.

## Como publicar

1. Extraia **todos os arquivos do ZIP** para a raiz do repositório GitHub, juntos.
2. Se houver um `index-completo.html` antigo, remova-o. Mantenha apenas este `index.html` como página inicial.
3. No GitHub, abra **Settings → Pages**, escolha **Deploy from a branch**, selecione `main` e a pasta `/(root)`, e salve.

O formulário abre o link direto de WhatsApp fornecido pela clínica, com os dados preenchidos na mensagem. A pessoa revisa e envia pelo aplicativo; o site não armazena esses dados.

**Imagens:** as ilustrações do hero, da marca e do contato continuam apontadas para o Preview da Manus; os arquivos de imagem não estão dentro deste ZIP. Isso mantém o pacote leve, mas significa que essas imagens dependem do endereço do Preview. Para hospedar tudo apenas no GitHub, coloque os arquivos de imagem numa pasta `assets/` e atualize os respectivos caminhos no `index.html`.
