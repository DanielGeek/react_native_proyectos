/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Text, Subheading, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

const DetallesCliente = ({route}) => {
  const {nombre, telefono, correo, empresa } = route.params.item;

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={styles.texto}>Empresa: <Subheading> {empresa}</Subheading></Text>
      <Text style={styles.texto}>Correo: <Subheading> {correo}</Subheading></Text>
      <Text style={styles.texto}>Teléfono: <Subheading> {telefono}</Subheading></Text>

      <Button>Eliminar Cliente</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18,
  },
});

export default DetallesCliente;
