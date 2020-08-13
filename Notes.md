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

#### Propriedade:

#### Estado:

---

## Comandos

Criando o projeto web react:

```
yarn create react-app web --template typescript
```

ou

```
npx create-react-app web --template typescript
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
