import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native'
import { GradientBackground } from '@components';
import styles from "./single-player-game.styles";
import { Board } from '@components';
import { printFormattedBoard, isEmpty, isFull, getAvailableMoves, BoardState } from "@utils";
import { isTerminal } from './../../utils/board';

export default function Game(): ReactElement {
  // prettier-ignore
  const b: BoardState = [
    'x', 'x', 'o',
    'o', 'x', 'x',
    'x', 'o', 'o'
  ];
  printFormattedBoard(b);
  console.log(isTerminal(b));
  // console.log(isEmpty(b));
  // console.log(isFull(b));
  // console.log(getAvailableMoves(b));
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
          <Board
              onCellPressed={index => {
                alert(index);
              }}
              state={b}
              size={300}
          />
      </SafeAreaView>
    </GradientBackground>
  )
}
