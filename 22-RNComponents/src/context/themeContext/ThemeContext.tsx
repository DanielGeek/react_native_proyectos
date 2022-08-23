/* eslint-disable react/react-in-jsx-scope */
import React, { createContext } from 'react';

interface ThemeContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeContextProps );

export const ThemeProvider = ({ children }: any) => {

  const theme = {};

  const setDarkTheme = () => {
    console.log('setDarkTheme');
  };


  const setLightTheme = () => {
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
