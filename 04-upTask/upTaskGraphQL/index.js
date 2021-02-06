const { ApolloServer } = require('apollo-server');
const jwt = require('jsonwebtoken');
require('dotenv').config('variables.env');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db');

// Conectar a la BD
conectarDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  /* -------------------------------------------------------------------------- */
  /*                         obtener token de los header                        */
  /* -------------------------------------------------------------------------- */
  context: ({ req }) => {
    // console.log(req.headers['authorization'] || '');
    const token = req.headers['authorization'] || '';
    if (token) {
      try {
        /* -------------------------------------------------------------------------- */
        /*      si el token es correcto obtengo los datos del usuario autenticado     */
        /* -------------------------------------------------------------------------- */
        const usuario = jwt.verify(token.replace('Bearer ', ''), process.env.SECRETA);
        console.log(usuario);
        return {
          usuario
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listo en la URL ${url}`);
})