const { gql } = require('apollo-server');

/* -------------------------------------------------------------------------- */
/*                          tipos de datos a retornar                         */
/* -------------------------------------------------------------------------- */
const typeDefs = gql`

type Curso {
    titulo: String
    tecnologia: String
  }

  type Tecnologia {
    tecnologia: String
  }

  type Token {
    token: String
  }

  type Proyecto {
    nombre: String
    id: ID
  }

  type Query {
    obtenerCursos: [Curso]
    obtenerTecnologia: [Tecnologia]
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
  }

`;

module.exports = typeDefs;