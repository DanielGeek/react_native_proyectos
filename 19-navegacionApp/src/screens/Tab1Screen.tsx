import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View>
      <Text>Tab1Screen</Text>
    </View>
  );
};
