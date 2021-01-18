import {
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDERNAR_PLATILLO,
    MOSTRAR_RESUMEN
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
        default:
            return state;
    }
}