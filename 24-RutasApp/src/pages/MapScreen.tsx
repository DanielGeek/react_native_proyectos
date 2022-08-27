/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const MapScreen = () => {
  return (
    <View style={{ flex: 1}}>
      <MapView
        style={{ flex: 1}}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
     />
    </View>
  );
};
