import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NuevaOrden from './views/NuevaOrden';
import Menu from './views/Menu';
import DetallePlatillo from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import ResumenPedido from './views/ResumenPedido';
import ProgresoPedido from './views/ProgresoPedido';

import BotonResumen from './components/ui/BotonResumen';

// importar state de context para acceder de forma global a todos los states
import FirebaseState from './context/firebase/firebaseState';
import PedidosState from './context/pedidos/pedidosState';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer for a long period of time']);

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <PedidosState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#FFDA00'
                },
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
                headerTintColor: '#000'
              }}
            >
              <Stack.Screen
                name="NuevaOrden"
                component={NuevaOrden}
                options={{
                  title: "Nueva Orden"
                }}
              />

              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                  title: "Nuestro Menú",
                  headerRight: props => <BotonResumen />
                }}
              />

              <Stack.Screen
                name="DetallePlatillo"
                component={DetallePlatillo}
                options={{
                  title: null
                }}
              />

              <Stack.Screen
                name="FormularioPlatillo"
                component={FormularioPlatillo}
                options={{
                  title: "Ordenar Platillo"
                }}
              />

              <Stack.Screen
                name="ResumenPedido"
                component={ResumenPedido}
                options={{
                  title: "Resumen Pedido"
                }}
              />

              <Stack.Screen
                name="ProgresoPedido"
                component={ProgresoPedido}
                options={{
                  title: "Progreso de Pedido"
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidosState>
      </FirebaseState>
    </>
  );
};

export default App;
