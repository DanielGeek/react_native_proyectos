/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

export const Cita = ({ item }) => {
    return (
        (
            <View>
                <View>
                    <Text>Paciente: </Text>
                    <Text>{item.paciente}</Text>
                </View>
                <View>
                    <Text>Propietario: </Text>
                    <Text>{item.propietario}</Text>
                </View>
                <View>
                    <Text>Síntomas: </Text>
                    <Text>{item.sintomas}</Text>
                </View>
            </View>
        )
    );
};
