const { gql } = require('apollo-server');

/* -------------------------------------------------------------------------- */
/*                          tipos de datos a retornar                         */
/* -------------------------------------------------------------------------- */
const typeDefs = gql`
  # datos a retornar
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

  # obtener datos
  type Query {
    obtenerProyectos: [Proyecto]
    # obtener tareas por id de proyecto
    obtenerTareas(input: ProyectoIDInput): [Tarea]
  }

  # id del proyecto
  input ProyectoIDInput {
    proyecto: String!
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
  # metodos para CUD
  type Mutation {

    # Proyectos
    crearUsuario(input: UsuarioInput): String
    autenticarUsuario(input: AutenticarInput): Token
    nuevoProyecto(input: ProyectoInput): Proyecto
    actualizarProyecto(id: ID!, input: ProyectoInput): Proyecto
    eliminarProyecto(id: ID!): String

    # Tareas
    nuevaTarea(input: TareaInput): Tarea
    actualizarTarea(id: ID!, input: TareaInput, estado: Boolean ): Tarea
  }

`;

module.exports = typeDefs;