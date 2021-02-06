import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Button,
  Text,
  H2,
  Content,
  List,
  ListItem,
  Left,
  Right,
} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

const Proyectos = () => {
  const navigation = useNavigation();

  return (
    <Container
      style={([globalStyles.contenedor], {backgroundColor: '#E84347'})}>
      <Button
        style={[globalStyles.boton, {marginTop: 30}]}
        square
        block
        onPress={() => navigation.navigate('NuevoProyecto')}>
        <Text style={globalStyles.botonTexto}>Nuevo Proyecto</Text>
      </Button>

      <H2 style={globalStyles.subtitulo}>Selecciona un Proyecto</H2>
    </Container>
  );
};

export default Proyectos;
