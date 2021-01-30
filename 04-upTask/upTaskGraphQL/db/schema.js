const { gql } = require('apollo-server');

const typeDefs = gql`

  type Curso {
    titulo: String
    tecnologia: String
  }

  type Tecnologia {
    tecnologia: String
  }

  type Query {
    obtenerCursos: [Curso]
    obtenerTecnologia: [Tecnologia]
  }

  type Mutation {
    crearUsuario: String
  }

`;

module.exports = typeDefs;