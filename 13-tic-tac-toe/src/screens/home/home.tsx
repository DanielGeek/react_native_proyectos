import React, { ReactElement } from 'react'
import { View, Text, Button, ScrollView } from "react-native";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground } from "@components";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">
}

export default function Home({ navigation }: HomeProps): ReactElement {
    return (
      <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                  <Text>Home</Text>
                  <Button
                        title="Game"
                        onPress={() => {
                              navigation.navigate("Game", {gameId: "455"})
                        }}
                  />
            </ScrollView>
      </GradientBackground>
    );
}
