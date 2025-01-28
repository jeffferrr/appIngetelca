import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SoliDispositivos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitud de Dispositivos</Text>
      <Text style={styles.description}>Sin solicitudes</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()} // Regresar al menú principal
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SoliDispositivos;
