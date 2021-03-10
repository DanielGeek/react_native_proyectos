/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Cita } from './componentes/Cita';
import { Formulario } from './componentes/Formulario';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [mostrarForm, guardarMostrarForm] = useState(false);

  // Definir el state de citas
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const obtenerCitasStorage = async () => {
      try {
        const citasStorage = await AsyncStorage.getItem('citas');
        if(citasStorage) {
          setCitas(JSON.parse(citasStorage));
        }
        console.log(citasStorage);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCitasStorage();
  }, []);

  // Elimina los pacientes del state
  const eliminarPaciente = id => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id);
    });
  };

  // Muestra u oculta el Formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  };

  // Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  // ALmacenar las citas en storage
  const guardarCitasStorage = async (citasJSON) => {
    try {
      await AsyncStorage.setItem('citas', citasJSON);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>

        <View style={styles.contenedorBtnSubmit}>
          <TouchableHighlight onPress={() => mostrarFormulario()} style={styles.btnMostrarForm}>
            <Text style={styles.textoMostrarForm}>{mostrarForm ? 'Cancelar Crear Cita' : 'Crear Nueva Cita'} </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Cita</Text>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                guardarMostrarForm={guardarMostrarForm}
                guardarCitasStorage={guardarCitasStorage}
              />
            </>
          ) : (
              <>
                <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus Citas' : 'No hay citas, agrega una'}</Text>

                <FlatList
                  style={styles.listado}
                  data={citas}
                  renderItem={({ item }) => <Cita item={item} eliminarPaciente={eliminarPaciente} />}
                  keyExtractor={cita => cita.id}
                />
              </>
            )}
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginBottom: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
