import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import movieDB from '../api/movieDB';

export const HomeScreen = () => {

  useEffect(() => {
    movieDB.get('/now_playing')
      .then( resp => {
        console.log(resp.data);
      });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

