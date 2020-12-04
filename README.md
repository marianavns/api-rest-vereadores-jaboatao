[![Deploy on heroku](https://img.shields.io/badge/deploy-heroku.com-blueviolet)](http://centraldevereadores.herokuapp.com/) ![GitHub deployments](https://img.shields.io/github/deployments/marianavns/projeto-final-central-de-vereadores/centraldevereadores)

# Central de Vereadores

A API Central de vereadores tem a proposta de centralizar as informações sobre os vereadores eleitos na cidade de Jaboatão dos Guararapes em 2020 e permitir que cidadãos enviem ideias de melhorias para a cidade. Para ler a proposta completa, clique [aqui](#Proposta-Completa-do-Projeto).

## Sumário

1. [Instruções para o uso da API](#Instruções-para-o-uso-da-API)
2. [Tecnologias empregadas no projeto](#Tecnologias-empregadas-no-projeto)
3. [Funções da API definidas nas rotas](#Funções-da-API-definidas-nas-rotas)
   - [Manipulando os registros de vereadores](#Manipulando-os-registros-de-vereadores)
   - [Manipulando os registros de ideias](#Manipulando-os-registros-de-ideias)
   - [Não relacionadas às funções de CRUD](#Não-relacionadas-às-funções-de-CRUD)
4. [Proposta Completa do Projeto](#Proposta-Completa-do-Projeto)

## Instruções para o uso da API

|                Como você quer usar esta API?                 |
| :----------------------------------------------------------: |
| <img src=".\images\papaleguas.gif" alt="Gif do personagem Papa-Léguas correndo para a direita." width=25% align=left>**"Só quero ver a API funcionando..."**. <br />Abra o aplicativo [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=pt-BR) e teste as rotas que estão AQUI usando este endereço na URL do Postman: <br />https://centraldevereadores.herokuapp.com/ na URL do POSTMAN. <br /><br />*Ps.: Está tudo bem alterar o banco de dados por enquanto, temos um reserva!* |
| <img src=".\images\tyra-typing.gif" alt="Mulher digitando na frente de um computador." width=25% align=left>**"Quero ver como o código foi feito, criar meu próprio banco de dados, explorar e alterar!"**<br />- Tenha instalados os programas [Node.js](https://nodejs.org/en/download/) e [MongoDB](https://www.mongodb.com/try/download/community), além de um editor de códigos; <br />- Escolha uma pasta na sua máquina e clone o projeto: `git clone https://github.com/marianavns/projeto-final-central-de-vereadores`<br />- Dentro da pasta do projeto, digite `npm install` no cmd;<br />- Renomeie o arquivo `.env.exemple` para `.env` e insira as variáveis de ambiente pedidas. |



## Tecnologias empregadas no projeto

### Para construção da API

- **Node.js**, versão 12.18.3;
- Gerenciador de pacotes node **npm**, versão 6.14.6;
- As dependências node:
  - **Express** versão 4.17.1;
  - **Mongoose** versão 5.10.17;
  - **Dotenv-safe** 8.2.0;

- Banco de dados NoSQL **MongoDB**;
- Editor de códigos VSCode.

### Para uso depois da construção

- **Postman**: para teste das funcionalidades (rotas) da API;

- **Heroku.com**: *deploy* da aplicação na web;
- **MongoDB Atlas**: hospedagem do banco de dados na nuvem.

## Funções da API definidas nas rotas

### Manipulando os registros de vereadores

| Descrição                                                  | Método | Rota                   |
| ---------------------------------------------------------- | ------ | ---------------------- |
| Adiciona um novo vereador                                  | POST   | /vereadores            |
| Visualiza todos os registros                               | GET    | /vereadores            |
| Visualiza os nomes e contas dos vereadores                 | GET    | /vereadores/contas     |
| Pesquisa o vereador pelo nome de campanha                  | GET    | /vereadores/?firstName |
| Adiciona ou atualiza atributos de um vereador              | PATCH  | /vereadores/:firstName |
| Exclui registro pelo número do documento no banco de dados | DELETE | /vereadores/:_id       |

### Manipulando os registros de ideias

| Descrição                                    | Método | Rota            |
| -------------------------------------------- | ------ | --------------- |
| Adicionar uma nova ideia                     | POST   | /ideias         |
| Visualizar todas as ideias apresentadas      | GET    | /ideias         |
| Visualiza as ideias e bairros de onde vieram | GET    | /ideias/bairros |
| Atualiza uma ideia pelo e-mail cadastrado    | PATCH  | /ideias         |

### Não relacionadas às funções de CRUD

| Descrição                | Método | Rota   |
| ------------------------ | ------ | ------ |
| Cria um token para login | GET    | /login |

## Proposta Completa do Projeto

Com o fim das eleições de 2020, conhecemos o grupo de vereadores que ocupará a Câmara Municipal das nossas cidades pelos próximos 4 anos. Mas a pergunta é: será que conhecemos mesmo?

Alguns destes representantes municipais são conhecidos apenas nos bairros que são sua base eleitoral, sendo quase anônimos para o resto da cidade. Com isso, temos dois problemas: **a falta de dados relevantes, centralizados e honestos sobre todos os eleitos** e, como consequência, **é mais difícil sugerir ideias para tornar melhor a vida das cidades**.

Tentando contribuir para a resolução destas questões, **esta API tem a proposta de centralizar e facilitar o acesso a informações sobre cada integrante do poder legislativo municipal**, como áreas de atuação de destaque, raça, gênero, salários, coligações, redes sociais, grau de instrução e gastos de campanha. Ela ainda **abre espaço para que os cidadãos possam sugerir ideias para a discussão pública**, aproximando-os dos eleitos. 

A cidade brasileira usada como exemplo para esta API é Jaboatão dos Guararapes.

<img src=".\images\jaboatao-photo.jpg" alt="Matéria do G1 sobre aumento de 26% do salario de vereadores da cidade de jaboatão em 25 de setembro de 2019" width=100%>

Jaboatão é uma cidade pernambucana vizinha à capital, Recife. Com mais de 700 mil habitantes, é a segunda mais populosa do estado. Mas, como boa parte das cidades no Brasil, Jaboatão, mesmo sendo tão grande, rica e diversa, tem uma cultura forte de eleger um quadro de vereadores não diverso. 

A exemplo **temos o pleito de 2020, que elegeu 27 vereadores, mas apenas uma mulher**. E, destes 27 vereadores, 23 compõem a coligação do prefeito reeleito. Para agravar a situação, como explicitado anteriormente, boa parte deles geralmente só se apresenta aos habitantes dos bairros que os elegeram.

**Infelizmente a cidade sofre muito com a falta de informação, seja dos recursos recebidos e gastos, seja de quem são seus vereadores.** Dados sobre eles, pessoais ou financeiros, são disponibilizadas nos sites de forma desfragmentada, incompleta e mascarada, o que dificulta o acesso dos principais interessados: o povo contribuinte. Mesmo tendo a palavra "integridade" no lema da cidade, não é a realidade vista na democratização dos dados.

Um dos poucos momentos que a população jaboatonense é informada sobre ações dos vereadores é em situações como esta:



<img src=".\images\materia-g1-aumento-salarios.png" alt="Matéria do G1 sobre aumento de 26% do salario de vereadores da cidade de jaboatão em 25 de setembro de 2019" width=80%>



Mudar este quadro e democratiza as informações permite que a população cobre mais de perto:

- maior transparência na prestação de contas;
- ações efetivas para a melhoria do saneamento básico, saúde e distribuição de renda, fatores quase que ignorados na cidade há anos;
- melhor fiscalização do prefeito e suas ações.

Dentre muitas outras funções, a tecnologia tem a capacidade de disponibilizar dados importantes ao uso do público, para que ele esteja informado, consciente e saiba como e **a quem cobrar** o cumprimento de deveres. 

Jaboatão já conhece, e muito bem, as mazelas que vive ano após ano. A intenção desta API é que a cidade conheça melhor alguns dos responsáveis diretos com o poder de fazer esta triste realidade finalmente mudar.



Instagram do projeto:

 <a href="https://instagram.com/vereadoresdejaboatao" target="blank">
    <img src=".\images\icon-instagram.png" alt="ícone do instagram" height="50" width="50" />
  </a>





