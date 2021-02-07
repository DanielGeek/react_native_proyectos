import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  // centrar verticalmente
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitulo: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#28303B',
  },
  botonTexto: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF',
  },
  enlace: {
    color: '#FFF',
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default globalStyles;
