/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { peliculasEnCine, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if ( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={ 100 } />
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      <View style={{ height: 440 }}>
        <Carousel
            data={ peliculasEnCine }
            renderItem={ ({ item }: any ) => <MoviePoster movie={ item } />}
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
        />
      </View>
    </View>
  );
};

