import { Platform, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import vision from '../src/assets/vision.png';
import { Text, Image, View } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Page() {
    useEffect(() => {
        const navigateToLogin = async () => {
            await new Promise(resolve => setTimeout(resolve, 5100));
            const token = await AsyncStorage.getItem('token');
            if (token) return router.navigate('/home');
            router.navigate('/login');
        };

        navigateToLogin();
    }, [router]);
    return (
        <View style={styles.container}>
            <Image source={vision} style={styles.image} resizeMode="contain" />
            <Text style={styles.welcome}>Bienvenido</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4B9858',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    welcome: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});