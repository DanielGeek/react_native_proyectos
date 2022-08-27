import { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () => {

  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    longitud: 0,
    latitude: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setInitialPosition({
          latitude: coords.latitude,
          longitud: coords.longitude,
        });

        setHasLocation(true);
      },
      (err) => console.log({ err }),
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return {
    hasLocation,
    initialPosition,
  };
};
