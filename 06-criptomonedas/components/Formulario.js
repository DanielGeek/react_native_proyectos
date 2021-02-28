/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Picker } from '@react-native-community/picker';

const Formulario = () => {
  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker>
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
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
});

export default Formulario;
