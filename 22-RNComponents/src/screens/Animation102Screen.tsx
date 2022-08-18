/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={ styles.purpleBox } />
    </View>
  );
};

const styles = StyleSheet.create({

    purpleBox: {
      backgroundColor: 'red',
      width: 150,
      height: 150,
    },

});
