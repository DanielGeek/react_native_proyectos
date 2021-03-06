/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

const Animacion1 = () => {

  const [ animacion ] = useState( new Animated.Value(0) );

  useEffect(() => {
    Animated.timing(
      animacion, {
        toValue: 1, // valor al que llega
        duration: 500, // cantidad de tiempo en llegar
        useNativeDriver: false,
      }
    ).start();
  }, [animacion]);

  return (
    <Animated.View
      style={{
        opacity: animacion,
      }}
    >
      <Text style={styles.texto}>Animación 1</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion1;
