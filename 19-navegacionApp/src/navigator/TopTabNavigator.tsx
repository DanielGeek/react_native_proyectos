/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle:{
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'Contacts':
              iconName = 'people-outline';
              break;

            case 'Albums':
              iconName = 'albums-outline';
              break;
            }
          return <Icon name={ iconName } size={ 20 } color={ color } />
        },
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}