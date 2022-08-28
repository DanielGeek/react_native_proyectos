import { useEffect, useRef, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () => {

  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });

  const [userLocation, setUserLocation] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });

  const watchId = useRef<number>();

  useEffect(() => {

    getCurrentLocation()
      .then( location => {
        setInitialPosition(location);
        setUserLocation(location);
        setHasLocation(true);
      });

  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise(( resolve, reject ) => {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });

        },
        (err) => reject({ err }),
        {
          enableHighAccuracy: true,
        }
      );
    });
  };

  const followUserLocation = () => {
    watchId.current = Geolocation.watchPosition(
      ({ coords }) => {
        console.log({coords});
        setUserLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (err) => console.log(err),
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
      }
    );
  };

  const stopFollowUserLocation = () => {
    if ( watchId.current )
        Geolocation.clearWatch( watchId.current );
  };

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    stopFollowUserLocation,
    userLocation,
  };
};
