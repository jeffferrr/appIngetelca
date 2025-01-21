import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Animated,
  Easing,
} from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonScale] = useState(new Animated.Value(1)); // Para animación del botón

  const handleLogin = () => {
    const fixedUsername = 'admin';
    const fixedPassword = '12345';

    if (username === fixedUsername && password === fixedPassword) {
      Alert.alert('¡Login exitoso!', `Bienvenido, ${username}`);
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  // Animación del botón al presionar
  const animateButton = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.9,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(handleLogin);
  };

  const imageSource = {
    uri: 'https://ingetelca.gt/wp-content/uploads/2011/07/logopeq.png', // Reemplaza esta URL por la dirección de tu imagen
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <TouchableOpacity style={styles.button} onPress={animateButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  button: {
    width: '120%',
    height: '180%',
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
