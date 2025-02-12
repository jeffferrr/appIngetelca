// Importaciones necesarias para la navegación y componentes principales
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [isLoading, setIsLoading] = useState(true);
  const [userSession, setUserSession] = useState(null);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const sessionData = await AsyncStorage.getItem('userSession');
      if (sessionData) {
        setUserSession(JSON.parse(sessionData));
      }
    } catch (error) {
      console.log('Error al recuperar la sesión:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null; // O un componente de loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={userSession ? "Home" : "Login"}
        screenOptions={{
          headerShown: false, // Oculta la barra de navegación superior
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen 
          name="Home" 
          component={DrawerNavigator}
          initialParams={userSession}
        />
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

