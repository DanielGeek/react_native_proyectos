/* eslint-disable prettier/prettier */
import React from 'react';
import {Button} from 'react-native-paper';

const BarraSuperior = ({navigation, route}) => {

  const handlePress = () => {
    navigation.navigate('NuevoCliente');
  };

  return <Button icon="add-circle-outline" color="#FFF" onPress={() => handlePress()}>Cliente</Button>;
};

export default BarraSuperior;
