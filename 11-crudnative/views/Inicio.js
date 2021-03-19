/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import axios from 'axios';
import {List, Headline} from 'react-native-paper';
import globalStyles from '../styles/global';

const Inicio = () => {

  // state de la app
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const resultado = await axios.get('http://10.0.2.2:3000/clientes');
        console.log(resultado)
        setClientes(resultado.data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClientesApi();
  }, []);

  return (
  <View style={globalStyles.contenedor}>

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
  </View>);
};

export default Inicio;
