import React from 'react';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={ styles.container }>
      <View style={{
            ...styles.cajaMorada,
            width: width * 0.6,
      }} />
      <View style={ styles.cajaNaranja } />
    </View>
    <Text style={ styles.title }>W: { width }, H: { height } </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    // width: '20%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
