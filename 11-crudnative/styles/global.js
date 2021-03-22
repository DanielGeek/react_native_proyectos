/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  contenedor: {
    // toma todo el espacio disponible en la pantalla
    flex: 1,
    marginTop: 20,
    marginHorizontal: '2.5%',
  },
  titulo: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 30,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 20,
    bottom: 20,
  },
});

export default globalStyles;
