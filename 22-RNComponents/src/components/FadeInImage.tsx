/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const { theme: { colors }  } = useContext( ThemeContext );

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {
        isLoading && <ActivityIndicator style={{ position: 'absolute' }} color={colors.primary} size={30} />
      }
      <Animated.Image
        source={{ uri }}
        onLoadEnd={ finishLoading }
        style={{
          ...style as any,
          // width: '100%',
          // height: 400,
          opacity,
        }}
      />
    </View>
  );
};
