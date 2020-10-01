import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

// const {width, height } = Dimensions.get('window')

export default function App() {
  const [text, setText] = useState('texto default')

  return (
    <View style={styles.container}>
      <Text>Texto: {text}</Text>
      <TextInput 
        style={styles.input}
        placeholder='Escribe'
        onChangeText={ t => setText(t)}
        defaultValue={text}
       />
      <StatusBar style="auto" />
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
