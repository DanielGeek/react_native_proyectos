import React, { createContext, useReducer } from "react";
import { authReducer } from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (iconName: string) => void;
}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer( authReducer, authInitialState );

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  const changeFavoriteIcon = ( iconName: string ) => {
    dispatch({ type: 'changeFavIcon', payload: iconName });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logout,
      changeFavoriteIcon,
    }}>
      { children }
    </AuthContext.Provider>
  );
};
