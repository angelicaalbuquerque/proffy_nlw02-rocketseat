# Anotações

## Gerais

#### React:

Biblioteca específica para construção de interface, a parte visual da aplicação, envolvendo, principalmente, CSS, HTML e JS.

#### SPAs:

Single Page Application é uma aplicação que não precisa ser recarregada do zero toda vez que o usuário muda de tela. Única coisa que muda são os elementos que precisam, de fato mudar. Mas header, sidebar, footer, por exemplo, não são recarregados. Uma vantagem é que com isso se tem mais controle do projeto. Ou seja, assim, mantem-se boa parte da aplicação, trocando apenas o conteúdo que precisa ser mudado de uma tela pra outra.

#### ReactJS:

Biblioteca de construção de interface que visa a construção de Single Page Application para melhorar a experiência do usuário final. Também melhora a experiência do desenvolvedor por permitir que o mesmo tenha uma flexibilidade maior com essa ferramenta.

#### Dependência "React":

É a parte principal do framework/da biblioteca do react, é a parte que tem a lógica do react por trás dos panos, como vai montar a interface. É usado em todos os ambientes (TV, web, VR, mobile...) e em cada um desses sistemas temos uma biblioteca adicional, que vai fazer a comunicação da forma de construir interface com a biblioteca core, ou seja, a que tem a principal funcionalidade, o react.
Na Web, por exemplo, tem a biblioteca React DOM, que faz o React entender que a forma como ele tem que criar interfaces é com HTML, com a DOM. No mobile, é a React Native, que fala pro react que a forma como ele deve criar é com a interface nativa do dispositivo (Android, iOS...). Sempre há esse conjunto.

#### Typescript:

Forma de adicionar tipagem ao código Javascript, auxiliando a produtividade, aumentando a experiência de desenvolvimento.

## Estrutura do projeto React

#### .gitignore:

Arquivos e pastas que queremos ignorar, que não queremos que subam para o github. Por exemplo, a pasta de dependências do projeto, a node_modules.

#### Package.json:

Onde estão as principais informações sobre o projeto (se ele é privado, qual é sua versão, o nome, as dependências instaladas, scripts, configurações e mais).

#### react-scripts:

Dentro do Package.json, o react-scripts compila as configurações que fazem o react ser executado no browser. Porque o react utiliza uma sintaxe que ainda não é entendida por todos os browsers, então, esse react-scripts é um pacote que tem um conjunto de configurações que faz a conversão do código para uma maneira que o browser consiga entender (javascript puro), antes do código ser executado. Dentro desse pacote temos, principalmente, o Babel (responsável pela conversão do JS moderno para um mais universal) e o Webpack (faz a automatização desse processo e nos permite importar outros tipos de arquivos por dentro do JS).

#### tsconfig.json:

São as configurações do Typescript. Já vem pronto e, na maioria dos casos, não vamos mexer.

#### yarn.lock:

Arquivo que armazena/anota a versão de cada uma das dependências que são instaladas no projeto.

#### node_modules:

Pasta onde estão os códigos das dependências que foram instaladas. Cada dependência tem suas próprias dependências, por isso essa pasta é tão pesada e grande.

#### src / public / id = "root" / index.html / index.tsx / App:

_src_ e _public_ são pastas primordiais do projeto.

A _public_ vai ter o index.html e, no máximo, o favicon. Esse index.html é o arquivo principal, quando a gente abre a aplicação, que é mostrado.

Sua estrutura é exatamente a que é mostrada no Elements (F12), mas a única coisa que não consigo ver dentro do arquivo index.html é o que está na _div id = "root"_.

O React vai sempre rodar no lado do cliente/no lado do navegador a partir do Javascript; a interface é montada em tempo de executação.

Num primeiro momento, o HTML só possui essa _div id = "root"_, mas se eu acessar na pasta src o arquivo index.tsx, que é o arquivo principal/o primeiro arquivo que o React carrega, eu vejo que importo o React DOM (que permite o React trabalhar com a árvore de elementos HTML) e utilizo o método render que, basicamente, diz "vá no documento HTML e procure por elemento com um id root. Dentro desse elemento, quero que jogue esse código, que tem o '< App />', por padrão".

