import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from '../screens/Inicio/InicioScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import UsuarioScreen from '../screens/Registro/UsuarioScreen';
import AsistenciaScreen from '../screens/Asistencia/AsistenciaScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio" screenOptions={{ headerStyle: { backgroundColor: '#4682b4',}, headerTintColor: '#ffffff', 
        headerTitleStyle: {fontWeight: 'bold',},
        }}>
        <Stack.Screen name="Bienvenido"component={InicioScreen}options={{title: 'Grupo Educativo IMI'}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Iniciar sesión'}}/>
        <Stack.Screen name="RegistroUsuario" component={UsuarioScreen} options={{title: 'Registro Usuario'}}/>
        <Stack.Screen name="Asistencia y Nomina" component={AsistenciaScreen} options={{title: 'Asistencia y Nómina'}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
