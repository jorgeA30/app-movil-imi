import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, useWindowDimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from 'src/styles/RegistroStyles';

const RegistroUsuarioScreen = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const handleRegisterPress = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
    // Aquí puedes agregar la lógica de registro
    navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión o a otra pantalla
  };

  return (
    <ImageBackground
      source={require('assets/page1.jpg')} 
      style={[styles.background, { width, height }]}
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input} 
            placeholder="Nombre(s) de Usuario" 
            value={nombre} 
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input} 
            placeholder="Apellido" 
            value={apellido} 
            onChangeText={setApellido}
          />
          <TextInput
            style={styles.input} 
            placeholder="Celular" 
            value={celular} 
            onChangeText={setCelular}
          />
          <TextInput
            style={styles.input} 
            placeholder="Dirección" 
            value={direccion} 
            onChangeText={setDireccion}
          />
          <TextInput
            style={styles.input} 
            placeholder="Correo electronico" 
            value={email} 
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input} 
            placeholder="Contraseña" 
            secureTextEntry 
            value={password} 
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input} 
            placeholder="Confirmar Contraseña" 
            secureTextEntry 
            value={confirmPassword} 
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegistroUsuarioScreen;
