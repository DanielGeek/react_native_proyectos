/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Inicio = ({navigation}) => {

  const visitarNosotros = () => {
    navigation.navigate('Nosotros');
  };

  return (
    <View style={styles.contenedor}>
      <Text>Inicio</Text>
      <Button
        title="Ir a Nosotros"
        onPress={() => visitarNosotros() }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Inicio;
