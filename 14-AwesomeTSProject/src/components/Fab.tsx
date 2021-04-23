import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ( { title, onPress, position = 'br' }: Props ) => {

  return (
    <View
      style={[
        styles.fabLocation,
        ( position === 'bl' ) ? styles.left : styles.right
        ]}
    >
      <TouchableNativeFeedback
        onPress={ onPress }
        background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }
      >
        <View style={styles.fab}>
          <Text style={ styles.fabText }> { title } </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25
  },
  left: {
    left: 25
  },
  fabLocationBL:{
    position: 'absolute',
    bottom: 25,
    left: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})