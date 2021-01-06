import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';


export const Menu = () => {

    // definir el state para los platillos
    const [platillos, guardarPlatillos] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    // Consultar la bd al cargar
    useEffect(() => {
        const obtenerPlatillos = () => {
            // obtener datos en tiempo real
            firebase.db.collection('productos').onSnapshot(handleSnapshot);
        }
        obtenerPlatillos();
    }, [firebase.db]);

    // Snapshot nos permite utilizar la base de datos en tiempo real de firestore
    const handleSnapshot = (snapshot) => {
        const platillos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        guardarPlatillos(platillos);

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
