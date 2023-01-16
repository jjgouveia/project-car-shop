# Projeto - Car Shop

## 🔨 Desenvolvimento

A proposta deste projeto era a de aplicar os princípios de P.O.O para a construção de uma API com C.R.U.D para gerenciar uma concessionária de veículos utilizando o banco de dados MongoDB através do Mongoose.


## 🎯 O que foi avaliado?

## As capacidades de:

    📌 Exercitar o conhecimento dos pilares da Programação Orientada a Objetos: Herança, Abstração, Encapsulamento e Polimorfismo;
    📌 Exercitar a utilização de Composição;
    📌 Exercitar a criação e utilização de Interfaces;
    📌 Implementar, em TypeScript: Classes, Instâncias, Atributos, Métodos e Objetos;
    📌 Aplicar os conhecimentos de MongoDB, Typescript e POO para criar uma API com CRUD.


## 💻 Tecnologias e Metodologias utilizadas:

    * T.D.D;
    * P.O.O;
    * S.O.L.I.D;
    * TypeScript/JavaScript;
    * NodeJS;
    * Express;
    * Sinon e Chai para implementação dos testes;

## 📦 Instalação da aplicação:

<details>

 <summary><strong> 🐋 Com Docker:</strong></summary>
   <br />

  **⚠ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

  > :information_source: Use o comando `docker exec -it car_shop bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install` 
  
  - **⚠ Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
  - **⚠ Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.
  - **⚠ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.


  <br />

  </details>
  
<details>
  <summary><strong> 💾 Sem Docker: </strong></summary>

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  **⚠ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - ✨ **Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br>
</details>