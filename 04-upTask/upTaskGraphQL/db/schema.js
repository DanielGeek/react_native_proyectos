const { gql } = require('apollo-server');

/* -------------------------------------------------------------------------- */
/*                          tipos de datos a retornar                         */
/* -------------------------------------------------------------------------- */
const typeDefs = gql`
  type Token {
    token: String
  }

  type Proyecto {
    nombre: String
    id: ID
  }

  type Query {
    obtenerProyectos: [Proyecto]
  }

  input UsuarioInput {
    nombre: String!
    email: String!
    password: String!
  }

  input AutenticarInput {
    email: String!
    password: String!
  }

  input ProyectoInput {
    nombre: String!
  }

  type Mutation {
    crearUsuario(input: UsuarioInput): String
    autenticarUsuario(input: AutenticarInput): Token
    nuevoProyecto(input: ProyectoInput): Proyecto
    actualizarProyecto(id: ID!, input: ProyectoInput): Proyecto
  }

`;

module.exports = typeDefs;