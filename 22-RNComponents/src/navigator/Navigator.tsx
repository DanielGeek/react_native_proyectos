import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../components/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { View } from 'react-native';

const Stack = createStackNavigator();

export const Navigator = () => {

  const { theme } = useContext( ThemeContext );

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer
        theme={ theme }
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              // backgroundColor: 'white',
            },
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
          <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
          <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
          <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
          <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
