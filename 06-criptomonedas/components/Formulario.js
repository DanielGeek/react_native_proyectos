/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

const Formulario = ({moneda, guardarMoneda, criptomoneda, guardarCriptomoneda, guardarConsultarAPI}) => {

  const [criptomonedas, guardarCriptomonedas] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const resultado = await axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  // Almacena las selecciones del usuario
  const obtenerMoneda = monedaSelected => {
    guardarMoneda(monedaSelected)
  };

  const obtenerCriptoMoneda = criptoSelected => {
    guardarCriptomoneda(criptoSelected)
  };

  const cotizarPrecio = () => {
    if (moneda.trim() === '' || criptomoneda.trim() === '') {
      mostrarAlerta();
      return;
    }

    // Se pasa la validación, Cambiar el state de consultar api
    guardarConsultarAPI(true);
  };

  const mostrarAlerta = () => {
    Alert.alert(
      'Error...',
      'Ambos campos son obligatorios',
      [
        {text: 'OK'},
      ]
    );
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
      selectedValue={moneda}
        onValueChange={monedaSelected => obtenerMoneda(monedaSelected)}
        itemStyle={{height: 120}}
      >
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
      selectedValue={criptomoneda}
        onValueChange={criptoSelected => obtenerCriptoMoneda(criptoSelected)}
        itemStyle={{height: 120}}
      >
        <Picker.Item label="- Seleccione -" value="" />
        { criptomonedas.map(cripto => (
          <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
        ))}
      </Picker>
      <TouchableHighlight
        style={styles.btnCotizar}
        onPress={ () => cotizarPrecio() }
      >
        <Text style={styles.textoCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
  btnCotizar: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 20,
  },
  textoCotizar: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Formulario;
