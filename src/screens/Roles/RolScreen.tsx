import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';

const Nomina = () => {
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    return (
        <ImageBackground 
            source={require('assets/page1.jpg')} 
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button 
                        title="Director" 
                        onPress={handleLoginPress}
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        title="Maestros" 
                        onPress={handleLoginPress}
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        title="Administradores" 
                        onPress={handleLoginPress}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginVertical: 10,
    },
});

export default Nomina;
