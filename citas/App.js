/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Cita } from './componentes/Cita';
import { Formulario } from './componentes/Formulario';

const App = () => {

  // Definir el state de citas
  const [citas, setCitas] = useState([
    { id: '1', paciente: 'Hook', propietario: 'Daniel', sintomas: 'No come' },
    { id: '2', paciente: 'UseState', propietario: 'Elias', sintomas: 'No Sale' },
    { id: '3', paciente: 'Reducer', propietario: 'Jessica', sintomas: 'No Guarda' },
  ]);

  // Elimina los pacientes del state
  const eliminarPaciente = id => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id);
    });
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>

        <Formulario />

        <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus Citas' : 'No hay citas, agrega una'}</Text>

        <FlatList
          data={citas}
          renderItem={({ item }) => <Cita item={item} eliminarPaciente={eliminarPaciente} />}
          keyExtractor={cita => cita.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
