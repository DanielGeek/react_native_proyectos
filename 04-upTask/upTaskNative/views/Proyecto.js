import React, {useState} from 'react';
import {
  Container,
  Button,
  Text,
  H2,
  Content,
  List,
  Form,
  Item,
  Input,
  Toast,
} from 'native-base';
import globalStyles from '../styles/global';

const Proyecto = ({route}) => {
  // console.log(route.params);

  // State del componente
  const [nombre, guardarNombre] = useState('');
  const [mensaje, guardarMensaje] = useState(null);

  // Validar y crear tareas
  const handleSubmit = () => {
    if (nombre === '') {
      guardarMensaje('El nombre de la tarea es obligatorio');
      return;
    }

    // Almacenarla en la base de datos
  };

  const mostrarAlerta = () => {
    Toast.show({
      text: mensaje,
      buttonText: 'OK',
      duration: 5000,
    });
  };

  return (
    <Container
      style={([globalStyles.contenedor], {backgroundColor: '#e84347'})}>
      <Form style={{marginHorizontal: '2.5%', marginTop: 20}}>
        <Item inlineLabel last style={globalStyles.input}>
          <Input
            placeholder="Nombre Tarea"
            value={nombre}
            onChangeText={(texto) => guardarNombre(texto)}
          />
        </Item>

        <Button
          style={globalStyles.boton}
          square
          block
          onPress={() => handleSubmit()}>
          <Text>Crear Tarea</Text>
        </Button>
      </Form>
      {mensaje && mostrarAlerta()}
    </Container>
  );
};

export default Proyecto;
