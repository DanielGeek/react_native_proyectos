import React, { useReducer } from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';


const FirebaseState = props => {

    // console.log(firebase);

    // Crear state inicial
    const initialState = {
        menu: []
    }

    // useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);
    // para tener acceso a mi state de firebase y su BD en cualquier parte de la app
    return (
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;