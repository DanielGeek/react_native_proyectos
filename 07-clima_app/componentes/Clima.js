/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Clima = ({resultado}) => {

  const {name, main} = resultado;

  if (!name) {
    return null;
  }

  // grados kelvin
  const kelvin = 273.15;

  console.log(resultado);
  return (
    <View style={styles.clima}>
      <Text style={[styles.texto, styles.actual]}>{parseInt(main.temp - kelvin)}
        <Text style={styles.temperatura}>
          &#x2103;
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clima: {
    marginBottom: 20,
  },
  texto: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 20,
  },
  actual: {
    fontSize: 80,
    marginRight: 0,
    fontWeight: 'bold',
  },
  temperatura: {
    fontSize: 24,
    fontWeight: 'normal',
  },
});

export default Clima;
