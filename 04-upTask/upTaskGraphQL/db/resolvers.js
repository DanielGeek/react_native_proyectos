const Usuario = require('../models/Usuario');
const Proyecto = require('../models/Proyecto');
const Tarea = require('../models/Tarea');

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

/* -------------------------------------------------------------------------- */
/*                             Crea y firma un JWT                            */
/* -------------------------------------------------------------------------- */
const crearToken = (usuario, secreta, expiresIn) => {
  // console.log(usuario);
  const { id, email, nombre } = usuario;

  return jwt.sign({ id, email, nombre }, secreta, { expiresIn });
}

const resolvers = {
  Query: {
    /* -------------------------------------------------------------------------- */
    /*                  obtener todos los proyecto de un usuario                  */
    /* -------------------------------------------------------------------------- */
    obtenerProyectos: async (_, { }, ctx) => {
      const proyectos = await Proyecto.find({ creador: ctx.usuario.id });

      return proyectos;
    },
    /* -------------------------------------------------------------------------- */
    /*                      Obtener tareas por id de proyecto                     */
    /* -------------------------------------------------------------------------- */
    obtenerTareas: async (_, { input }, ctx) => {
      const tareas = await Tarea.find({ creador: ctx.usuario.id }).where('proyecto').equals(input.proyecto);

      return tareas;
    }
  },

  /* -------------------------------------------------------------------------- */
  /*                      metodos CUD                                          */
  /* -------------------------------------------------------------------------- */
  Mutation: {

    /* -------------------------------------------------------------------------- */
    /*                           crear un nuevo usuario                           */
    /* -------------------------------------------------------------------------- */
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

      // si el usuario no existe
      if (!existeUsuario) {
        throw new Error('El usuario no existe');
      }

      // Si el password es correcto
      const passwordCorreco = await bcryptjs.compare(password, existeUsuario.password);

      if (!passwordCorreco) {
        throw new Error('Password Incorrecto');
      }
      // Dar acceso a la app
      return {
        token: crearToken(existeUsuario, process.env.SECRETA, '4hr')
      }
    },

    /* -------------------------------------------------------------------------- */
    /*                           crea un nuevo proyecto                           */
    /* -------------------------------------------------------------------------- */
    nuevoProyecto: async (_, { input }, ctx) => {

      try {
        const proyecto = new Proyecto(input);

        // asociar el creador
        proyecto.creador = ctx.usuario.id;

        // almacenarlo en la BD
        const resultado = await proyecto.save();

        return resultado;
      } catch (error) {
        console.log(error);
      }
      console.log('creando proyecto');
    },
    /* -------------------------------------------------------------------------- */
    /*                             Actualizar proyecto                            */
    /* -------------------------------------------------------------------------- */
    actualizarProyecto: async (_, { id, input }, ctx) => {
      // Revisar si el proyecto existe o no
      let proyecto = await Proyecto.findById(id);

      if (!proyecto) {
        throw new Error('Proyecto no encontrado');
      }

      // Revisar si la persona que trata de editarlo, es el creador
      if (proyecto.creador.toString() !== ctx.usuario.id) {
        throw new Error('No tienes las credenciales para editar');
      }

      // Actualizar el proyecto y retornar el nuevo
      proyecto = await Proyecto.findOneAndUpdate({ _id: id }, input, { new: true });
      return proyecto;
    },
    /* -------------------------------------------------------------------------- */
    /*                            Eliminar un proyecto                            */
    /* -------------------------------------------------------------------------- */
    eliminarProyecto: async (_, { id }, ctx) => {
      // Revisar si el proyecto existe o no
      let proyecto = await Proyecto.findById(id);

      if (!proyecto) {
        throw new Error('Proyecto no encontrado');
      }

      // Revisar si la persona que trata de eliminarlo, es el creador
      if (proyecto.creador.toString() !== ctx.usuario.id) {
        throw new Error('No tienes las credenciales para elimnar');
      }

      // Eliminar
      await Proyecto.findOneAndDelete({ _id: id });

      return "Proyecto Eliminado";

    },
    /* -------------------------------------------------------------------------- */
    /*                            Crear una nueva tarea                           */
    /* -------------------------------------------------------------------------- */
    nuevaTarea: async (_, { input }, ctx) => {
      try {
        const tarea = new Tarea(input);
        tarea.creador = ctx.usuario.id;
        const resultado = await tarea.save();
        return resultado;
      } catch (error) {
        console.log(error);
      }
    },
    /* -------------------------------------------------------------------------- */
    /*                              Actualizar tarea                              */
    /* -------------------------------------------------------------------------- */
    actualizarTarea: async (_, { id, input, estado }, ctx) => {
      // Si la tarea existe o no
      let tarea = await Tarea.findById(id);

      if (!tarea) {
        throw new Error('Tarea no encontrada');
      }

      // Si la persona que edita es el creador
      if (tarea.creador.toString() !== ctx.usuario.id) {
        throw new Error('No tienes las credenciales para editar');
      }

      // Asignar estado
      input.estado = estado;

      // Guardar y retornar la tarea actualizada
      tarea = await Tarea.findOneAndUpdate({ _id: id }, input, { new: true });

      return tarea;
    },
    /* -------------------------------------------------------------------------- */
    /*                               Eliminar tarea                               */
    /* -------------------------------------------------------------------------- */
    eliminarTarea: async (_, { id }, ctx) => {
      // Si la tarea existe o no
      let tarea = await Tarea.findById(id);

      if (!tarea) {
        throw new Error('Tarea no encontrada');
      }

      // Si la persona que elimina es el creador
      if (tarea.creador.toString() !== ctx.usuario.id) {
        throw new Error('No tienes las credenciales para eliminar');
      }

      // Eliminar
      await Tarea.findOneAndDelete({ _id: id });

      return "Tarea Eliminada";
    }
  }
}

module.exports = resolvers;