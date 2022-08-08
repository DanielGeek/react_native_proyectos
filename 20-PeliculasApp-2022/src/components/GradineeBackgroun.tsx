/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const GradineeBackgroun = ({ children }: Props) => {

  const { colors } = useContext( GradientContext );
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[colors.primary, colors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      { children }
    </View>
  );
};
