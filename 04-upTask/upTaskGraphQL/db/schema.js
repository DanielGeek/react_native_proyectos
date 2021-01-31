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

  type Tarea {
    nombre: String
    id: ID
    proyecto: String
    estado: Boolean
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

  input TareaInput {
    nombre: String!
    proyecto: String!
  }

  type Mutation {

    # Proyectos
    crearUsuario(input: UsuarioInput): String
    autenticarUsuario(input: AutenticarInput): Token
    nuevoProyecto(input: ProyectoInput): Proyecto
    actualizarProyecto(id: ID!, input: ProyectoInput): Proyecto
    eliminarProyecto(id: ID!): String

    # Tareas
    nuevaTarea(input: TareaInput): Tarea
  }

`;

module.exports = typeDefs;