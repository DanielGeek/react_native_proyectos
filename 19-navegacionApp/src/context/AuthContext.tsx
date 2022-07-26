import React, { createContext } from "react";

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
}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

  return (
    <AuthContext.Provider value={{
      authState: authInitialState,
      signIn: () => {},
    }}>
      { children }
    </AuthContext.Provider>
  );
};
