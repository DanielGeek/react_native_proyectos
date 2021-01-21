import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../firebase';

export const Ordenes = () => {

    // context con las operaciones de firebase
    const { firebase } = useContext(FirebaseContext);

    // State con las ordenes
    const [ordenes, guardarOrdenes] = useState([]);

    useEffect(() => {
        const obtenerOrdenes = () => {
            // onSnapshot es para obtener resultado en tiempo real
            firebase.db.collection('ordenes').where('completado', '==', false).onSnapshot(manejarSnapshot);
        }
        obtenerOrdenes();
    }, []);

    function manejarSnapshot(snapshot) {
        const ordenes = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        guardarOrdenes(ordenes);
    }

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Ordenes</h1>
        </>
    );
}
