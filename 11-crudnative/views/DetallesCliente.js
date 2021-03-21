/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Headline, Text, Subheading, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

const DetallesCliente = ({navigation, route}) => {
  const {setConsultarAPI} = route.params;
  const {nombre, telefono, correo, empresa, id } = route.params.item;

  const mostrarConfirmacion = () => {
    Alert.alert(
      'Deseas eliminar este cliente?',
      'Un contacto eliminado no se puede recuperar',
      [
        {text: 'Si Eliminar', onPress: () => eliminarContacto() },
        {text: 'Cancelar', style: 'cancel'},
      ]
    );
  };

  const eliminarContacto = async () => {
    const url = `http://10.0.2.2:3000/clientes/${id}`;
    // console.log(url);
    try {
      await axios.delete(url);
    } catch (error) {
      console.log(error);
    }

    // Redireccionar
    navigation.navigate('Inicio');

    // Volver a consultar la api
    setConsultarAPI(true);
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={styles.texto}>Empresa: <Subheading> {empresa}</Subheading></Text>
      <Text style={styles.texto}>Correo: <Subheading> {correo}</Subheading></Text>
      <Text style={styles.texto}>Teléfono: <Subheading> {telefono}</Subheading></Text>

      <Button
          style={styles.boton}
          mode="contained"
          icon="cancel"
          onPress={() => mostrarConfirmacion() }
          >
          Eliminar Cliente
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18,
  },
  boton: {
    marginTop: 100,
    backgroundColor: 'red',
  },
});

export default DetallesCliente;
