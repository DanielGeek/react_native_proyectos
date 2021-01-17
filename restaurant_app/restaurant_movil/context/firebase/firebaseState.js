import React, { useReducer } from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import { OBTENER_PRODUCTOS_EXITO } from '../../types';

import _ from 'lodash';

const FirebaseState = props => {

    // console.log(firebase);

    // Crear state inicial
    const initialState = {
        menu: []
    }

    // useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    // Función que se ejecuta para traer los productos
    const obtenerProductos = () => {

        // consultar firebase
        firebase.db
            .collection('productos')
            .where('existencia', '==', true) //trae solo los existentes
            .onSnapshot(manejarSnapshot); // si ocurren cambios los muestra en tiempo real

        function manejarSnapshot(snapshot) {
            let platillos = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            // Ordenar por categoria con lodash
            platillos = _.sortBy(platillos, 'categoria');
            console.log(platillos);

            // Tenemos resultados de la BD y despachamos al reducer el nuevo estado
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: platillos
            });
        }
    }

    // para tener acceso a mi state de firebase y su BD en cualquier parte de la app
    return (
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;