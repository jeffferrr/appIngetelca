import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import MainContent from '../home/pagInicial';
import PerfilPersonal from '../perfil/perfilPersonal';

const Drawer = createDrawerNavigator();

/**
 * Componente DrawerNavigator
 * Configura el menú lateral de la aplicación con sus diferentes secciones
 * Incluye:
 * - Panel Principal: Dashboard principal de la aplicación
 * - Perfil: Información del usuario actual
 */
const DrawerNavigator = ({ route }) => {
  // Obtener los parámetros de la ruta inicial
  const { username, permisos } = route.params || {};

  return (
    <Drawer.Navigator
      screenOptions={{
        // Configuración del estilo del encabezado
        headerStyle: {
          backgroundColor: '#001f3f',
        },
        headerTintColor: '#fff',
        // Configuración del estilo del drawer
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280, // Ancho fijo del menú lateral
        },
        // Colores para los items del menú
        drawerActiveTintColor: '#4a90e2',
        drawerInactiveTintColor: '#666',
      }}
    >
      {/* Pantalla del Panel Principal */}
      <Drawer.Screen 
        name="Panel Principal" 
        component={MainContent}
        initialParams={{ username, permisos }}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="dashboard" size={24} color={color} />
          ),
        }}
      />
      {/* Pantalla del Perfil */}
      <Drawer.Screen 
        name="Perfil" 
        component={PerfilPersonal}
        initialParams={{ username, permisos }}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
