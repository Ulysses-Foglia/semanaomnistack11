const express = require('express'); //recebe funcionalidades do Express
const cors = require('cors');
const routes = require('./routes') // o ./ é utilizado para diferenciar um arquivo de uma notação de pasta. O ../ é utilizado para referenciar a pasta anterior

const app = express(); //criando a aplicação

app.use(cors()); //módulo de segurança - Determina quem vai poder acessar a aplicação

app.use(express.json()); //indica a utilização do formato Json para o corpo das requisições **Não rodou --> De .jon para .json() corrigiu
app.use(routes); 

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar umas informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no  back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) --> http://localhost:3333/users?name=Ulysses&idade=28
   * Route Params: Parâmetros utilizados para identificar recursos --> app.get('/users/:id') --> http://local.../users/1 (traz informações apenas do usuário 1)
   * Rquest Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT*FROM users
     * Query Builder: tanle('users').select('*').where()
     */

app.listen (3333);