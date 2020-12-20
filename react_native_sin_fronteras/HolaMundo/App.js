import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: '1', name: 'Daniel' },
          { key: '2', name: 'Angel' },
          { key: '3', name: 'React' },
          { key: '4', name: 'React Native' },
          { key: '5', name: 'Javascript' },
          { key: '6', name: 'Node' },
          { key: '7', name: 'PHP' },
          { key: '8', name: 'CSS' },
          { key: '9', name: 'JQuery' },
          { key: '10', name: 'MySQL' },
          { key: '11', name: 'AWS' },
          { key: '12', name: 'Typescript' },
          { key: '13', name: 'Webpack' },
          { key: '14', name: 'Laravel' },
          { key: '15', name: 'HTML' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  }
});
