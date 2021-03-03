import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Formulario from './componentes/Formulario';

const App = () => {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  const [consultar, guardarConsultar] = useState(false);

  const {ciudad, pais} = busqueda;

  useEffect(() => {
    if (consultar) {
      const appId = 'apikey';
      const url = `api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      console.log(url);
    }
  }, [consultar, ciudad, pais]);

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
