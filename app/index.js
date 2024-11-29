import { Platform, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Page() {
    useEffect(() => {
        const navigateToLogin = async () => {
            await new Promise(resolve => setTimeout(resolve, 5100));
            router.navigate('/login');
        };

        navigateToLogin();
    }, [router]);
    return;
}