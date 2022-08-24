/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props ) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >
        {/* Types */}
        <View style={{
          ...styles.container,
          marginTop: 370,
        }}>
          <Text style={ styles.title }>Types</Text>
          <View style={{ flexDirection: 'row' }}>
            {
              pokemon.types.map(({ type }) => (
                <Text
                  style={{
                    ...styles.regularText,
                    marginRight: 10,
                  }}
                  key={ type.name }
                >
                  { type.name }
                </Text>
              ))
            }
          </View>
        </View>

        <View style={{
          ...styles.container,
          marginTop: 20,
        }}>
          <Text style={ styles.title }>Sprites</Text>
        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 19,
  },
});
