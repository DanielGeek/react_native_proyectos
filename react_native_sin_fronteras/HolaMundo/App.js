import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = (props) => {
  const [texto, setTexto] = useState("Hola mundo!")
  const actualizaTexto = () => {
    setTexto('Chao mundo!')
  }
  return (
    <Text style={{ fontSize: 24 }} onPress={actualizaTexto}>{texto}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
