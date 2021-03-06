/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const Animacion4 = () => {

  const [ animacion ] = useState( new Animated.Value(0) );

  useEffect(() => {
    Animated.timing(
      animacion, {
        toValue: 360, // valor al que llega
        duration: 500, // cantidad de tiempo en llegar
        useNativeDriver: false,
      }
    ).start();
  }, [animacion]);

  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  });

  const estiloAnimacion = {
    transform: [{rotate: interpolacion}],
  };

  return (
    <View>
      <Animated.View
          style={[styles.caja, estiloAnimacion]}
          ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
   width: 100,
   height: 100,
   backgroundColor: 'cornflowerblue',
  },
});

export default Animacion4;
