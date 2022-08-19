import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
  return (
    <View style={ styles.globalMargin }>
      <HeaderTitle title="TextInputs" />

      <TextInput
        style={ stylesScreen.inputStyle }
      />
    </View>
  );
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.3)',
      height: 50,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
});
