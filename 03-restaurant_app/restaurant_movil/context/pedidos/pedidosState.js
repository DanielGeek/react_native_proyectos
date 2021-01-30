import React, { useReducer } from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';

import {
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDERNAR_PLATILLO,
    MOSTRAR_RESUMEN,
    ELIMINAR_PRODUCTO,
    PEDIDO_ORDENADO
} from '../../types';

const PedidosState = props => {

    // Crear state inicial
    const initialState = {
        pedidos: [],
        platillo: null,
        total: 0,
        id_pedido: '',
    }

    // useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(PedidosReducer, initialState);

    // Despacho el producto a mi fuente de la verdad
    const seleccionarPlatillo = platillo => {
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: platillo
        })
    }

    // Cuando el usuario confirma un platillo
    const guardarPedido = pedido => {
        dispatch({
            type: CONFIRMAR_ORDERNAR_PLATILLO,
            payload: pedido
        })
    }

    // Muestra el total a pagar en el resumen
    const mostrarResumen = total => {
        dispatch({
            type: MOSTRAR_RESUMEN,
            payload: total
        })
    }

    // Elimina un articulo del carrito
    const eliminarProducto = id => {
        dispatch({
            type: ELIMINAR_PRODUCTO,
            payload: id
        })
    }

    const pedidoRealizado = id => {
        dispatch({
            type: PEDIDO_ORDENADO,
            payload: id
        })
    }

    // para tener acceso a mi state de pedidos en cualquier parte de la app
    return (
        <PedidosContext.Provider
            value={{
                pedidos: state.pedidos,
                platillo: state.platillo,
                total: state.total,
                id_pedido: state.id_pedido,
                seleccionarPlatillo,
                guardarPedido,
                mostrarResumen,
                eliminarProducto,
                pedidoRealizado
            }}
        >
            {props.children}
        </PedidosContext.Provider>
    )
}

export default PedidosState;