import React, { ReactElement } from 'react';
import { ScrollView } from 'react-native';
import { GradientBackground, Text } from '@components';
import styles from "./settings.styles";

export default function Settings(): ReactElement {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{color: "white"}}>Settings</Text>
      </ScrollView>
    </GradientBackground>
  )
}
