import React from 'react';
import {SafeAreaView} from 'react-native';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';

export const App = () => {
  return (
    <SafeAreaView>
      {/* <HolaMundoScreen />
      <ContadorScreen /> */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};
