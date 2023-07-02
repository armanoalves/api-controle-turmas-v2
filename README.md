# 
 # <p align="center" > API Controle de Turmas </p> 

## Sobre o projeto

Projeto desenvolvido com base no curso de ORM com NodeJS: API com Sequelize e MySQL da Alura.

## Conhecimentos adquiridos

### Aula 01

- Atualizar a versão do Sequelize

- Adicionar a opção "Paranoid" para fazer a exclusão suave

- Criar migrações para adicionar colunas às tabelas

- Criar coluna `deletedAt` para utilizar o recurso de exclusão suave

- Restaurar registros deletados via exclusão suave, utilizando o `.restore()`

### Aula 02

- Definir um escopo de modelo padrão (defaultScope)

- Definir outros escopos adicionais, conforme necessidade do projeto

- Utilizar um escopo adicional com o método `.findAll()`

- Validar dados de entrada utilizando validadores próprios do Sequelize

- Refinar e customizar validações de campos utilizando funções e JS puro

### Aula 03

- O que são escopos de associação

- Como definir um novo escopo de associação

- Utilizar métodos próprios/mixins em tabelas associadas

- Adicionar um filtro de busca via parâmetros de query

- Utilizar operadores para fazer operações com dados

- Retornar resultados filtrados através de operadores

- Filtrar e enumerar registros com métodos "finders"

- Ordenar os resultados com a opção `order`

- Agrupar registros com `group`

- Passar comandos do SQL dentro do Sequelize com `Sequelize.literal()`

### Aula 04

- Criar métodos para atualizar mais de uma tabela

- Adicionar transações às operações de banco via Sequelize

- Interpretar avisos de versionamento e fazer correções

## Como executar

1. Clonar o repositório

  ```
  https://github.com/armanoalves/api-controle-turmas
  ```

2. Localizar e acessar a pasta "api-controle-turmas"

  ```
  cd api-controle-turmas
  ```
3. Instalar as dependências do projeto

  ```
  npm i
  ```
4. Rodar o projeto

  ```
  npm run start
  ```

## Tecnologias

  * **Linguagem:** 
  - [x] JavaScript
 
  * **Bibliotecas:**
  - [x] body-parser
  - [x] express
  - [x] mysql2
  - [x] sequelize
  - [x] sequelize-cli

## Feito por: 

| [<img src="https://avatars.githubusercontent.com/armanoalves" width=115><br><sub>Armano Barros Alves</sub>](https://github.com/armanoalves) |
| :---: |

