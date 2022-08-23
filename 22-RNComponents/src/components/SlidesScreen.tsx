/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, SafeAreaView, ImageSourcePropType, Text, Dimensions, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { width:screenWidth } = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../assets/slide-1.png'),
  },
  {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../assets/slide-2.png'),
  },
  {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {};

export const SlidesScreen = ({ navigation }: Props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const { opacity, fadeIn } = useAnimation();
  const isVisible = useRef(false);
  const { theme: { colors }  } = useContext( ThemeContext );

  const renderItem = ( item: Slide ) => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: colors.background,
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
      }}>
        <Image
          source={ item.img }
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={{
            ...styles.title,
            color: colors.primary,
        }}>{ item.title }</Text>
        <Text style={{
            ...styles.subTitle,
            color: colors.text,
        }}>{ item.desc }</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}
    >
      <Carousel
        data={ items }
        renderItem={({ item }: any) => renderItem( item )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={ ( index ) => {
          setActiveIndex(index);
          if ( index === 2 ) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
      }}>
        <Pagination
          dotsLength={ items.length }
          activeDotIndex={ activeIndex }
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: colors.primary,
          }}
        />
        <Animated.View
          style={{
            opacity,
          }}
        >
          <TouchableOpacity style={{
            flexDirection: 'row',
            backgroundColor: colors.primary,
            width: 140,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
            activeOpacity={ 0.8 }
            onPress={ () => {
              if ( isVisible.current ) {
                navigation.navigate('HomeScreen');
              }
            }}
          >
            <Text style={{
              fontSize: 25,
              color: 'white',
            }}>
              Entrar
            </Text>
            <Icon
              name="chevron-forward-outline"
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#5856D6',
    },
    subTitle: {
      fontSize: 16,
    },
});
