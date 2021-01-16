import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';

const NuevaOrden = () => {

    // hooks para  navegar a otros componentes
    const navigation = useNavigation();

    return (
        <Container style={globalStyles}>
            <View style={[globalStyles.contenido, styles.contenido]}>
                <Button
                    style={globalStyles.boton}
                    rounded
                    block
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text style={globalStyles.botonTexto}>Crear Nueva Orden</Text>
                </Button>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    // centra el contenido
    contenido: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default NuevaOrden;
