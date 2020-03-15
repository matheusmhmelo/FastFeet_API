<h1 align="center">
  FastFeet API
</h1>

<p>🇧🇷API para software de controle de entregas em uma transportadora. Feito em Node.JS utilizando Express e Sequelize, com tecnologias como autenticação JWT, Redis e PostgreSQL</p>

<p>🇺🇸 API for software of deliveries control for a shipping company. Done in Node.JS using Express and Sequelize, with tecnologies like JWT authentication, Redis and PostgreSQL</p>

<h1>🇧🇷 Sobre a API</h1>

## Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd FastFeet_API`;
3. Rode `yarn` para instalar as dependências;
4. Crie um banco de dados no `postgres` com o nome de `fastfeet`;
7. Instancie uma base de dados `redis` (será usado para fila de e-mails);
8. Renomeie o arquivo `.env.example` para `.env`;
9. Coloque as suas credenciais dentro do `.env`;
10. Rode `yarn sequelize db:migrate` para executar as migrations;
11. Rode `yarn sequelize db:seed:all` para adicionar o administrador no banco de dados:  `e-mail: 'admin@fastfeet.com' | senha: '123456'`
12. Rode `yarn dev` para iniciar o servidor.
13. Rode `yarn queue` para iniciar o servidor de filas.

## Funcionalidades

### Administrador
- Criação de contas
- Edição de contas
- Login no Software
- Cadastro de entregadores
- Upload de imagem (avatar do entregador)
- Cadastro de destinatários
- Cadastro de Entregas
- Cancelamento de Entregas

### Entregador
- Listagem de Entregas pendentes
- Inicio da Entrega
- Listagem de Entregas finalizadas
- Finalização da Entrega
- Listagem dos Problemas na entrega
- Criação de novo Problema na entrega

## Rotas

<a href="https://documenter.getpostman.com/view/7792112/SzS2wTao?version=latest" target="_blank">Documentação Postman<a/>

<h1>🇺🇸 About the API</h1>

## Install and Execute

1. Clone this repository;
2. Run the command `cd FastFeet_API`;
3. Run the command `yarn` to install dependencies;
4. Create a database in `postgres` with the name `fastfeet`;
7. Start a `redis` database (used to e-mail's queue);
8. Rename the file `.env.example` to `.env`;
9. Update `.env` with your credentials;
10. Run the command `yarn sequelize db:migrate` to execute the migrations;
10. Run the comman `yarn sequelize db:seed:all` to add the Administrator in database:  `e-mail: 'admin@fastfeet.com' | password: '123456'`
11. Run the comman `yarn dev` to start the server.
12. Run the comman `yarn queue` to start the queues server.

## Features

### Administrator
- Create accounts
- Update accounts
- Login on Software
- Register deliverymen
- Upload image (deliveryman's avatar)
- Register recipients
- Register deliveries
- Cancel deliveries

### Deliveryman
- List all deliveries pending
- Start the delivery
- List all finished deliveries
- Finish delivery
- List all problems with the delivery
- Creat a new problem for the delivery

## Routes

<a href="https://documenter.getpostman.com/view/7792112/SzS2wTao?version=latest" target="_blank">Postman Documentation<a/>