Se eu acessar esse App (componente), que é importado nesse index.tsx, vejo que dentro dele tenho uma div com className = App, que possui a mensagem "Hello, World!" que escrevi na tela.

Esse código que está dentro do ReactDOM.render, injeta uma estrutura dentro de um elemento no HTML. E essa estrutura eu consigo manipular a partir do JS.

#### Componente:

Função que retorna HTML (o que eu quiser de um HTML).

No React, tudo é componente, tudo de parte visual. Criamos componentes para reaproveitar código em várias telas. Esses códigos são encapsulados em componentes, mantendo o código mais simples.

Nome do componente começa SEMPRE com letra maiúscula, pois as minúsculas são as tags HTML.

Toda vez que formos trabalhar com HTML, precisamos, obrigatoriamente, importar o react dentro do código, mesmo que ele não esteja sendo utilizado.

Resumo: Componente é uma função com a primeira letra maiúscula que retorna um HTML.

#### {}:

Utilizado para quando quisermos incluir JavaScript dentro da estrutura HTML.

#### JSX:

Quando trabalhamos com a sintaxe de HTML dentro do JavaScript, chama-se JSX, que é JavaScript + XML. XML é a sintaxe do XML. Em resumo, JSX é o HTML dentro do JavaScript.

#### TSX:

Typescript com XML.

#### Imagens no React:

Temos sempre que importá-las e nomeá-las com uma variável. Para passar no código HTML, no src, devemos passar entre {}.

```TS
import React from "react";

import logoImg from "../../assets/images/logo.svg";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="logotipo Proffy" />
        </div>
      </div>
    </div>
  );
}

export default Landing;

```

#### class x classname:

Class é uma palavra reservada do JavaScript, ela serve para definirmos uma classe.

Por isso, no React, sempre que formos utilizar classes no HTML temos que utilizar className.

#### sempre colocar "./" quando for arquivo criado por mim:

Caso contrário, o React vai entender que é algum pacote instalado, como o próprio React.

Sempre que for um arquivo criado por mim, que está na minha estrutura e não no node_modules, passo o caminho relativo.

#### Propriedade:

Atributos que passamos para uma tag. Por exemplo, no HTML, o button tem um type. No React, é exatamente isso, quando passamos um atributo para o componente e não para um elemento HTML.

É uma forma de eu conseguir passar informações para o componente. Por exemplo, um Header com dois títulos diferentes:

```TS
function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que você quer dar aulas." />
    </div>
  );
}
```

```TS
function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis." />
    </div>
  );
}
```

Importanto que, nesse caso, precisamos adicionar tipagem para essas propriedades, por exemplo, é um texto e é obrigatória.

Para isso, transformamos a função PageHeader em uma constante:

```TS
const PageHeader = () => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Volta" />
        </Link>
        <img src={logoImg} alt="Proffy logo" />
      </div>

      <div className="header-content">
        <strong> Estes são os proffys disponíveis.</strong>
      </div>
    </header>
  );
};
```

Para falar que o PageHeader pode receber uma propriedade chamada title, que vai ser uma string obrigatória, é utilizado o conceito de _interface_.

```TS
interface PageHeaderProps {
  title: string;
}
```

E para que esse conceito seja aplicado e o componente saiba que tem que usar a propriedade title, é necessário que o componente seja definido com o tipo React.FunctionComponent ou React.FC, que recebe um _**parâmetro (chamado de generic)**_, ou seja, a nossa interface:

```TS
import React from "react";

import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy logo" />
      </div>

      <div className="header-content">
        <strong>Estes são os proffys disponíveis.</strong>
      </div>
    </header>
  );
};

export default PageHeader;
```

_Tenho um componente, PageHeader, ele é um FunctionComponent, do React, e as propriedades que ele tem/pode receber são PageHeaderProps._

