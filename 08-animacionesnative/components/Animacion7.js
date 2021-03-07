/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const Animacion7 = () => {
  const [animacion1] = useState(new Animated.Value(0));
  const [animacion2] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animacion1, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.spring(animacion2, {
        toValue: 10,
        useNativeDriver: false,
      }),
      Animated.spring(animacion2, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.spring(animacion1, {
        toValue: 600,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, [animacion1, animacion2]);

  const estiloAnimacion = {
    transform: [
      {translateY: animacion1},
      {scale: animacion2},
    ],
  };

  return (
    <View>
      <Animated.View style={[styles.caja, estiloAnimacion]} />
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

export default Animacion7;
