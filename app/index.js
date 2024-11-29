import { Platform, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    return;
}