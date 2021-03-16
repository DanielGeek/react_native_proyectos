/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {

  // campos formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');


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