##### Interface:

Conceito utilizado para definir um formato das tipagens de um objeto.

##### React.FunctionComponent ou React.FC.:

Componente escrito em forma de função. Esse componente recebe um **parâmetro (generic)**.

##### props:

Para recuperar os títulos presentes nas páginas TeacherForm e TeacherList, substituindo, assim, o que está fixado na div className="header-content", faço com que todas as propriedades sejam recebidas como parâmetro.

```TS
import React from "react";

import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy logo" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
      </div>
    </header>
  );
};

export default PageHeader;
```

##### props.children:

Propriedade automática do React que é qual conteúdo que escrevi dentro do componente.

#### Estado:

Em breve.

## Conceitos do Backend

#### MVC x API Rest:

MVC é uma maneira tradicional de construção de backend que retorna o HTML junto do backend, feito muito no PHP, por exemplo. Mas utilizando React, não faz mais sentido utilizar dessa forma.

#### Como funciona o backend:

Existem no mínimo duas sessões na aplicação: Front-end e Back-end. O Front é tudo aquilo que o usuário interage -- um clique no botão, o HTML, o CSS. E tudo que não enxergamos é feito no Back-end.

Imagina que você vai a um restaurante. Você vai lidar com o front-end: as mesas, os garçons e pede um prato. O garçom leve seu pedido à cozinha, a cozinha começa a processar o seu pedido e assim que tiver finalizado, ele retorna ao front-end: o garçom e a sua mesa.

E asim que funciona. O Front-end vai enviar uma mensagem através do protocolo HTTP e nesse protocolo, dentro dessa mensagem, terão algumas informações.

No geral, a mensagem é formada por cabeçalho e corpo:

- Cabeçalho: informações para definir o tipo da mensagem, se é para criar, deletar, editar, buscar... São os metadados da mensagem;
- Corpo é real conteúdo da requisição/mensagem. Imagine que estamos fazendo uma requisição de envio de formulário, como o cadastro de um novo ususário. Dentro do corpo, vão todos os seus dados, como Nome, E-mail, Senha, Avatar.

O Back-end recebe essa mensagem e pode fazer algumas operações, como salvar o usuário no banco de dados, enviar um e-mail ao usuário recém cadastrado, criptografar a senha do usuário...

Isso tudo acontece no back-end porque, por exemplo, pra salvar o usuário no banco de dados, eu preciso das credenciais do banco de dados, estas não ficam no front-end, pois é a parte visual, é o que aparece pro usuário. Se eu colocar as credencias no front-end, o usuário teria acesse a ela. Em resumo, são tarefas que o usuário não pode ter acesso, pois são sigilosas.

Depois do Back-end finalizar o que tem que fazer, ele devolve uma resposta, também via HTTP, com cabeçalho e corpo. "Antigamente", o back-end retornava o HTML completo da página da lista de usuários.

O problema disso, de retornar HTML, é que torna as respostas muito pesadas, por não trazeram apenas os dados e sim TODO o conteúdo que precisa ser apresentado na tela. E quando retornarmos o HTML do Back-end é o browser, mas se criarmos um aplicativo móvel, eles não entenderão o HTML, seja ele feito em Kotlin, Swift, React Native, Flutter.

Como o aplicativo móvel não entende o HTML, ele também fará uma requisição ao Back-end, também via HTTP, com cabeçalho e corpo. O Back-end também vai retornar a estrutura HTML e, para converter para uma interface nativa, seria muito trabalhoso.

E aí entramos nas particularidades da API Rest.

#### Particularidades da API Rest:

Uma API Rest, em vez de retornar o HTML completo da lista de usuários, vai retornar apenas os dados dessa lista de usuários.

É utilizada uma estrutura JSON (JavaScript Object Notation) em vez de HTML. Ele é um objeto escrito da mesma forma que a gente escreve no JS, então, quando requisitarmos ao Backend, vamos retornar apenas os dados do usuário, que são retornados no formato de JSON.

