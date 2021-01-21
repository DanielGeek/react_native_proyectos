import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Text, H1, H3, Button } from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import PedidosContext from '../context/pedidos/pedidosContext';
import { useContext } from 'react/cjs/react.development';


const ProgresoPedido = () => {

    const { } = useContext(PedidosContext);
    return (
        <Text>Progreso pedido</Text>
    )
}

export default ProgresoPedido;
