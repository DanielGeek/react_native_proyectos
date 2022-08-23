/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

  const { opacity, position, startMovingPosition, fadeIn, fedeOut } = useAnimation();
  const { theme: { colors } } = useContext( ThemeContext );

  return (
    <View style={ styles.container }>
      <Animated.View style={{
        ...styles.purpleBox,
        backgroundColor: colors.primary,
        marginBottom: 20,
        opacity,
        transform: [{
          translateX: position,
        }],
      }} />

      <Button
        title="FadeIn"
        onPress={ () => {
          fadeIn();
          startMovingPosition( 100 );
        }}
        color={ colors.primary }
      />

      <Button
        title="FadeOut"
        onPress={ fedeOut }
        color={ colors.primary }
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    purpleBox: {
      width: 150,
      height: 150,
    },

});
