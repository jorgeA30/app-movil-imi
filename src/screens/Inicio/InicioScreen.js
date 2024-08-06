import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from 'src/styles/InicioStyles';
import { Image} from "react-native";

const InicioScreen = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('assets/page1.jpg')}
      style={[styles.background, { width, height }]}
    >
      <View style={styles.overlay}>
      <Image source={require('assets/logo2.png')} 
        style={styles.logo}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Instituto Mexicano de Informática</Text>
          <Text style={styles.subtitle}>Bienvenido</Text>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Empezar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>
          "Transformando el futuro con tecnología de vanguardia."
        </Text>
      </View>
    </ImageBackground>
  );
};

export default InicioScreen;
