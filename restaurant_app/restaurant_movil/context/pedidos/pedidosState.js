import React, { useReducer } from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';


const PedidosState = props => {

    // Crear state inicial
    const initialState = {
        pedidos: []
    }

    // useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(PedidosReducer, initialState);
    // para tener acceso a mi state de firebase y su BD en cualquier parte de la app
    return (
        <PedidosContext.Provider
            value={{
                pedidos: state.pedidos
            }}
        >
            {props.children}
        </PedidosContext.Provider>
    )
}

export default PedidosState;