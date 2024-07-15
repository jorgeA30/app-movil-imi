import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from 'src/styles/LoginStyles';

const LoginScreen = () => {
  const [collaboratorNumber, setCollaboratorNumber] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate ('Asistencia y Nomina');
  };

  return (
    <ImageBackground
      source={require('assets/page1.jpg')} 
      style={styles.background}>
        
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>👤</Text>
        </View>
          <TextInput
            style={styles.input} placeholder="Número de Colaborador" value={collaboratorNumber} 
            onChangeText={setCollaboratorNumber}/>
          <TextInput
            style={styles.input} placeholder="Nombre" value={name}
            onChangeText={setName}/>         
          <TextInput
            style={styles.input} placeholder="Contraseña" secureTextEntry value={password}
            onChangeText={setPassword}/>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};



export default LoginScreen;
