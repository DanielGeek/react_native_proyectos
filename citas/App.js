/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  // Definir el state de citas
  const [citas, setCitas] = useState([
    { id: '1', paciente: 'Hook', propietario: 'Daniel', sintomas: 'No come' },
    { id: '2', paciente: 'UseState', propietario: 'Elias', sintomas: 'No Sale' },
    { id: '3', paciente: 'Reducer', propietario: 'Jessica', sintomas: 'No Guarda' },
  ]);
  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>

        <FlatList
          data={citas}
          renderItem={({ item }) => (
            <View>
              <Text>{item.paciente}</Text>
            </View>
          )}
          keyExtractor={cita => cita.id}
        />
        {/* {citas.map(cita => (
          <View>
            <Text key={cita.id}>{cita.paciente}</Text>
          </View>
        ))} */}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
