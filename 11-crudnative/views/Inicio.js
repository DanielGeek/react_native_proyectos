/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import axios from 'axios';
import {List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';

const Inicio = ({navigation}) => {

  // state de la app
  const [clientes, setClientes] = useState([]);
  const [consultarAPI, setConsultarAPI] = useState(true);

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const resultado = await axios.get('http://10.0.2.2:3000/clientes');
        console.log(resultado);
        setClientes(resultado.data);
        setConsultarAPI(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (consultarAPI) {
      obtenerClientesApi();
    };
  }, [consultarAPI]);

  return (
  <View style={globalStyles.contenedor}>

    <Button icon="plus-circle" onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI}) }>
      Nuevo Cliente
    </Button>

    <Headline style={globalStyles.titulo}>{clientes.length ? 'Clientes' : 'Aún no hay Clientes'}</Headline>

    <FlatList
      data={clientes}
      keyExtractor={cliente => (cliente.id).toString()}
      renderItem={({item}) => (
        <List.Item
          title={item.nombre}
          description={item.empresa}
        />
      )}
    />

    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI}) }
    />
  </View>);
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 20,
    bottom: 20,
  },
});

export default Inicio;
