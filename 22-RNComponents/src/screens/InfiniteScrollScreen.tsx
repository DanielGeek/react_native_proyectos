/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { FadeInImage } from '../components/FadeInImage';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const { theme: { colors }  } = useContext( ThemeContext );

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + 1;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);

  };

  const renderItem = ( item: number ) => {
    return (
        <FadeInImage
          uri={`https://picsum.photos/id/${ item }/1024/1024`}
          style={{
            width: '100%',
            height: 400,
          }}
        />
      );
      // <Image
      //   source={{ uri: `https://picsum.photos/id/${ item }/500/400`}}
      //   style={{
      //     width: '100%',
      //     height: 400,
      //   }}
      // />
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={ numbers }
        keyExtractor={ ( item ) => item.toString() }
        renderItem={ ({ item }) => renderItem( item ) }

        ListHeaderComponent={ () => (
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}

        onEndReached={ loadMore }
        onEndReachedThreshold={ 0.5 }

        ListFooterComponent={() => (
          <View style={{
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ActivityIndicator size={25} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    textItem: {
      backgroundColor: 'green',
      height: 150,
    },
});
