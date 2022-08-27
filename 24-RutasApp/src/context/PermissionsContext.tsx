import React, { createContext, useState } from "react";
import { PermissionStatus } from "react-native-permissions";


export interface PermissionsState {
  locationStatus: PermissionStatus
}

export const permissionInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({ children }: any ) => {

  const askLocationPermission = () => {

  };
  const checkLocationPermission = () => {

  };

  const [permissions, setPermissions] = useState(permissionInitState);

  return (
    <PermissionsContext.Provider value={{
      permissions,
      askLocationPermission,
      checkLocationPermission,
    }}>
      { children }
    </PermissionsContext.Provider>
  );
};

