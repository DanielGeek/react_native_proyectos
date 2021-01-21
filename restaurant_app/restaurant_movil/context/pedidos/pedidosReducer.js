import {
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDERNAR_PLATILLO,
    MOSTRAR_RESUMEN,
    ELIMINAR_PRODUCTO,
    PEDIDO_ORDENADO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case SELECCIONAR_PRODUCTO:
            return {
                ...state,
                platillo: action.payload
            }
        case CONFIRMAR_ORDERNAR_PLATILLO:
            return {
                ...state,
                pedidos: [...state.pedidos, action.payload]
            }
        case MOSTRAR_RESUMEN:
            return {
                ...state,
                total: action.payload
            }
        case ELIMINAR_PRODUCTO:
            return {
                ...state,
                pedidos: state.pedidos.filter(pedido => pedido.id !== action.payload)
            }
        case PEDIDO_ORDENADO:
            return {
                ...state,
                id_pedido: action.payload
            }
        default:
            return state;
    }
}