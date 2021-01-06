import React from 'react';

export const Platillo = ({ platillo }) => {

    const { nombre, imagen } = platillo;

    return (
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                        <img src={imagen} alt="Imagen platillo" />
                    </div>
                    <div className="lg:w-7/12 xl:w-9/12">
                        2
                    </div>
                </div>
            </div>
            <h1>{platillo.nombre}</h1>
        </div>
    )
}
