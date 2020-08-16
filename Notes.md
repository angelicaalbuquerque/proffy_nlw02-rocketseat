# Anotações

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

## Estrutura que vem no projeto React

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

### Imagens no React:

Temos sempre que importá-las e nomeá-las com uma variável. Para passar no código HTML, no src, devemos passar entre {}.

```Javascript
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

---

## Comandos e Instalações

Criando o projeto web react:

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

---

## Executando o projeto

#### Web

```
yarn start
```

ou

```
npm start
```

_roda na http://localhost:3000/_