O JSON é uma estrutura que todas as linguagens/tecnologias conseguem entender e essas próprias tecnologias vão fazer a construção da parte visual (HTML).

#### Por que utilizar Node.js?

Conseguimos ter o mesmo JavaScript que utilizamos no front-end e no mobile dentro do Back-end, além de ser uma tecnologia bastante utilizada por diversas empresas, sendo extremamente performáticas.

A plataforma Node tem como uma das suas principais particularidades o **_non-blocking IO_**: o que acontece em linguagens como Ruby e PHP é que quando a gente executa uma ação, por mais que ela leve um tempo para ser executada, a próxima linha nunca executa antes da linha anterior ser finalizada. Dentro do Node temos um controle de assincronismo, conseguimos, por exemplo, enviar um e-mail e enquanto ele é enviado, conseguimos fazer outras operações no back-end sem problema algum, ou seja, consigo salvar um usuário no banco de dados, enviar um e-mail e criptogramar a senha do usuário ao mesmo tempo, sem precisar esperar uma ação finalizar para iniciar a próxima.

Outros pontos legais a se destacar do Node são as streams (permitem consumir dados de uma forma aos poucos, ler um arquivo de texto linha por linha e já começar a trabalhar com ele sem precisar a ler por completo) e worker threads (permitem trabalhar com todos os cors da CPU do processador para fazer ações diferentes dentro de um servidor Node).

Em resumo, com o Node conseguimos trabalhar com JavaScript e fazer diversas coisas ao mesmo tempo, com o intuito de ganhar mais performance no nosso back-end.

#### **falamos sobre tudo o que precisávamos antes de começar a desenvolver a API**.

## Identificação de casos de uso

Antes de iniciar o desenvolvimento, é importante identificar quais são as funcionalidades que vou precisar.

Geralmente, o layout é a forma mais clara de enxergar as funcionalidades do app.

## Criação da configuração com o banco

Utilizamos o SQL, um banco relacional. Usamos o SQLite, pois não precisamos instalar nada na nossa máquina.

```TS
import knex from "knex";
import path from "path";

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },

  useNullAsDefault: true,
});

export default db;
```

#### database:

Onde manteremos toda a configuração da conexão com o banco de dados e outros arquivos. Onde também ficará o banco de dados.

##### path:

Para lidar com caminhos dentro do Node. É um módulo para conseguirmos direcionar um caminho, mostrar onde deve ficar um arquivo.

##### dirname:

Se referencia o diretório onde está o arquivo em que executo o dirname, no caso, o database.

##### useNullAsDefault: true:

Passamos porque o SQLite, por padrão, não sabe o que tem que jogar no valor padrão nos campos que não forem preenchidos.

#### migrations:

Controlam a versão do banco de dados, como se fosse um git. Dentro delas, descrevemos exatamente o que queremos fazer dentro do banco (criar uma tabela nova, inserir, alterar e deletar campos etc).

Quando uma outra pessoa pegar nosso código, a pessoa só precisa executar as migrations dentro do Knex, que automaticamente será identificado o que foi executado e o que não foi e, então, vai fazer as alterações no banco.

#### knexfile.ts:

Dentro da raiz do projeto, devemos criar o arquivo knexfile.ts (abaixo) e, dentro de database, a pasta migrations:

```JS
import path from "path";

module.exports = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  useNullAsDefault: true,
};
```

Como por padrão o Knex executa JavaScript e não TypeScript, no package.json vou sobreescrever o comando/método do Knex migrate:latest.

#### Criação de tabelas:

Dentro de database > migrations, crio a tabela de usuários (00_create_users.ts):

- up: quais alterações queremos realizar no banco de dados. Onde faço alterações.
- down: se algo deu errado, o que faço para voltar. Onde desfaço alterações.

```TS
import Knex from "knex";

//crio a tabela users
export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}

//deleto a tabela users
export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
```

---

## Comandos e Instalações

### **1) Criando o projeto web react:**

