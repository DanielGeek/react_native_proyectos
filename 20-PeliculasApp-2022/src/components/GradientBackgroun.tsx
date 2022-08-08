/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';
import { useEffect } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const GradientBackgroun = ({ children }: Props) => {

  const { colors, prevColors, setPrevMainColors } = useContext( GradientContext );

  const { opacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn( () => {
      setPrevMainColors( colors );
      fadeOut();
    });
  }, [ colors ]);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}
      >
        <LinearGradient
            colors={[colors.primary, colors.secondary, 'white']}
            style={{ ...StyleSheet.absoluteFillObject }}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.5, y: 0.7 }}
        />
      </Animated.View>
      { children }
    </View>
  );
};
