const { ApolloServer, gql } = require('apollo-server');

const server = new ApolloServer();

server.listen().then(({ url }) => {
  console.log(`Server listo en la URL ${url}`);
})