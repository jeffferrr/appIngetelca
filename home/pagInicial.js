import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

// Componente para el contenido principal
const MainContent = ({ route }) => {
  const { username } = route.params || { username: 'Usuario' };
  
  const imageSource = {
    uri: 'https://ingetelca.gt/wp-content/uploads/2011/07/logopeq.png',
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#001f3f', '#003366', '#004080']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Image 
            source={imageSource} 
            style={styles.logo} 
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.welcomeText}>Panel de Control</Text>
            <Text style={styles.subtitle}>Sistema de Gestión Ingetelca</Text>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <MaterialIcons name="pending-actions" size={30} color="#4a90e2" />
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Pendientes</Text>
              </View>
              
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

// Componente para el perfil del usuario
const UserProfile = ({ route }) => {
  const { username } = route.params || { username: 'Usuario' };
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#001f3f', '#003366', '#004080']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.profileCard}>
            <MaterialIcons name="account-circle" size={80} color="#4a90e2" />
            <Text style={styles.profileName}>{username}</Text>
            <Text style={styles.profileRole}>Administrador</Text>
            
            <View style={styles.profileInfo}>
              <View style={styles.infoItem}>
                <MaterialIcons name="email" size={24} color="#4a90e2" />
                <Text style={styles.infoText}>admin@ingetelca.com</Text>
              </View>
              <View style={styles.infoItem}>
                <MaterialIcons name="phone" size={24} color="#4a90e2" />
                <Text style={styles.infoText}>+502 1234-5678</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

// Componente principal que contiene el Drawer Navigator
const PagInicial = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#001f3f',
        },
        headerTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#fff',
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
        component={UserProfile}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

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
  profileCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001f3f',
    marginTop: 15,
  },
  profileRole: {
    fontSize: 16,
    color: '#4a90e2',
    marginBottom: 20,
  },
  profileInfo: {
    width: '100%',
    marginTop: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  infoText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#666',
  },
});

export default PagInicial;
