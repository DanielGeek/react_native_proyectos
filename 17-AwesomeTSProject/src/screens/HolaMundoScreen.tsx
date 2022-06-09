/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize: 55,
        textAlign: 'center',
      }}>
          Hola mundo!
        </Text>
    </View>
  )
}
