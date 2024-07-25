import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)', 
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      marginTop: 100,
      width: 220,
      height: 220,
      alignSelf: 'center',
      borderRadius: 200
    
    },
    title: {
      fontSize: 24,
      marginTop: -110,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#fff',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    subtitle: {
      fontSize: 20,
      color: '#fff',
      marginBottom: 20,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    button: {
      backgroundColor: '#1e90ff',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    footerText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
      paddingHorizontal: 20,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
  });