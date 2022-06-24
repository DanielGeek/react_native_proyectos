/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={ StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}