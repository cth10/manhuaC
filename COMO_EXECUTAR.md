# Como Executar o Site ManhuáWorld

Para visualizar o site ManhuáWorld em seu computador, siga estas instruções simples:

## Opção 1: Abrir diretamente no navegador

1. Navegue até a pasta do projeto usando o Explorador de Arquivos (Windows) ou Finder (Mac)
2. Clique duas vezes no arquivo `index.html`
3. O site será aberto automaticamente em seu navegador padrão

## Opção 2: Usar um servidor local (recomendado)

Para uma experiência completa, é recomendado usar um servidor local simples:

### Usando Python (método fácil)

Se você tem Python instalado:

1. Abra o terminal ou prompt de comando
2. Navegue até a pasta do projeto usando o comando `cd caminho/para/a/pasta`
3. Execute um dos seguintes comandos:
   - Python 3: `python -m http.server`
   - Python 2: `python -m SimpleHTTPServer`
4. Abra seu navegador e acesse: `http://localhost:8000`

### Usando Node.js

Se você tem Node.js instalado:

1. Instale o pacote `http-server` globalmente com: `npm install -g http-server`
2. Navegue até a pasta do projeto no terminal
3. Execute: `http-server`
4. Abra seu navegador e acesse: `http://localhost:8080`

## Nota sobre as imagens

Para visualizar o site com todas as imagens, você precisará adicionar suas próprias imagens à pasta `img/` com os nomes especificados no código HTML. As imagens necessárias são:

- `img/hero-bg.jpg` (imagem de fundo da seção hero)
- `img/manhua-example.jpg` (exemplo de arte de manhuá)
- `img/manhua-history.jpg` (imagem histórica de manhuás)

## Personalizando o site

Sinta-se à vontade para personalizar o conteúdo, cores e imagens do site conforme desejar. O arquivo `css/style.css` contém todas as configurações de estilo que podem ser ajustadas. 