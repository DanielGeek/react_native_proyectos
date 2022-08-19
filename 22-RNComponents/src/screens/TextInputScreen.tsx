import React, { useState } from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = ( value: string, field: string ) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={ styles.globalMargin }>
            <HeaderTitle title="TextInputs" />

            <TextInput
              style={ stylesScreen.inputStyle }
              placeholder="Ingrese su nombre"
              autoCorrect={ false }
              autoCapitalize="words"
              onChangeText={ ( value ) => onChange( value, 'name')}
            />
            <TextInput
              style={ stylesScreen.inputStyle }
              placeholder="Ingrese su email"
              autoCorrect={ false }
              autoCapitalize="none"
              onChangeText={ ( value ) => onChange( value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark"
            />

            <HeaderTitle title={ JSON.stringify( form, null, 3 )} />
            <HeaderTitle title={ JSON.stringify( form, null, 3 )} />

            <TextInput
              style={ stylesScreen.inputStyle }
              placeholder="Ingrese su teléfono"
              onChangeText={ ( value ) => onChange( value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={{ height: 100 }} />
          </View>

        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.3)',
      height: 50,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginVertical: 10,
    },
});
