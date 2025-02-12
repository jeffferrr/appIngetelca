import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * Componente LoginInicial
 * Maneja la autenticación inicial de usuarios en la aplicación
 * Incluye animaciones de entrada y validación de credenciales
 */
const LoginInicial = () => {
  // Estados para manejar los campos del formulario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Hook de navegación
  const navigation = useNavigation();
  
  // Valores para las animaciones
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(0);

  const users = {
    g: {
      password: '1',
      permisos: ['ADMINISTRADOR'],
      nombre: 'Administrador G'
    },
    tecnico: {
      password: '54321',
      permisos: ['REPORTERIA_TECNICOS', 'ASIGNACIÓN_SUPERVISORES', 'ASIGNACION_BUC', 'PLANTILLAS_RUTAS'],
      nombre: 'Técnico Demo'
    }
  };

  /**
   * Efecto para ejecutar las animaciones al montar el componente
   * Combina fade in y slide up en paralelo
   */
  useEffect(() => {
    Animated.parallel([
      // Animación de fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      // Animación de slide up con efecto spring
      Animated.spring(slideAnim, {
        toValue: 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  /**
   * Maneja el proceso de login
   * Valida las credenciales contra valores fijos
   * Muestra alertas según el resultado
   */
  const handleLogin = () => {
    const user = users[username.toLowerCase()];
    console.log('Usuario encontrado:', user); // Debugging

    if (user && user.password === password) {
      const navigationParams = {
        username: user.nombre,
        permisos: user.permisos
      };
      
      console.log('Navegando con params:', navigationParams); // Debugging
      
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home', params: navigationParams }],
      });
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  // Configuración de la imagen del logo
  const imageSource = {
    uri: 'https://ingetelca.gt/wp-content/uploads/2011/07/logopeq.png',
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Fondo con gradiente */}
      <LinearGradient
        colors={['#001f3f', '#002b4d', '#003366']}
        style={styles.gradient}
      >
        {/* Manejo del teclado según plataforma */}
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.content}>
              {/* Contenedor del logo */}
              <View style={styles.logoWrapper}>
                <Image source={imageSource} style={styles.image} resizeMode="contain" />
              </View>

              {/* Formulario de login */}
              <View style={styles.formContainer}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.subtitle}>Sistema de Gestión de Telecomunicaciones</Text>

                {/* Campo de usuario */}
                <View style={styles.inputContainer}>
                  <MaterialIcons name="person" size={24} color="#1a73e8" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    placeholderTextColor="#666"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                  />
                </View>

                {/* Campo de contraseña */}
                <View style={styles.inputContainer}>
                  <MaterialIcons name="lock" size={24} color="#1a73e8" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="#666"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>

                {/* Botón de inicio de sesión */}
                <TouchableOpacity 
                  style={styles.loginButton}
                  onPress={handleLogin}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#1a73e8', '#1557b0']}
                    style={styles.gradientButton}
                  >
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

/**
 * Estilos del componente
 * Organizados por secciones principales y elementos específicos
 */
const styles = StyleSheet.create({
  // Contenedores principales
  mainContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    maxWidth: 500,
    width: '100%',
    alignSelf: 'center',
  },

  // Estilos del logo
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: Math.min(Dimensions.get('window').width * 0.5, 250),
    height: Math.min(Dimensions.get('window').width * 0.3, 150),
  },

  // Estilos del formulario
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderRadius: 12,
    padding: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  // Textos principales
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 35,
    textAlign: 'center',
  },

  // Estilos de los campos de entrada
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    height: 50,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },

  // Estilos del botón de login
  loginButton: {
    marginTop: 25,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gradientButton: {
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default LoginInicial;
