/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const { theme: { colors } } = useContext( ThemeContext );

  const { isActive, isHungry,isHappy } = state;

  const onChange = ( value: boolean, field: string ) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{ marginHorizontal: 20 }}>

      <HeaderTitle title="Switches" />

      <View style={ styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isActive</Text>
        <CustomSwitch isOn={ isActive } onChange={ ( value ) => onChange( value, 'isActive' ) } />
      </View>

      <View style={ styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHungry</Text>
        <CustomSwitch isOn={ isHungry } onChange={ ( value ) => onChange( value, 'isHungry' ) } />
      </View>

      <View style={ styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHappy</Text>
        <CustomSwitch isOn={ isHappy } onChange={ ( value ) => onChange( value, 'isHappy' ) } />
      </View>

      <Text style={ styles.switchText }>
        { JSON.stringify( state, null, 5 )}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
      fontSize: 25,
    },
});
