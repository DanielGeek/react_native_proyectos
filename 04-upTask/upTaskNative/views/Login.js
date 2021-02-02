import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Button,
  Text,
  H1,
  Input,
  Form,
  Item,
  Toast,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

const Login = () => {

  // React navigation
  const navigation = useNavigation();

  return (
    <Container style={[globalStyles.contenedor, { backgroundColor: '#e84347' }]}>
      <View style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>UpTask</H1>

        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Email" />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input secureTextEntry={true} placeholder="Password" />
          </Item>
        </Form>

        <Button squeare block style={globalStyles.boton}>
          <Text style={globalStyles.botonTexto}>Iniciar Sesión</Text>
        </Button>
        <Text
          onPress={() => navigation.navigate('CrearCuenta')}
          style={globalStyles.enlace}>
          {' '}
          Crear Cuenta
        </Text>
      </View>
    </Container>
  );
};

export default Login;
