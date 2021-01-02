/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getDateString } from './helpers/getFechaEs';

export const Formulario = () => {

    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = date => {
        guardarFecha(getDateString(date));
        hideDatePicker();
    };

    // Muestra u oculta el Time Picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = time => {
        const opciones = { hour: 'numeric', minute: '2-digit' };
        guardarHora(time.toLocaleTimeString('es-CH', opciones));
        hideTimePicker();
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
                    <Text style={styles.label}>Fecha:</Text>
                    <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale="es_ES"
                        headerTextIOS="Elige la Fecha"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                    <Text>{fecha}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <Button title="Seleccionar Hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale="es_ES"
                        headerTextIOS="Elige una Hora"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                    <Text>{hora}</Text>
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
