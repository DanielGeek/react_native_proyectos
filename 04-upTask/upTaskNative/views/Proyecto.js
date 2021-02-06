import React from 'react';
import { Text } from 'native-base';

const Proyecto = ({route}) => {
  
  console.log(route.params);
  
  return (
    <Text>
      Proyecto
    </Text>
  );
};

export default Proyecto;
