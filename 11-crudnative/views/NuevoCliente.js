/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {

  // campos formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [alerta, setAlerta] = useState(false);

  // almacena el cliente en la BD
  const guardarCliente = () => {
    // validar
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      setAlerta(true);
      return;
    }

    // generar el cliente
    const cliente = {nombre, telefono, empresa, correo};
    console.log(cliente);

    //guardar el cliente en la API

    // redireccionar

    // limpiar el form (opcional)
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