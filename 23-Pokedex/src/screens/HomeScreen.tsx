import React from 'react';
import { Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  usePokemonPaginated();

  return (
    <>
      <Image
        source={ require('../assets/pokebola.png')}
        style={ styles.pokebolaBG }
      />
      <Text style={{
          ...styles.title,
          ...styles.globalMargin,
          top: top + 20,
      }}>Pokedex</Text>
    </>
  );
};
