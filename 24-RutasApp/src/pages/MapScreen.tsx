/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

import { Map } from '../components/Map';

export const MapScreen = () => {
  return (
    <View style={{ flex: 1}}>
      <Map />
    </View>
  );
};
