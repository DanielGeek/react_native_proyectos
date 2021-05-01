import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
}

export const BotonCalc = ({texto, color = '#2D2D2D'}: Props) => {
  return (
    <View style={{...styles.boton, backgroundColor: color}}>
      <Text style={styles.botonTexto}>{texto}</Text>
    </View>
  );
};
