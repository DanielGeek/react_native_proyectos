import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native';

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
      <Button onPress={() => {
        setSubmit(text)
        alert('Texto enviado con exito')
      }} title="Aceptar" />
    </View>
  );
}

const styles = StyleSheet.create({
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