```
yarn create react-app web --template typescript
```

ou

```
npx create-react-app web --template typescript
```

#### React router dom:

Módulo mais utilizado na Web para criar navegação. Com ele, conseguimos controlar qual página/qual componente está ativo, baseado no endereço que o usuário está acessando.

```
yarn add react-router-dom
```

Quando a importação do react-router-dom durante a criação do arquivo routes.tsx nao for reconhecida, significa que, se estou usando TypeScript, alguns módulos não são feitos nativamente em TypeScript, sem incluir suas definições de tipos para entender o que tem dentro desse pacote.

Solução:

```
yarn add @types/react-router-dom -D
```

_Quando for um pacote de types/tipagem, ele pode ser instalado apenas como dependência de desenvolvimento._

##### Roteamento

Importamos no componente routes.tsx BrowserRouter (tipo de roteamento) e Route (significa cada uma das rotas dentro da aplicação, cada página será um route, que será envolvido pelo BrowserRouter).

O Route recebe duas propriedades obrigatórias: o path (endereço que o user precisa acessar a tela através do browser) e o component.

Quando queremos utilizar "/" para representar a rota raiz, é importante ustilizar também "exact", se não, ao acessar uma rota como "/study", vai mostrar a rota raiz ("/") + a rota study, já que o React Router Dom não faz a verificação de igualdade, ou seja, se o caminho acessado é igual ao do path, ele verifica o conteúdo: se o caminho contém o que eu coloquei no path, é o que será mostrado.

##### Link to

Para manter o conceito de SPA, ou seja, sem ter que recarregar tudo ao acessar uma href, importo do React Router Dom o Link e mudo a tag '< a >', utilizando _Link to_:

```TS
<Link to="/study" className="study">
  <img src={studyIcon} alt="Estudar" />
   Estudar
</Link>
```

### **2) Criando o server Node JS:**

Depois de criar a pasta server e rodar o comando yarn init -y (que adiciona uma dependência ao package.json), criamos a pasta src (onde fica todo o código da aplicação), com o server.ts.

#### Server.ts:

Primeiro arquivo aberto quando precisar executar o servidor. Tudo vai partir dele, então é o principal arquivo da aplicação, que vai começar a definir todas as rotas da aplicação.

#### Instalar o TypeScript com dependência de desenvolvimento:

```
yarn add typescript -D
```

ou

```
npm install typescript -D
```

Feito isso, é preciso criar o arquivo de configurações do TS, **tsconfig.json**, gerado de forma automática:

```
yarn tsc --init
```

ou

```
npx tsc --init
```

Nesse arquivo, mudamos o "target" para "es2017", pois acima dessa versão o Node ainda não entende.

#### Instalar a lib ts-node-dev:

Tal dependência executa o servidor e fica observando, caso tenha alguma alteração no script. Se tiver, ele restarta o servidor.

Porque por padrão, quando executamos o Node, ele lê todo o servidor e fica executando. E se a gente fizer alguma alteração, a gente teria que parar o Node e executar de novo.

```
yarn add ts-node-dev -D
```

#### Scripts no package.json:

Script para realizar o start da aplicação. _tsnd é abreviação de ts-node-dev._

```
  "scripts": {
    "start": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  },
```

