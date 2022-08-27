/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';


interface Props {
  markers?: typeof Marker[];
}

export const Map = ({ markers }: Props) => {

  const { hasLocation, initialPosition, getCurrentLocation } = useLocation();

  const mapViewRef = useRef<MapView>();

  const centerPosition = async() => {

    const { latitude, longitude } = await getCurrentLocation();

    mapViewRef.current?.animateCamera({
      center: { latitude, longitude },
    });
  };

  if ( !hasLocation ) {
    return <LoadingScreen />;
  }

  return (
    <>
    <MapView
        ref={ (el) => mapViewRef.current = el! }
        style={{ flex: 1}}
        showsUserLocation
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
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
        iconName="compass-outline"
        onPress={centerPosition}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
     />
    </>
  )
}
