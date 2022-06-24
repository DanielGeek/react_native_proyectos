import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = ( { navigation }: Props ) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Ir página 2"
        onPress={ () => navigation.navigate('Pagina2Screen') }
      />

      <Text>Navegar con argumentos</Text>

      <TouchableOpacity
        onPress={ () => navigation.navigate('PersonaScreen', {
          id: 1,
          nombre: 'Pedro',
        }) }
      >
        <Text>Pedro</Text>
      </TouchableOpacity>
    </View>
  );
};
