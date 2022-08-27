/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';


interface Props {
  markers?: typeof Marker[];
}

export const Map = ({ markers }: Props) => {

  const { hasLocation, initialPosition } = useLocation();

  if ( !hasLocation ) {
    return <LoadingScreen />;
  }

  return (
    <>
    <MapView
        style={{ flex: 1}}
        showsUserLocation
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitud,
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

     <Fab
        iconName='star-outline'
        onPress={() => console.log('Hola Fab')}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
     />
    </>
  )
}
