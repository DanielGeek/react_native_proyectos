/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
    }}
    drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs} />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={{
            uri:'https://www.caribbeangamezone.com/?attachment_id=5195',
          }}
          style={ styles.avatar }
        />
      </View>

      <View style={ styles.menuContainer }>
          <TouchableOpacity
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('Tabs')}
            >
            <Text style={ styles.menuTexto }>Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('SettingsScreen')}
            >
            <Text style={ styles.menuTexto }>Ajustes</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
