import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Clima from './componentes/Clima';
import Formulario from './componentes/Formulario';

const App = () => {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [bgColor, guardarBgColor] = useState('rgb(71, 149, 212)');

  const {ciudad, pais} = busqueda;

  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        try {
          const respuesta = await fetch(url);
          const result = await respuesta.json();
          guardarResultado(result);
          guardarConsultar(false);

          // Modifica los colores de fondo basado en la temperatura
          const kelvin = 273.15;
          const {main} = result;
          const actual = main.temp - kelvin;
          if (actual < 10) {
            guardarBgColor('rgb(105, 108, 149)');
          } else if (actual >= 10 && actual < 25) {
            guardarBgColor('rgb(71, 149, 212)');
          } else {
            guardarBgColor('rgb(178, 28, 61)');
          }
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarClima();
  }, [consultar, ciudad, pais]);

  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultados, intente con otra ciudad o país', [
      {text: 'Entendido'},
    ]);
  };

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  const bgColorApp = {
    backgroundColor: bgColor,
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.contenido}>
            <Clima resultado={resultado} />
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
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
