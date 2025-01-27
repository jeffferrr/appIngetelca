import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const VistaPrincipalHA = ({ navigation, route }) => {
  const { permisos = [] } = route.params || {};

  const menuItems = [
    { 
      id: 1, 
      title: 'ARCHIVO BUC', 
      icon: 'folder-special', 
      color: '#4a90e2', 
      route: 'ArchivoBUC',
      permiso: 'ARCHIVO_BUC'
    },
    { 
      id: 2, 
      title: 'ARCHIVO CORE', 
      icon: 'folder-shared', 
      color: '#50c878', 
      route: 'ArchivoCORE',
      permiso: 'ARCHIVO_CORE'
    },
    { 
      id: 3, 
      title: 'ARCHIVO DENUNCIAS MUNICIPALES', 
      icon: 'report', 
      color: '#f4a460', 
      route: 'ArchivoDenuncias',
      permiso: 'ARCHIVO_DENUNCIAS'
    },
    { 
      id: 4, 
      title: 'ARCHIVO RUTAS PREVENTIVAS', 
      icon: 'alt-route', 
      color: '#ba55d3', 
      route: 'ArchivoRutas',
      permiso: 'ARCHIVO_RUTAS'
    },
    { 
      id: 5, 
      title: 'DASHBOARD BUC', 
      icon: 'dashboard', 
      color: '#ff7f50', 
      route: 'DashboardBUC',
      permiso: 'DASHBOARD_BUC'
    },
    { 
      id: 6, 
      title: 'DASHBOARD CORE', 
      icon: 'router', 
      color: '#778899', 
      route: 'DashboardCORE',
      permiso: 'DASHBOARD_CORE'
    },
    { 
      id: 7, 
      title: 'DASHBOARD RUTAS PREVENTIVAS', 
      icon: 'timeline', 
      color: '#20b2aa', 
      route: 'DashboardRutas',
      permiso: 'DASHBOARD_RUTAS'
    },
    { 
      id: 8, 
      title: 'DASHBOARD ATP', 
      icon: 'analytics', 
      color: '#cd853f', 
      route: 'DashboardATP',
      permiso: 'DASHBOARD_ATP'
    },
    { 
      id: 9, 
      title: 'DASHBOARD DENUNCIAS', 
      icon: 'assessment', 
      color: '#6a5acd', 
      route: 'DashboardDenuncias',
      permiso: 'DASHBOARD_DENUNCIAS'
    },
  ];

  const menuFiltrado = permisos.includes('ADMINISTRADOR') 
    ? menuItems 
    : menuItems.filter(item => permisos.includes(item.permiso));

  const screenWidth = Dimensions.get('window').width;
  const isTablet = screenWidth >= 768;

  return (
    <View style={styles.container}>
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

export default VistaPrincipalHA;
