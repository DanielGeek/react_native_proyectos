import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Image
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
});

export default App;
