/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const Formulario = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn('A date has been picked: ', date);
        hideDatePicker();
    };
    return (
        <>
            <View style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Dueño:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Teléfono Contacto:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
                        keyboardType="numeric"
                    />
                </View>
                <View>
                    <Button title="Show Date Picker" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Síntomas:</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={(texto) => console.log(texto)}
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
