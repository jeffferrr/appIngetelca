import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * Componente MainContent
 * Muestra el panel de control principal con estadísticas y resumen
 * @param {Object} navigation - Objeto de navegación
 * @param {Object} route - Objeto de ruta que contiene parámetros de navegación
 */
const MainContent = ({ navigation, route }) => {
  console.log('Route params completo:', route.params);
  
  const { username = 'Usuario', permisos = [] } = route.params || {};
  
  console.log('Username:', username);
  console.log('Permisos recibidos:', permisos);

  // Configuración de la imagen del logo
  const imageSource = {
    uri: 'https://ingetelca.gt/wp-content/uploads/2011/07/logopeq.png',
  };

  const menuItems = [
    { 
      id: 1, 
      title: 'ASIGNACIÓN SUPERVISORES', 
      icon: 'supervisor-account', 
      color: '#4a90e2', 
      route: 'Supervisores',
      permiso: 'ADMINISTRADOR'
    },
    { 
      id: 2, 
      title: 'REPORTERÍA TÉCNICOS', 
      icon: 'assignment', 
      color: '#50c878', 
      route: 'Reporteria',
      permiso: 'REPORTERIA_TECNICOS'
    },
    { 
      id: 3, 
      title: 'HISTORIAL DE ARCHIVOS', 
      icon: 'folder', 
      color: '#f4a460', 
      route: 'Historial',
      permiso: 'ADMINISTRADOR'
    },
    { 
      id: 4, 
      title: 'BODEGA', 
      icon: 'inventory', 
      color: '#ba55d3', 
      route: 'Bodega',
      permiso: 'BODEGA'
    },
    { 
      id: 5, 
      title: 'GESTIÓN DE CAJA CHICA', 
      icon: 'account-balance-wallet', 
      color: '#ff7f50', 
      route: 'CajaChica',
      permiso: 'ADMINISTRADOR'
    },
    { 
      id: 6, 
      title: 'ADMINISTRACIÓN', 
      icon: 'business', 
      color: '#778899', 
      route: 'Administracion',
      permiso: 'ADMINISTRADOR'
    },
    { 
      id: 7, 
      title: 'OTRAS FUNCIONES', 
      icon: 'more-horiz', 
      color: '#20b2aa', 
      route: 'OtrasFunciones',
      permiso: 'ADMINISTRADOR'
    },
    { 
      id: 8, 
      title: 'CONFIGURACIÓN', 
      icon: 'settings', 
      color: '#cd853f', 
      route: 'Configuracion',
      permiso: 'ADMINISTRADOR'
    },
    { 
      id: 9, 
      title: 'PRODUCTIVIDAD LABORAL', 
      icon: 'trending-up', 
      color: '#6a5acd', 
      route: 'Productividad',
      permiso: 'ADMINISTRADOR'
    },
  ];

  // Corregimos la lógica de filtrado
  const menuFiltrado = menuItems.filter(item => {
    console.log(`Checando ${item.title} - Permiso requerido: ${item.permiso}`);
    if (permisos.includes('ADMINISTRADOR')) {
      return true;
    }
    return permisos.includes(item.permiso);
  });

  console.log('Items filtrados:', menuFiltrado.map(item => item.title));
  console.log('Cantidad de items filtrados:', menuFiltrado.length);

  const screenWidth = Dimensions.get('window').width;
  const isTablet = screenWidth >= 768;

  return (
    <View style={styles.container}>
      {/* Fondo con gradiente */}
      <LinearGradient
        colors={['#001f3f', '#003366', '#004080']}
        style={styles.gradient}
      >
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={[
            styles.menuGrid,
            isTablet && styles.menuGridTablet
          ]}>
            {menuFiltrado.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.menuItem,
                  isTablet && styles.menuItemTablet
                ]}
                onPress={() => navigation.navigate(item.route)}
              >
                <LinearGradient
                  colors={[item.color, item.color + 'dd']}
                  style={styles.menuItemGradient}
                >
                  <MaterialIcons name={item.icon} size={isTablet ? 40 : 32} color="#fff" />
                  <Text style={[
                    styles.menuItemText,
                    isTablet && styles.menuItemTextTablet
                  ]}>{item.title}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 15,
    paddingTop: 25,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  menuGridTablet: {
    justifyContent: 'flex-start',
    gap: 20,
  },
  menuItem: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuItemTablet: {
    width: '31%',
    marginBottom: 20,
  },
  menuItemGradient: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  menuItemTextTablet: {
    fontSize: 16,
    marginTop: 15,
  },
});

export default MainContent;
