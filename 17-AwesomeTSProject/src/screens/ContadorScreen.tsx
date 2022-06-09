/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export const ContadorScreen = () => {

  const [contador, setContador] = useState(10);

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Contador: { contador }
      </Text>

      <TouchableOpacity
        onPress={() => setContador( contador + 1)}
      >
        <View style={ styles.bottonIncrementar }>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
  bottonIncrementar: {
    backgroundColor: 'red',
    borderRadius: 100,
  }
});
