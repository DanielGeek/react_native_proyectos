import React from 'react';
import { View } from 'react-native';
import { Container, Button, Text } from 'native-base';

export default function NuevaOrden() {
    return (
        <Container>
            <View>
                <Button
                    rounded
                    block
                >
                    <Text>Crear Nueva Orden</Text>
                </Button>
            </View>
        </Container>
    )
}
