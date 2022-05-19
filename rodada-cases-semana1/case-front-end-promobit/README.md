# Cases Semana 1 - Front End Promobit

Visualização no projeto com SURGE:

# Introdução

Está cansado de ficar horas encarando telas tentando as achar os melhores filmes para assistir no seu tempo livre? Esse aplicativo é a solução, apresento a vocês o aplicativo que mostra somente os filmes mais pupolares do momento para curtir comsua família.

# Projeto

## Qual seu objetivo?

Usando a API de filmes gratuita themoviedb em sua versão 3, foi desenvolvida uma listagem dos filmes mais populares do dia, consultando o endpoint `GET ${/movie/popular}` para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme, foi utilizado o endpoint `GET {/movie/{movie_id}}`. Para garantir que o usuário encontre o filme que está procurando, essa lista está ser paginada.

Foi utilizado como inspiração o seguinte design elaborado com o Figma:
https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End?node-id=16%3A1199

## Desafios do Projeto

### `Funcionais`

* O usuário deve ter acesso a uma listagem dos filmes mais populares do dia.
* O usuário deve conseguir paginar a lista para encontrar novos filmes.
* O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem.
* A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa.

### `Não funcionais`

* O app deverá ser criado usando React.
* Na raiz do projeto, será necessário incluir um arquivo README md com as instruções para construir seu projeto localmente.
* Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.
* O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge.
* O app deverá ser responsivo

## Como faço rodar projeto?
### `git clone`

Clone o link https do projeto no GitHub para seu repositório local através do terminal utilizando o comando `git clone link do projeto`

### `npm install`

Após ter o repósitorio clonado em seu computador utilize o comando `npm install` para instalar todas suas dependências.

### `npm run start`

O comando `npm run start` serve para iniciar o projeto e verificar como ele renderiza em seu computador.

# Interface & Design


