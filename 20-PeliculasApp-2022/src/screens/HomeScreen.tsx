/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native';
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
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View style={{ height: 440 }}>
          <Carousel
              data={ peliculasEnCine }
              renderItem={ ({ item }: any ) => <MoviePoster movie={ item } />}
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
          />
        </View>

        {/* populars movies */}
        <View style={{ backgroundColor: 'red', height: 260 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold'}}>En cine</Text>
          <FlatList
              data={ peliculasEnCine }
              renderItem={ ({ item }: any ) => (
                <MoviePoster movie={ item } width={ 140 } height={ 200 } />
              )}
              keyExtractor={ (item) => item.id.toString() }
              horizontal={ true }
              showsHorizontalScrollIndicator={ false }
          />
        </View>
      </View>
    </ScrollView>
  );
};

