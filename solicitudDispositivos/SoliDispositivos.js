import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SoliDispositivos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitud de Dispositivos</Text>
      <Text style={styles.Text}>No hay solicitud de ni un dispositivo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SoliDispositivos;
