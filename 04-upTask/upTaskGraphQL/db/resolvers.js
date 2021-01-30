const Usuario = require('../models/Usuario');

const resolvers = {
  Query: {

  },
  Mutation: {
    crearUsuario: async (_, { input }) => {
      const { email, password } = input;

      const existeUsuario = await Usuario.findOne({ email });

      // si el usuario existe
      if (existeUsuario) {
        throw new Error('El usuario ya esta registrado')
      }

      try {
        const nuevoUsuario = new Usuario(input)
        console.log(nuevoUsuario)

        nuevoUsuario.save();
        return "Usuario creado correctamente";
      } catch (error) {
        console.log(error)
      }
    }
  }
}

module.exports = resolvers;