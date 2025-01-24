import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * Componente MainContent
 * Muestra el panel de control principal con estadísticas y resumen
 * @param {Object} route - Objeto de ruta que contiene parámetros de navegación
 */
const MainContent = ({ route }) => {
  // Obtener el nombre de usuario de los parámetros de ruta o usar valor por defecto
  const { username } = route.params || { username: 'Usuario' };
  
  // Configuración de la imagen del logo
  const imageSource = {
    uri: 'https://ingetelca.gt/wp-content/uploads/2011/07/logopeq.png',
  };

  return (
    <View style={styles.container}>
      {/* Fondo con gradiente */}
      <LinearGradient
        colors={['#001f3f', '#003366', '#004080']}
        style={styles.gradient}
      >
        {/* Encabezado con logo */}
        <View style={styles.header}>
          <Image 
            source={imageSource} 
            style={styles.logo} 
            resizeMode="contain"
          />
        </View>
        
        {/* Contenido principal */}
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.welcomeText}>Panel de Control</Text>
            <Text style={styles.subtitle}>Sistema de Gestión Ingetelca</Text>
            
            {/* Contenedor de estadísticas */}
            <View style={styles.statsContainer}>
              {/* Estadística de pendientes */}
              <View style={styles.statItem}>
                <MaterialIcons name="pending-actions" size={30} color="#4a90e2" />
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Pendientes</Text>
              </View>
              
              {/* Estadística de completados */}
              <View style={styles.statItem}>
                <MaterialIcons name="done-all" size={30} color="#4a90e2" />
                <Text style={styles.statNumber}>45</Text>
                <Text style={styles.statLabel}>Completados</Text>
              </View>
            </View>
          </View>
        </View>
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
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.2,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#001f3f',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001f3f',
    marginTop: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
});

export default MainContent;
