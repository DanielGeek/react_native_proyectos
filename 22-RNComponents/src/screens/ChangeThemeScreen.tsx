/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {

  const { setDarkTheme, setLightTheme, theme: { colors } } = useContext( ThemeContext );

  return (
    <View style={ styles.globalMargin }>
      <HeaderTitle title="Theme" />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
            onPress={ setLightTheme }
            activeOpacity={ 0.8 }
            style={{
              width: 150,
              height: 50,
              borderRadius: 20,
              backgroundColor: colors.primary,
              justifyContent: 'center',
        }}>
          <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 22,
          }}>
            Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={ setDarkTheme }
            activeOpacity={ 0.8 }
            style={{
              width: 150,
              height: 50,
              borderRadius: 20,
              backgroundColor: colors.primary,
              justifyContent: 'center',
        }}>
          <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 22,
          }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
