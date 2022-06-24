/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Pagina2Screen'
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Pagina1Screen" options={{ title: "Página 1"}} component={ Pagina1Screen } />
      <Stack.Screen name="Pagina2Screen" options={{ title: "Página 2"}} component={ Pagina2Screen } />
      <Stack.Screen name="Pagina3Screen" options={{ title: "Página 3"}} component={ Pagina3Screen } />
      <Stack.Screen name="PersonaScreen" component={ PersonaScreen } />
    </Stack.Navigator>
  );
}