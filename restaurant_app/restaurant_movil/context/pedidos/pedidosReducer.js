import {
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDERNAR_PLATILLO
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
        default:
            return state;
    }
}