const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');

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

        // Hashear password
        const salt = await bcryptjs.genSalt(10);
        input.password = await bcryptjs.hash(password, salt);

        // Registrar nuevo usuario
        const nuevoUsuario = new Usuario(input)
        // console.log(nuevoUsuario)

        nuevoUsuario.save();
        return "Usuario creado correctamente";
      } catch (error) {
        console.log(error)
      }
    },
    autenticarUsuario: async (_, { input }) => {
      const { email, password } = input;

      // Si el usuario existe
      const existeUsuario = await Usuario.findOne({ email });

      // si el usuario existe
      if (!existeUsuario) {
        throw new Error('El usuario no existe');
      }

      // Si el password es correcto
      const passwordCorreco = await bcryptjs.compare(password, existeUsuario.password);

      if (!passwordCorreco) {
        throw new Error('Password Incorrecto');
      }

      // Dar acceso a la app
      return 'Has iniciado sesión';

    }
  }
}

module.exports = resolvers;