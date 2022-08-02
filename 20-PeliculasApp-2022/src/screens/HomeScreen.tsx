/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
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
              data={ nowPlaying }
              renderItem={ ({ item }: any ) => <MoviePoster movie={ item } />}
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
              inactiveSlideOpacity={ 0.9 }
          />
        </View>

        {/* populars movies */}
        <HorizontalSlider title="Popular" movies={ popular } />
        <HorizontalSlider title="Top Rated" movies={ topRated } />
        <HorizontalSlider title="Upcoming" movies={ upcoming } />
      </View>
    </ScrollView>
  );
};

