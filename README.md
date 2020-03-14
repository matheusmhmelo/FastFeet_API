<h1 align="center">
  FastFeet API
</h1>

<p>Software de controle de entregas para transportadora. API criada em Node.JS utilizando Express e Sequelize, com tecnologias como autenticação JWT, Redis e PostgreSQL</p>

## Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd GoStack_FastFeet`;
3. Rode `yarn` para instalar as dependências;
4. Crie um banco de dados no `postgres` com o nome de `fastfeet`;
7. Instancie uma base de dados `redis` (será usado para fila de e-mails);
8. Renomeie o arquivo `.env.example` para `.env`;
9. Coloque as suas credenciais dentro do `.env`;
10. Rode `yarn sequelize db:migrate` para executar as migrations;
11. Rode `yarn dev` para iniciar o servidor.
12. Rode `yarn queue` para iniciar o servidor de filas.

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
