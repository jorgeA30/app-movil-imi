import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from 'src/styles/LoginStyles';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const handleLoginPress = () => {
    navigation.navigate('Asistencia y Nomina');
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegistroUsuario'); // Actualiza esto con el nombre de tu pantalla de registro
  };

  return (
    <ImageBackground
      source={require('assets/page1.jpg')} 
      style={[styles.background, { width, height }]}
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('assets/logo2.png')} style={styles.icon} />
          </View>
          
          <TextInput
            style={styles.input} 
            placeholder="Nombre de Usuario" 
            value={name}
            onChangeText={setName}
          />         
          <TextInput
            style={styles.input} 
            placeholder="Contraseña" 
            secureTextEntry 
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
