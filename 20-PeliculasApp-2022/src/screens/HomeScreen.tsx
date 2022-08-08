/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradineeBackgroun } from '../components/GradineeBackgroun';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { setMainColors } = useContext( GradientContext );

  const getPosterColors = async( index: number ) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${ movie.poster_path }`;

    const [ primary = 'green', secondary = 'orange' ] = await getImageColors( uri );

    setMainColors({ primary, secondary });
  };

  if ( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={ 100 } />
      </View>
    );
  }

  return (
    <GradineeBackgroun>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 440 }}>
            <Carousel
                data={ nowPlaying }
                renderItem={ ({ item }: any ) => <MoviePoster movie={ item } />}
                sliderWidth={ windowWidth }
                itemWidth={ 300 }
                inactiveSlideOpacity={ 0.9 }
                onSnapToItem={ index => getPosterColors( index ) }
            />
          </View>

          {/* populars movies */}
          <HorizontalSlider title="Popular" movies={ popular } />
          <HorizontalSlider title="Top Rated" movies={ topRated } />
          <HorizontalSlider title="Upcoming" movies={ upcoming } />
        </View>
      </ScrollView>
    </GradineeBackgroun>
  );
};

