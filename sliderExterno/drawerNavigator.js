import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import MainContent from '../home/pagInicial';
import PerfilPersonal from '../perfil/perfilPersonal';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#001f3f',
        },
        headerTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
        drawerActiveTintColor: '#4a90e2',
        drawerInactiveTintColor: '#666',
      }}
    >
      <Drawer.Screen 
        name="Panel Principal" 
        component={MainContent}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="dashboard" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Perfil" 
        component={PerfilPersonal}
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
