/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const Formulario = () => {
    return (
        <>
            <View style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginHorizontal: '2.5%',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
    },
});
