/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
interface Props {
  markers?: typeof Marker[];
}

export const Map = ({ markers }: Props) => {

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      (err) => console.log({ err }),
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <>
    <MapView
        style={{ flex: 1}}
        showsUserLocation
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
     >
      {/* <Marker
        image={ require('../assets/custom-marker.png')}
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        title="This is a title"
        description='This is a description of the marker'
      /> */}
     </MapView>
    </>
  )
}
