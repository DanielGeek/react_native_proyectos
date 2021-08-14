import React, { ReactElement } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { GradientBackground } from '@components';
import styles from "./single-player-game.styles";
import { Board } from '@components';

export default function Game(): ReactElement {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
          <Board
              state={['x', 'o', null, 'x', 'o', null, 'x', 'o', null]}
              size={300}
          />
      </SafeAreaView>
    </GradientBackground>
  )
}
