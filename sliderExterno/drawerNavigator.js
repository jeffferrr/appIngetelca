import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import MainContent from '../home/pagInicial';
import PerfilPersonal from '../perfil/perfilPersonal';
import VistaPrincipalAS from '../asignacionSupervisores/vistaPrincipalAS';
import VistaPrincipalRT from '../reporteriaTecnicos/vistaPrincipalRT';
import VistaPrincipalHA from '../historialDeArchivos/vistaPrincipalHA';
import VistaPrincipalB from '../bodega/vistaPrincipalB';
import SoliDispositivos from '../solicitudDispositivos/SoliDispositivos';


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
      <Drawer.Screen 
        name="Asignación Supervisores" 
        component={VistaPrincipalAS}
        initialParams={{ username, permisos }}
        options={{
          drawerItemStyle: { display: 'none' }, // Oculta el item del drawer
          headerShown: true, // Mantiene el header para navegación
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
     {
    permisos.includes('ADMINISTRADOR') && (
    <Drawer.Screen
      name="Solicitud de Dispositivos"
      component={SoliDispositivos}
      initialParams={{ username, permisos }}
      options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name="devices" size={24} color={color} />
        ),
      }}
    />
  )
}
      <Drawer.Screen 
        name="Reportería Técnicos" 
        component={VistaPrincipalRT}
        initialParams={{ username, permisos }}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: true,
        }}
      />
      <Drawer.Screen 
        name="Historial de Archivos" 
        component={VistaPrincipalHA}
        initialParams={{ username, permisos }}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: true,
        }}
      />
      <Drawer.Screen 
        name="Bodega" 
        component={VistaPrincipalB}
        initialParams={{ username, permisos }}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: true,
        }}
      /> 
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
