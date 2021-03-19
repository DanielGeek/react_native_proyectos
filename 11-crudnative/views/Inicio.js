/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import axios from 'axios';

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

  return <Text>Desde Inicio</Text>;
};

export default Inicio;
