import React from 'react';
import { Text } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuLateralBasico />
    </NavigationContainer>
  );
};

export default App;
