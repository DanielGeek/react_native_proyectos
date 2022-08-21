/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

export const ItemSeparator = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 8,
      }}
    />
  );
};
