/* eslint-disable prettier/prettier */
import axios from 'axios';
import React from 'react';
import { StyleSheet, View, Alert, Platform } from 'react-native';
import { Headline, Text, Subheading, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';
import {API_URL_IOS, API_URL_ANDROID} from '@env';

const DetallesCliente = ({navigation, route}) => {
  let URL_API = '';
  if (Platform.OS === 'ios') {
    URL_API = API_URL_IOS;
  } else {
    // para android
    URL_API = API_URL_ANDROID;
  }
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
    const url = `${URL_API}/clientes/${id}`;
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

      <FAB
      icon="pencil"
      style={globalStyles.fab}
      onPress={() => navigation.navigate('NuevoCliente', { cliente: route.params.item, setConsultarAPI}) }
      />
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
