import React, { useEffect } from 'react';

import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

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
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="add-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="barbell-outline" />
        <TouchableIcon iconName="bulb-outline" />
        <TouchableIcon iconName="cloud-outline" />
        <TouchableIcon iconName="happy-outline" />
      </Text>
    </View>
  );
};
