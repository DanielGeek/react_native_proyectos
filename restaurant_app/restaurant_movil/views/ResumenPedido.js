import React, { useContext, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import {
    Container,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Button,
    H1,
    Footer,
    FooterTab
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidosContext from '../context/pedidos/pedidosContext';

const ResumenPedido = () => {

    const navigation = useNavigation();

    // context de pedido
    const { pedidos, total, mostrarResumen } = useContext(PedidosContext);

    useEffect(() => {
        calcularTotal();
    }, [pedidos]);

    const calcularTotal = () => {
        let nuevoTotal = 0;
        nuevoTotal = pedidos.reduce((nuevoTotal, articulo) => nuevoTotal + articulo.total, 0);
        mostrarResumen(nuevoTotal);
    }

    // redirecciona a Progreso pedido
    const ProgresoPedido = () => {
        Alert.alert(
            'Revisa tu pedido',
            'Una vez que realizas tu pedido, no podrás cambiarlo',
            [
                {
                    text: 'Confirmar',
                    onPress: () => {
                        navigation.navigate("ProgresoPedido")
                    }
                },
                { text: 'Revisar', style: 'cancel' }
            ]
        )
    }

    return (
        <Container style={globalStyles.contenedor}>
            <Content style={globalStyles.contenido}>
                <H1 style={globalStyles.titulo}>Resumen Pedido</H1>
                {pedidos.map((platillo, i) => {
                    const { cantidad, nombre, imagen, id, precio } = platillo;
                    return (
                        <List key={id + i}>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail large square source={{ uri: imagen }} />
                                </Left>

                                <Body>
                                    <Text>{nombre}</Text>
                                    <Text>Cantidad: {cantidad}</Text>
                                    <Text>Precio: $ {precio}</Text>
                                </Body>
                            </ListItem>
                        </List>
                    );
                })}

                <Text style={globalStyles.cantidad}>Total a Pagar: $ {total}</Text>

                <Button
                    onPress={() => navigation.navigate("Menu")}
                    style={{ marginTop: 30 }}
                    full
                    dark
                >
                    <Text style={[globalStyles.botonTexto, { color: '#FFF' }]}>Seguir Pidiendo</Text>
                </Button>
            </Content>

            <Footer>
                <FooterTab>
                    <Button
                        onPress={() => ProgresoPedido()}
                        style={globalStyles.boton}
                        full
                    >
                        <Text style={globalStyles.botonTexto}>Ordenar Pedido</Text>
                    </Button>
                </FooterTab>
            </Footer>

        </Container>
    );
}

export default ResumenPedido;