import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableWithoutFeedback } from 'react-native';

// const {width, height } = Dimensions.get('window')

export default function App() {
  const [text, setText] = useState('texto default')
  const [submit, setSubmit] = useState('')

  return (
    <View style={styles.container}>
      <Text>Texto: {submit}</Text>
      <TextInput 
        style={styles.input}
        placeholder='Escribe'
        onChangeText={ t => setText(t)}
        defaultValue={text}
       />
      <StatusBar style="auto" />
      <TouchableWithoutFeedback
        style={styles.TouchableOpacity}
        onPress={() => {
        setSubmit(text)
        alert('Texto enviado con exito')
      }}>
        <View style={styles.view}><Text>Aceptar</Text></View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: '#EEE',
  },
  view: {
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
