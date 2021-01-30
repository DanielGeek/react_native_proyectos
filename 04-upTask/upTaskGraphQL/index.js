const { ApolloServer } = require('apollo-server');

const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db');

// Conectar a la BD
conectarDB();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server listo en la URL ${url}`);
})