import React, {useState} from 'react';
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
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

const CrearCuenta = () => {
  // State del formulario
  const [nombre, guardarNombre] = useState('');
  const [email, guardarEmail] = useState('');
  const [password, guardarPassword] = useState('');

  const [mensaje, guardarMensaje] = useState(null);

  // React Navigation
  const navigation = useNavigation();

  // Cuando el usuario presiona en crear cuenta
  const handleSubmit = () => {
    // Validar
    if (nombre === '' || email === '' || password === '') {
      // Mostrar un error
      guardarMensaje('Todos los campos son obligatorios');
      return;
    }

    // Password al menos 6 caracteres
    if (password.length < 6) {
      guardarMensaje('El password debe ser de al menos 6 caracteres');
      return;
    }

    guardarMensaje(null);

    // guardar el usuario
  };

  // Muestra un mensaje toast
  const mostrarAlerta = () => {
    Toast.show({
      text: mensaje,
      buttonText: 'OK',
      duration: 5000,
    });
  };

  return (
    <Container style={[globalStyles.contenedor, {backgroundColor: '#e84347'}]}>
      <View style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>UpTask</H1>

        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Nombre"
              onChangeText={(texto) => guardarNombre(texto)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Email"
              onChangeText={(texto) => guardarEmail(texto)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(texto) => guardarPassword(texto)}
            />
          </Item>
        </Form>

        <Button
          squeare
          block
          style={globalStyles.boton}
          onPress={() => handleSubmit()}>
          <Text style={globalStyles.botonTexto}>Crear Cuenta</Text>
        </Button>

        {mensaje && mostrarAlerta()}
      </View>
    </Container>
  );
};

export default CrearCuenta;
