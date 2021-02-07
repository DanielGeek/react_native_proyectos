import React from 'react';
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

  return (
    <Container
      style={([globalStyles.contenedor], {backgroundColor: '#e84347'})}>
      <Form style={{marginHorizontal: '2.5%', marginTop: 20}}>
        <Item inlineLabel last style={globalStyles.input}>
          <Input placeholder="Nombre Tarea" />
        </Item>

        <Button style={globalStyles.boton} square block>
          <Text>Crear Tarea</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default Proyecto;
