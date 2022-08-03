/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}


export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <View>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row'}}>
          <Icon
              name="star-outline"
              color="grey"
              size={ 16 }
          />

          <Text> { movieFull.vote_average }</Text>

          <Text style={{ marginLeft: 5}}>
            - { movieFull.genres.map( g => g.name ).join(', ' )}
          </Text>
        </View>
      </View>

      {/* Casting */}
    </View>
  );
};
