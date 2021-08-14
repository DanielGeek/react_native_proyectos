import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from "../text/text";

type Cell = "x" | "o" | null;
type BoardProps = {
  state: [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
  size: number;
};

export default function Board( { state, size }: BoardProps ): ReactElement {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: 'green',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
    >
      {state.map((cell, index) => {
        return (
          <TouchableOpacity
            style={{
              width: "33.33333%",
              height: "33.33333%",
              backgroundColor: "#fff",
              borderWidth: 1,
            }}
            key={index}>
            <Text>{cell}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
