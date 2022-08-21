import React from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={ styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button
        title="Abir Modal"
        onPress={ () => setIsVisible(true) }
      />

      <Modal
        animationType="fade"
        visible={ isVisible }
        transparent={ true }
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}>

          <View style={{
            backgroundColor: 'white'
          }}>
            <HeaderTitle title="Modal" />
            <Text>Cuerpo del modal</Text>
            <Button
              title="Cerrar"
              onPress={ () => setIsVisible(false)}
            />
          </View>

        </View>
      </Modal>
    </View>
  );
};
