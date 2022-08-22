/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { useTheme } from '@react-navigation/native';

import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {

  const navigation = useNavigation();
  // const { colors } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as any)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#5856D6" size={23} />

        <Text style={styles.itemText}>{menuItem.name}</Text>

        <View style={{flex: 1}} />

        <Icon name="chevron-forward-outline" color="#5856D6" size={23} />
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
