import React, { useReducer } from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';

import {
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDERNAR_PLATILLO,
    MOSTRAR_RESUMEN
} from '../../types';

const PedidosState = props => {

    // Crear state inicial
    const initialState = {
        pedidos: [],
        platillo: null,
        total: 0,
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

    // para tener acceso a mi state de pedidos en cualquier parte de la app
    return (
        <PedidosContext.Provider
            value={{
                pedidos: state.pedidos,
                platillo: state.platillo,
                total: state.total,
                seleccionarPlatillo,
                guardarPedido,
                mostrarResumen
            }}
        >
            {props.children}
        </PedidosContext.Provider>
    )
}

export default PedidosState;