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
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Bienvenido" component={InicioScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={UsuarioScreen} />
        <Stack.Screen name="Asistencia y Nomina" component={AsistenciaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigator;
