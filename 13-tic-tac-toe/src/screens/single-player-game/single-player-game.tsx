import React from 'react'
import { View, Text } from 'react-native'
import { GradientBackground } from '@components';
import styles from "./single-player-game.styles";

export default function Game() {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text>Game</Text>
      </View>
    </GradientBackground>
  )
}
