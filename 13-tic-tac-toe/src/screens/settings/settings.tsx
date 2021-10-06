import React, { ReactElement, useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Switch } from 'react-native';
import { GradientBackground, Text } from '@components';
import styles from "./settings.styles";
import { colors } from '@utils';
import AsyncStorage from '@react-native-async-storage/async-storage';


const difficulties = {
  "1": "Beginner",
  "3": "Intermediate",
  "4": "Hard",
  "-1": "Impossible"
};

type SettingsType = {
  difficulty: keyof typeof difficulties;
  haptics: boolean;
  sounds: boolean;
};

const defaultSettings: SettingsType = {
  difficulty: "-1",
  haptics: false,
  sounds: true
};

export default function Settings(): ReactElement | null {
  const [settings, setSettings] = useState<SettingsType | null>(null);

  const loadSettings = async () => {
    try {
      const settings = await AsyncStorage.getItem("@settings");
      settings !== null ? setSettings(JSON.parse(settings)) : setSettings(defaultSettings);
    } catch (error) {
      setSettings(defaultSettings);
    }
  }

  useEffect(() => {
    loadSettings();
  }, []);

  if (!settings) return null;

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.field}>
          <Text style={styles.label}>Bot Difficulty</Text>
          <View style={styles.choices}>
            {Object.keys(difficulties).map(level => {
              return (
                <TouchableOpacity style={styles.choice} key={level}>
                  <Text style={styles.choiceText}>{difficulties[level as keyof typeof difficulties]}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>

        <View style={[styles.field, styles.switchField]}>
            <Text style={styles.label}>Sounds</Text>
            <Switch
              trackColor={{
                false: colors.purple,
                true: colors.lightPurple
              }}
              thumbColor={colors.lightGreen}
              ios_backgroundColor={colors.purple}
              value={settings.sounds}
              // onValueChange={() => {
              //   setState(!state);
              // }}
            />
        </View>

        <View style={[styles.field, styles.switchField]}>
            <Text style={styles.label}>Haptics/Vibrations</Text>
            <Switch
              trackColor={{
                false: colors.purple,
                true: colors.lightPurple
              }}
              thumbColor={colors.lightGreen}
              ios_backgroundColor={colors.purple}
              value={settings.haptics}
              // onValueChange={() => {
              //   setState(!state);
              // }}
            />
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
