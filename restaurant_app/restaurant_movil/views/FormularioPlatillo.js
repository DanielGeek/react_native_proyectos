import React, { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import {
    Container,
    Content,
    Form,
    Icon,
    Input,
    Grid,
    Col,
    Button,
    Text,
    Footer,
    FooterTab
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidosContext from '../context/pedidos/pedidosContext';

const FormularioPlatillo = () => {

    // state para cantidades
    const [cantidad, guardarCantidad] = useState(1);
    const [total, guardarTotal] = useState(0);

    const { platillo } = useContext(PedidosContext);
    const { precio } = platillo;

    // En cuanto el componente carga, calcular la cantidad a pagar
    useEffect(() => {
        calcularTotal();
    }, [cantidad]);

    // Calcular el total del platillo por su cantidad
    const calcularTotal = () => {
        const totalPagar = precio * cantidad;
        guardarTotal(totalPagar);
    }

    // decrementar en uno la cantidad
    const decrementarUno = () => {
        if (cantidad > 1) {
            const nuevaCantidad = parseInt(cantidad) - 1;
            guardarCantidad(nuevaCantidad);
        }
    }

    // incrementar en uno la cantidad
    const incrementarUno = () => {
        const nuevaCantidad = parseInt(cantidad) + 1;
        guardarCantidad(nuevaCantidad);
    }

    // Confirma si la orden es correcta
    const confirmarOrden = () => {
        Alert.alert(
            'Deseas confirmar tu pedido?',
            'Un pedido confirmado ya no se podrá modificar',
            [
                {
                    text: 'Confirmar',
                    onPress: () => {
                        // Almacenar el pedido al pedido principal

                        // Navegar hacia el Resumen
                    },
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }

    return (
        <Container>
            <Content>
                <Form>
                    <Text style={globalStyles.titulo}>Cantidad</Text>
                    <Grid>
                        <Col>
                            <Button
                                props
                                dark
                                style={{ height: 80, justifyContent: 'center' }}
                                onPress={() => decrementarUno()}
                            >
                                <Icon style={{ fontSize: 40 }} name="remove" />
                            </Button>
                        </Col>
                        <Col>
                            <Input
                                style={{ textAlign: 'center', fontSize: 20 }}
                                value={cantidad.toString()}
                                keyboardType="numeric"
                                onChangeText={(cantidad) => {
                                    if (cantidad === '') {
                                        guardarCantidad(parseInt(0, 10));
                                    } else {
                                        guardarCantidad(parseInt(cantidad, 10));
                                    }
                                }}
                            />
                        </Col>
                        <Col>
                            <Button
                                props
                                dark
                                style={{ height: 80, marginLeft: 60 }}
                                onPress={() => incrementarUno()}
                            >
                                <Icon style={{ fontSize: 40 }} name="add" />
                            </Button>
                        </Col>
                    </Grid>

                    <Text style={globalStyles.cantidad}>Subtotal: $ {total}</Text>
                </Form>
            </Content>

            <Footer>
                <FooterTab>
                    <Button
                        style={globalStyles.boton}
                        onPress={() => confirmarOrden()}
                    >
                        <Text style={globalStyles.botonTexto}>Agregar al Pedido</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}

export default FormularioPlatillo;
