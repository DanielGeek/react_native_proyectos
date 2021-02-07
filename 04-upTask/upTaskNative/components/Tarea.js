import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, ListItem, Left, Right, Icon, Toast} from 'native-base';
import {gql, useMutation} from '@apollo/client';

const ACTUALIZAR_TAREA = gql`
  mutation actualizarTarea($id: ID!, $input: TareaInput, $estado: Boolean ) {
    actualizarTarea(id: $id, input: $input, estado: $estado) {
      nombre
      id
      proyecto
      estado
    }
  }
`;

const Tarea = ({tarea}) => {

  // Apollo
  const [actualizarTarea] = useMutation(ACTUALIZAR_TAREA);

  // Cambia el estado de una tarea a completo o incompleto
  const cambiarEstado = async () => {
    // Obtener ID de la tarea
    const {id} = tarea;
    console.log(!tarea.estado);

    try {
      const {data} = await actualizarTarea({
        variables: {
          id,
          input: {
            nombre: tarea.nombre,
          },
          estado: !tarea.estado,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ListItem onPress={() => cambiarEstado()}>
        <Left>
          <Text>{tarea.nombre}</Text>
        </Left>

        <Right>
          {tarea.estado ? (
            <Icon
              style={[styles.icono, styles.completo]}
              name="ios-checkmark-circle"
            />
          ) : (
            <Icon
              style={[styles.icono, styles.incompleto]}
              name="ios-checkmark-circle"
            />
          )}
        </Right>
      </ListItem>
    </>
  );
};

const styles = StyleSheet.create({
  icono: {
    fontSize: 32,
  },
  completo: {
    color: 'green',
  },
  incompleto: {
    color: '#E1E1E1',
  },
});

export default Tarea;
