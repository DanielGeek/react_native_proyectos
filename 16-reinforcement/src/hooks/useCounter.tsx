import { useState } from 'react';

export const useCounter = ( initial: number = 10 ) => {

  const [value, setValue] = useState(initial);

  const increment = ( number: number) => {
    setValue( value + number );
  }

  return {
    value,
    increment
  }

}
