import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Button,
    Body,
    Text,
    H1,
    Card,
    CardItem
} from 'native-base';
import globalStyles from '../styles/global';

import PedidosContext from '../context/pedidos/pedidosContext';
import { useNavigation } from '@react-navigation/native';

const DetallePlatillo = () => {

    // Pedido context
    const { platillo } = useContext(PedidosContext);
    const { nombre, imagen, descripcion, precio } = platillo;

    //HOOK PARA NAVEGAR
    const navigation = useNavigation();

    // muestra en el header el titulo
    useEffect(() => {
        navigation.setOptions({ title: nombre });
    }, [])

    return (
        <Container style={globalStyles.contenedor}>
            <Content style={globalStyles.contenido}>
                <H1 style={globalStyles.titulo}>{nombre}</H1>

                <Card>
                    <CardItem>
                        <Body>
                            <Image style={globalStyles.imagen} source={{ uri: imagen }} />
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}

export default DetallePlatillo;
