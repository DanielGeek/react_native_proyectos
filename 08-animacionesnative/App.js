import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Animacion1 from './components/Animacion1';
import Animacion2 from './components/Animacion2';

const App = () => {
  return (
    <>
      <View style={styles.contenido}>
        {/* <Animacion1 /> */}
        <Animacion2 />
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