Com isso, ao executar "yarn start", o console já mostra o console.log("Hello, World)" que foi exrito no server.ts.

##### Flags:

--transpile-only: converter o código de TS para JS, acelerando o processo de execução da aplicação.

--ignore-watch node_modules: para que o ts-node-dev não tente fazer conversão de código na node_modules.

--respawn: toda vez que tivermos uma alteração no código, a aplicação restarta de forma automática. Só para de executar caso eu aperte control + C.

#### Instalar o Express:

Microframework que traz algumas funcionalidades prontas para conseguir dar um start na aplicação de uma forma mais rápida.

```
yarn add express
```

Ele é preciso ser importado para dentro do server.ts. Quando alguns pacotes não são feitos com typescript, como o express, é necessário rodar @types/nomedadependencia para parar de dar erro na importação. Neste caso:

```
yarn add @types/express -D
```

ou

```
npm install @types/express -D
```

O express não entende JSON, então, depois de declarar a constante, é necessário escrever:

```
app.use(express.json());
```

#### Conceitos de rotas

##### Criação de rotas:

```TS
import express from "express";

const app = express();

app.use(express.json());

app.get("/users", (request, response) => {
  const users = [
    {
      name: "Diego",
      age: 25,
    },
    {
      name: "Emidio",
      age: 22,
    },
  ];

  return response.json(users);
});

//localhost:3333

app.listen(3333);
```

##### Rotas:

Dentro de cada rota, temos uma nomenclatura para cada coisa que é utilizada.

Quando falamos de rota, cada rota é um endereço da aplicação. Se eu tenho uma rota que lista usuários, por exemplo, vou acessar _http://localhost:3333/users_; se é uma rota que lista contatos, _http://localhost:3333/contacts_ e assim por diante. Cada endereço desse é uma rota.

##### Recursos:

O que vem depois do endereço principal, ou seja, da URL base (no caso, _http://localhost:3333/_). Nos exemplos, os recursos que estamos acessando são _users_ e _contacts_.

##### Métodos HTTP:

Dentro da API de um backend, temos vários métodos que podemos utilizar. Os mais utilizados são:

- **GET** (buscar/listar informação);
- **POST** (cria nova informação);
- **PUT** (atualizar uma informação existente);
- **DELETE** (deletar informação existente).

O navegador sempre que acessa um endereço faz a requisição sempre utilizando o método GET. Para utilizar os outros métodos e testar a aplicação, usamos o Insomnia, por exemplo.

Importante lembrar que podemos ter a mesma rota e o mesmo recurso, porém para métodos diferentes.

##### Parâmetros:

Quando fazemos uma requisição pra dentro do nosso backend / da nossa API, existem três tipos de parâmetros:

- **Corpo (Request Body)**: Dados para criação ou atualização de um registro. Quando vamos criar um usuário e atualizar uma informação, os dados dessa informação que queremos criar e atualizar virão no corpo da requisição.

  Request.body é o que uso para visualizar essa criação/atualização;

- **Route Params**: Serve para identificar qual recurso quero atualizar ou deletar na rota. Quando vou atualizar ou deletar uma informação, é uma informação específica, um único usuário que quero atualizar/deletar.

  O route params vem junto com a rota. Por exemplo, se eu quero deletar um usuário, seria: app.delete('/users/:id') --- os ":" servem para identificar que id é um parâmetro e não um pedaço da rota. Desse jeito, toda vez que eu chamar a rota users com o método delete ela precisa vir com um sufixo precedida com um id. Pra recuperar isso, utilizo request.params;

- **Query Params**: Utilizado principalmente em paginação, filtros, ordenação, listagem... parâmetros não tão obrigatórios.

  Por exemplo, estou listando todos os usuários, mas quero listar os usuários da página 2 e quero ordernar por nome. Esses parâmetros são enviados junto com a rota: http://localhost:3333/users?page=2&sort=name.

  Tais parâmetros são acessados via request.query.

### **3) Configuração do banco de dados:**

Instalação do Knex (query builder, permite que escrevamos as queries pro SQL em JavaScript) e SqLite3 (driver para que o Node consiga se conectar com o quando SQLite):

```
yarn add knex sqlite3
```

Como por padrão o Knex executa JavaScript e não TypeScript, no package.json vou sobreescrever o comando/método do Knex migrate:latest.

```
 "scripts": {
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
    "knex:migrate:roolback": "knex --knexfile knexfile.ts migrate:roolback"
  },
```

---

## Executando o projeto

### Web

```
yarn start
```

ou

```
npm start
```

_roda na http://localhost:3000_

### Server

```
yarn start
```

ou

```
npm run start
```

_roda na http://localhost:3333_

Migrations:

```
knex:migrate
```
