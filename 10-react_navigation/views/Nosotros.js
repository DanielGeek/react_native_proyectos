/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Nosotros = ({navigation, route}) => {

  const { clientId } = route.params;

  const volver = () => {
    // navigation.navigate('Inicio');
    // navigation.goBack();
    navigation.push('Inicio');

  };

  return (
    <View style={styles.contenedor}>
      <Text>{clientId}</Text>
      <Button
        title="Volver"
        onPress={() => volver() }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Nosotros
