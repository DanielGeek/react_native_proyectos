import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ProductsStackParams } from '../navigator/ProductsNavigator';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'>{}

export const ProductScreen = ({ navigation, route }: Props) => {

  const { id, name } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: ( name ) ? name : 'Nuevo producto',
    });
  }, []);

  return (
    <View>
      <Text>{ id } { name }</Text>
    </View>
  );
};
