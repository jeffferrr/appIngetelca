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

const VistaPrincipalConfiguracion = ({ navigation, route }) => {
  const { permisos = [] } = route.params || {};

  const menuItems = [
    { 
      id: 1, 
      title: 'PERMISOS MENU', 
      icon: 'security', 
      color: '#4a90e2', 
      route: 'PermisosMenu',
      permiso: 'PERMISOS_MENU'
    },
    { 
      id: 2, 
      title: 'USUARIOS', 
      icon: 'people', 
      color: '#50c878', 
      route: 'Usuarios',
      permiso: 'USUARIOS'
    },
    { 
      id: 3, 
      title: 'AJUSTES GENERALES', 
      icon: 'settings', 
      color: '#f4a460', 
      route: 'AjustesGenerales',
      permiso: 'AJUSTES_GENERALES'
    },
    { 
      id: 4, 
      title: 'PERSONAL NUEVO DE CAJA CHICA', 
      icon: 'person-add', 
      color: '#ba55d3', 
      route: 'PersonalCajaChica',
      permiso: 'PERSONAL_CAJA_CHICA'
    },
    { 
      id: 5, 
      title: 'PERSONAL NUEVO DE CAMPO', 
      icon: 'engineering', 
      color: '#ff7f50', 
      route: 'PersonalCampo',
      permiso: 'PERSONAL_CAMPO'
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

export default VistaPrincipalConfiguracion;
