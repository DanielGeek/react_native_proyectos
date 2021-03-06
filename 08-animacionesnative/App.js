import React from 'react';
import {StyleSheet, View} from 'react-native';
// import Animacion1 from './components/Animacion1';
// import Animacion2 from './components/Animacion2';
// import Animacion3 from './components/Animacion3';
// import Animacion4 from './components/Animacion4';
import Animacion5 from './components/Animacion5';

const App = () => {
  return (
    <>
      <View style={styles.contenido}>
        {/* <Animacion1 /> */}
        {/* <Animacion2 /> */}
        {/* <Animacion3 /> */}
        {/* <Animacion4 /> */}
        <Animacion5 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
  },
});

export default App;
