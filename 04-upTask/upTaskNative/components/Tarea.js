import React from 'react';
import {Text, ListItem, Left, Right, Icon, Toast} from 'native-base';

const Tarea = ({tarea}) => {
  return (
    <>
      <ListItem>
        <Left>
          <Text>{tarea.nombre}</Text>
        </Left>

        <Right>
          <Text>Icono aqui</Text>
        </Right>
      </ListItem>
    </>
  );
};

export default Tarea;
