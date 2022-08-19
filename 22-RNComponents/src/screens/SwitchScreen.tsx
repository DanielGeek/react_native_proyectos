import React, { useState } from 'react';
import { Platform, Switch, View } from 'react-native';

export const SwitchScreen = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled( !isEnabled );

  return (
    <View style={{ marginTop: 100 }}>
      <Switch
        trackColor={{ false: "D9D9DB", true: "#5856D6" }}
        thumbColor={ ( Platform.OS === 'android' ) ? '#5856D6' : '' }
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
