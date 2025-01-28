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

const VistaPrincipalB = ({ navigation, route }) => {
  const { permisos = [] } = route.params || {};

  const menuItems = [
    { 
      id: 1, 
      title: 'REPORTES CARTOGRÁFICOS', 
      icon: 'map', 
      color: '#4a90e2', 
      route: 'ReportesCartograficos',
      permiso: 'REPORTES_CARTOGRAFICOS'
    },
    { 
      id: 2, 
      title: 'CONTROL DE DESCARGAS', 
      icon: 'download', 
      color: '#50c878', 
      route: 'ControlDescargas',
      permiso: 'CONTROL_DESCARGAS'
    },
    { 
      id: 3, 
      title: 'INGRESO DE MATERIALES', 
      icon: 'add-box', 
      color: '#f4a460', 
      route: 'IngresoMateriales',
      permiso: 'INGRESO_MATERIALES'
    },
    { 
      id: 4, 
      title: 'DESCARGAS BUC', 
      icon: 'system-update-alt', 
      color: '#ba55d3', 
      route: 'DescargasBUC',
      permiso: 'DESCARGAS_BUC'
    },
    { 
      id: 5, 
      title: 'DESCARGAS CORE', 
      icon: 'get-app', 
      color: '#ff7f50', 
      route: 'DescargasCORE',
      permiso: 'DESCARGAS_CORE'
    },
    { 
      id: 6, 
      title: 'DESCARGAS PREVENTIVO', 
      icon: 'cloud-download', 
      color: '#778899', 
      route: 'DescargasPreventivo',
      permiso: 'DESCARGAS_PREVENTIVO'
    },
    { 
      id: 7, 
      title: 'INVENTARIO DE MI BODEGA', 
      icon: 'inventory', 
      color: '#20b2aa', 
      route: 'InventarioBodega',
      permiso: 'INVENTARIO_BODEGA'
    },
    { 
      id: 8, 
      title: 'TRASLADOS', 
      icon: 'swap-horiz', 
      color: '#cd853f', 
      route: 'Traslados',
      permiso: 'TRASLADOS'
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

export default VistaPrincipalB;
