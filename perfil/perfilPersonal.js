import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const PerfilPersonal = ({ route }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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

export default PerfilPersonal;
