import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Text, H1, H3, Button } from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import PedidosContext from '../context/pedidos/pedidosContext';
import { useContext } from 'react/cjs/react.development';
import firebase from '../firebase';
import Countdown from 'react-countdown';


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

    // Muestra el countdown en la pantalla
    const renderer = ({ minutes, seconds }) => {
        return (
            <Text style={styles.tiempo}>{minutes}:{seconds}</Text>
        )
    }

    return (
        <Container style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido, { marginTop: 50 }]}>
                {tiempo === 0 && (
                    <>
                        <Text style={{ textAlign: 'center' }}>Hemos recibido tu orden...</Text>
                        <Text style={{ textAlign: 'center' }}>Estamos calculando el tiempo de entrega</Text>
                    </>
                )}

                {tiempo > 0 && (
                    <>
                        <Text style={{ textAlign: 'center' }}>Su orden estará lista en: </Text>
                        <Countdown
                            date={Date.now() + tiempo * 60000}
                            renderer={renderer}
                        />
                    </>
                )}
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    tiempo: {
        marginBottom: 20,
        fontSize: 60,
        textAlign: 'center',
        marginTop: 30,
    }
})

export default ProgresoPedido;
