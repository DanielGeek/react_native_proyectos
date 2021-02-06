import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Container,
  Button,
  Text,
  H1,
  Form,
  Item,
  Input,
  Toast,
} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

const NuevoProyecto = () => {
  // state del componente
  const [nombre, guardarNombre] = useState('');
  const [mensaje, guardarMensaje] = useState(null);

  // Validar crear proyecto
  const handleSubmit = () => {
    if (nombre === '') {
      guardarMensaje('El Nombre del Proyecto es obligatorio');
      return;
    }

    // Guardar el Proyecto en la base de datos
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
    <Container
      style={([globalStyles.contenedor], {backgroundColor: '#E84347'})}>
      <View style={globalStyles.contenido}>
        <H1 style={globalStyles.subtitulo}>Nuevo Proyecto</H1>

        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Nombre del Proyecto"
              onChangeText={(texto) => guardarNombre(texto)}
            />
          </Item>
        </Form>

        <Button
          style={[globalStyles.boton, {marginTop: 30}]}
          square
          block
          onPress={() => handleSubmit() }>
          <Text style={globalStyles.botonTexto}>Crear Proyecto</Text>
        </Button>

        {mensaje && mostrarAlerta()}
      </View>
    </Container>
  );
};

export default NuevoProyecto;
