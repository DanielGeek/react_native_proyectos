/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

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
        <Text style={ styles.switchText }>isActive</Text>
        <CustomSwitch isOn={ isActive } onChange={ ( value ) => onChange( value, 'isActive' ) } />
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
  },
  switchText: {
      fontSize: 25,
    },
});
