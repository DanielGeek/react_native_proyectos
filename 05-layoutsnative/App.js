import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}></View>
        <View style={styles.caja4}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    flexDirection: 'column',
  },
  caja1: {
    padding: 20,
    backgroundColor: 'navy',
    flex: 1,
  },
  caja2: {
    padding: 20,
    backgroundColor: 'yellow',
    flex: 1,
  },
  caja3: {
    padding: 20,
    backgroundColor: 'green',
    flex: 1,
  },
  caja4: {
    padding: 20,
    backgroundColor: 'teal',
    flex: 3,
  },
});

export default App;
