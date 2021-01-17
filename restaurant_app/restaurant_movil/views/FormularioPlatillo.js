import React from 'react';
import { StyleSheet } from 'react-native';
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
    Left
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidosContext from '../context/pedidos/pedidosContext';

const FormularioPlatillo = () => {
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
                            >
                                <Icon style={{ fontSize: 40 }} name="remove" />
                            </Button>
                        </Col>
                        <Col>
                            <Input
                                style={{ textAlign: 'center', fontSize: 20 }}
                                value="1"
                            />
                        </Col>
                        <Col>
                            <Button
                                props
                                dark
                                style={{ height: 80, marginLeft: 60 }}
                            >
                                <Icon style={{ fontSize: 40 }} name="add" />
                            </Button>
                        </Col>
                    </Grid>
                </Form>
            </Content>
        </Container>
    );
}

export default FormularioPlatillo;
