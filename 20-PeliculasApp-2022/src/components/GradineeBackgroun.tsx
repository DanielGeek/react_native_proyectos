/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const GradineeBackgroun = ({ children }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#084F6A', '#75CEDB', 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      { children }
    </View>
  );
};
