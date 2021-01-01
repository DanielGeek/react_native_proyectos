/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export const Cita = ({ item }) => {

    const dialogoEliminar = () => {
        console.log('eliminando...');
    };

    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.text}>{item.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario: </Text>
                <Text style={styles.text}>{item.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Síntomas: </Text>
                <Text style={styles.text}>{item.sintomas}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={() => dialogoEliminar()} style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}>Eliminar &times; </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    text: {
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10,
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
