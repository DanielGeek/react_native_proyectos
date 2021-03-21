/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';

const DetallesCliente = ({route}) => {
  console.log(route.params);
  return (
    <Text>Desde Detalle Cliente</Text>
  );
};

export default DetallesCliente;
