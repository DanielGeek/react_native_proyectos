/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const Animacion3 = () => {

  const [ animacion ] = useState( new Animated.Value(14) );

  useEffect(() => {
    Animated.timing(
      animacion, {
        toValue: 40, // valor al que llega
        duration: 500, // cantidad de tiempo en llegar
        useNativeDriver: false,
      }
    ).start();
  }, [animacion]);

  return (
    <View>
      <Animated.Text
        style={[styles.texto, {fontSize: animacion }]}
        >Animación 3</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion3;
