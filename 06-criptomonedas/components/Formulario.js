/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Formulario = () => {
  return (
    <View>
      <Text style={styles.label}>Moneda</Text>

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
