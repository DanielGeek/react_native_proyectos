import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';


export const Menu = () => {

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerPlatillos = () => {
            const resultado = firebase.db.collection('productos').onSnapshot(handleSnapshot);

            resultado.forEach(platillo => {
                console.log(platillo.data());
            });
        }
        obtenerPlatillos();
    }, [firebase.db]);

    // Snapshot nos permite utilizar la base de datos en tiempo real de firestore
    const handleSnapshot = (snapshot) => {

    }

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Menú</h1>
            <Link to="/nuevo-platillo" className=" bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Platillo
            </Link>
        </>
    )
}
