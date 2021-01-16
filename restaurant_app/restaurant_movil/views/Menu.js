import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';

export default function Menu() {

    // Context de Firebase
    const { obtenerProductos } = useContext(FirebaseContext);

    useEffect(() => {
        obtenerProductos();
    }, []);

    return (
        <Text>Menu</Text>
    )
}
