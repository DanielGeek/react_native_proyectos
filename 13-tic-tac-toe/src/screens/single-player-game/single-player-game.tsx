import React, { ReactElement, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { GradientBackground } from '@components';
import styles from "./single-player-game.styles";
import { Board } from '@components';
import { printFormattedBoard, isEmpty, isFull, getAvailableMoves, BoardState } from "@utils";
import { isTerminal } from './../../utils/board';

export default function Game(): ReactElement {
  // prettier-ignore
  const [state, setstate] = useState<BoardState>([
    null, null, null,
    null, null, null,
    null, null, null
  ])
  const handleOnCellPressed = (cell: number): void => {
    const stateCopy: BoardState = [ ...state];
    if (stateCopy[cell] || isTerminal(stateCopy))
    return;
    stateCopy[cell] = "x";
    setstate(stateCopy);
  }

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
          <Board
              disabled={Boolean(isTerminal(state))}
              onCellPressed={cell => {
                handleOnCellPressed(cell)
              }}
              state={state}
              size={300}
          />
      </SafeAreaView>
    </GradientBackground>
  )
}
