/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {

  const navigation = useNavigation();
  const { theme: { colors } } = useContext( ThemeContext );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as any)}
    >
      <View style={styles.container}>
        <Icon
          name={menuItem.icon}
          color={colors.primary}
          size={23} />

        <Text style={styles.itemText}>{menuItem.name}</Text>

        <View style={{flex: 1}} />

        <Icon
          name="chevron-forward-outline"
          color={colors.primary}
          size={23}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
