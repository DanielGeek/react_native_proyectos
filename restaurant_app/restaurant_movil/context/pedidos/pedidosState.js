import React, { useReducer } from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';

import {
    SELECCIONAR_PRODUCTO
} from '../../types';

const PedidosState = props => {

    // Crear state inicial
    const initialState = {
        pedidos: [],
        platillo: null
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

    // para tener acceso a mi state de firebase y su BD en cualquier parte de la app
    return (
        <PedidosContext.Provider
            value={{
                pedidos: state.pedidos,
                platillo: state.platillo,
                seleccionarPlatillo
            }}
        >
            {props.children}
        </PedidosContext.Provider>
    )
}

export default PedidosState;