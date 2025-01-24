// Importaciones necesarias para la navegación y componentes principales
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login/loginInicial';
import DrawerNavigator from './sliderExterno/drawerNavigator';

// Crear instancia del navegador de pila
const Stack = createStackNavigator();

/**
 * Componente principal de la aplicación
 * Configura la estructura de navegación principal con dos pantallas:
 * - Login: Pantalla inicial de autenticación
 * - Home: Navegador de drawer que contiene el panel principal y perfil
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // Oculta la barra de navegación superior
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos globales de la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

