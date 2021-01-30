import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../firebase';
import Orden from '../ui/Orden';

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
    }, [firebase.db]);

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
            <div className="sm:flex sm:flex-wrap -mx-3">
                {ordenes.map(orden => (
                    <Orden
                        key={orden.id}
                        orden={orden}
                    />
                ))}
            </div>
        </>
    );
}
