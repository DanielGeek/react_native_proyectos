import React, { useContext } from 'react';
import { Button, Text } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import PedidosContext from '../../context/pedidos/pedidosContext';

const BotonResumen = () => {

    const navigation = useNavigation();

    // Leer el objeto de pedido
    const { pedidos } = useContext(PedidosContext);

    // en caso de que no existan pedidos no muestra el boton para ir a el resumen
    if (pedidos.length === 0) return null;

    return (
        <Button
            onPress={() => navigation.navigate("ResumenPedido")}
            style={globalStyles.boton}
        >
            <Text style={globalStyles.botonTexto}>Ir a Pedido</Text>
        </Button>
    )
}

export default BotonResumen;
