import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{
          ...styles.globalMargin,
          marginTop: top + 10,
      }}>
      <Text style={ styles.title } >Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colores.primary} />
        <Icon name="add-outline" size={80} color={colores.primary} />
        <Icon name="aperture-outline" size={80} color={colores.primary} />
        <Icon name="barbell-outline" size={80} color={colores.primary} />
        <Icon name="bulb-outline" size={80} color={colores.primary} />
        <Icon name="cloud-outline" size={80} color={colores.primary} />
        <Icon name="happy-outline" size={80} color={colores.primary} />
      </Text>
    </View>
  );
};
