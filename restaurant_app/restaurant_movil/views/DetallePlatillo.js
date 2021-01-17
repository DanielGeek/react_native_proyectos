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
                <H1 style={globalStyles.titulo}>Detalle</H1>

                <Card>
                    <CardItem>
                        <Body>
                            <Image style={globalStyles.imagen} source={{ uri: imagen }} />

                            <Text style={{ marginTop: 20 }}>{descripcion}</Text>
                            <Text style={globalStyles.cantidad}>Precio: $ {precio}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>

            <Footer>
                <FooterTab>
                    <Button
                        style={globalStyles.boton}
                        onPress={() => navigation.navigate("FormularioPlatillo")}
                    >
                        <Text style={globalStyles.botonTexto}>Ordenar Platillo</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}

export default DetallePlatillo;
