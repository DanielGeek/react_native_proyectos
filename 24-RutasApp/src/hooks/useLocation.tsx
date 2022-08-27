import { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () => {

  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {

    getCurrentLocation()
      .then( location => {
        setInitialPosition(location);
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

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
  };
};
