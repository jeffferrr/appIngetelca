import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login/loginInicial';
import DrawerNavigator from './sliderExterno/drawerNavigator';
import { addSolicitud } from './solicitudDispositivos/InfoDispositivos'; // Importamos la función

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    addSolicitud(); // Llamamos a la función importada
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
