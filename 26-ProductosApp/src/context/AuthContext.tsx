import React, { useReducer } from 'react';
import { createContext } from 'react';
import cafeApi from '../api/cafeApi';
import { LoginData, LoginResponse, Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
};

const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer( authReducer, authInicialState);

  const signIn = async({ correo, password }: LoginData ) => {
    try {

      const { data } = await cafeApi.post<LoginResponse>('/auth/login', { correo, password });
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });

    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Información incorrecta',
      });
    }
  };

  const signUp = () => {

  };

  const logOut = () => {

  };

  const removeError = () => {
    dispatch({ type: 'removeError' });
  };


  return (
    <AuthContext.Provider value={{
      ...state,
      signUp,
      signIn,
      logOut,
      removeError,
    }}>
      { children }
    </AuthContext.Provider>
  );
};
