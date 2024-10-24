Documentação página Produtos

1 - Descrição geral
  A página "Produtos" faz parte do website da loja de Móveis ESCTEC, exibindo ao usuário uma lista de móveis cadastrados. A página principal possui 3 subpáginas com o objetivo de 
  categorizar esses produtos em "mesas", "cadeiras" e "diversos". Os produtos apresentam imagem, nome e uma breve descrição de cada item. Enquanto as páginas "mesas", "cadeiras" e 
  "diversos" exibem itens de suas respectivas categorias, a página inicial destaca itens promocionais de suas subcategorias. O HTML5 foi utilizado para estruturar as páginas, 
  explorando recursos semânticos, facilitando questões como acessibilidade e organização do conteúdo apresentado.

2- Estrutura dos arquivos

   /produtos: Pasta contendo os arquivos principais da estruturação html.
   /img: Pasta contendo os arquivos de imagem utilizados na página, nos formatos .png e .webp
   produtos.html: Arquivo HTML página principal produtos.
   cadeira.html: Arquivo HTML com página de produtos da categoria "cadeira".
   mesas.html: Arquivo HTML com página de produtos da categoria "mesas".
   diversos.html: Arquivo HTML com página de produtos da categoria "diversos".

3- Estrutura HTML

    HEADER - 

    <main> - O conteúdo principal da página está inserido dentro da tag <main>, onde foi atribuído o id "pagina-produtos". Dentro dela, podemos observar que os itens estão organizados 
    em um container <section> com a classe "produtos". Nesta <section>, há uma sequência de artigos, onde cada produto está contido em uma tag <article>, cuja classe foi definida como
     "produto", possuindo imagem, título e descrição.

    <article> - Conforme descrito acima, acerca da tag main, cada produto está contido nesta tag e cada produto está estruturado da seguinte forma:
    Foto do produto: inserido através da tag <img> insere o caminho correspondente a imagem do produto, contida na pasta "/img" através do atributo src, cada imagem possui uma descrição
    para facilitar a acessibilidade a usuários com necessidades especiais.
    Nome do produto: inserido como um titulo através da tag <h3>.
    Descrição: inserido através da tag <p> insere um texto breve para descrever atributos dos produtos. 

4 - Detalhamento de Elementos

    tag <header>:  tag indica que o conteúdo envolto se trata do cabeçalho da página, contendo a sua logomarca e um menu de navegação.
    tag <main>: o código escrito dentro desta tag compõe da parte principal da página.
    tag <section>:  cria uma div que semânticamente indica que pode comportar outras divs, facilitando a identificação e a manipulação das outras divs contidas na mesma.
    tag <article>: cria uma div para comportar os dados dos produtos e torná-los melhor manipuláveis e independentes. 
    tag <footer>: tag indica um rodapé da página, que infoema dados de copyright, telefone e e-mail de contato.
