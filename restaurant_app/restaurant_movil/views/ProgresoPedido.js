import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Text, H1, H3, Button } from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import PedidosContext from '../context/pedidos/pedidosContext';
import { useContext } from 'react/cjs/react.development';
import firebase from '../firebase';


const ProgresoPedido = () => {

    const { id_pedido } = useContext(PedidosContext);

    const [tiempo, guardarTiempo] = useState(0)

    // cuando se hace el pedido obtengo el tiempo de entrega en tiempo real siempre que se actualiza
    useEffect(() => {
        const obtenerProducto = () => {
            firebase.db.collection('ordenes')
                .doc(id_pedido)
                .onSnapshot(function (doc) {
                    guardarTiempo(doc.data().tiempo_entrega)
                })
        }
        obtenerProducto();
    }, []);

    return (
        <Text>{tiempo}</Text>
    );
}

export default ProgresoPedido;
