/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const NuevoCliente = ({navigation, route}) => {

  const { setConsultarAPI } = route.params;

  // campos formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [alerta, setAlerta] = useState(false);

  // almacena el cliente en la BD
  const guardarCliente = async () => {
    // validar
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      setAlerta(true);
      return;
    }

    // generar el cliente
    const cliente = {nombre, telefono, empresa, correo};
    console.log(cliente);

    //guardar el cliente en la API
    try {
      if (Platform.OS === 'ios') {
        await axios.post('http://localhost:3000/clientes', cliente);
      } else {
        // para android
        await axios.post('http://10.0.2.2:3000/clientes', cliente);
      }
    } catch (error) {
      console.log(error);
    }

    // redireccionar
    navigation.navigate('Inicio');

    // limpiar el form (opcional)
    setNombre('');
    setTelefono('');
    setCorreo('');
    setEmpresa('');

    // cambiar a true para traernos el nuevo cliente
    setConsultarAPI(true);
  };


  return (
    <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
        <TextInput
          label="Nombre"
          placeholder="Daniel"
          onChangeText={ texto => setNombre(texto) }
          value={nombre}
          style={styles.input}
        />
        <TextInput
          label="Teléfono"
          placeholder="123123123"
          onChangeText={ texto => setTelefono(texto) }
          value={telefono}
          style={styles.input}
        />
        <TextInput
          label="Correo"
          placeholder="correo@gmal.com"
          onChangeText={ texto => setCorreo(texto) }
          value={correo}
          style={styles.input}
        />
        <TextInput
          label="Empresa"
          placeholder="Nombre Empresa"
          onChangeText={ texto => setEmpresa(texto) }
          value={empresa}
          style={styles.input}
        />

        <Button
          icon="pencil-circle"
          mode="contained"
          onPress={() => guardarCliente() }
        >
          Guardar Cliente
        </Button>

        <Portal>
          <Dialog
            visible={alerta}
            onDismiss={() => setAlerta(false)}
          >
            <Dialog.Title>Error</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Todos los campos son obligatorios</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setAlerta(false)}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoCliente;
