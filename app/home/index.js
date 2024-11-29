import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
            <Text>Este es el Inicio de la app!</Text>
            {Platform.OS === 'web' && <Text style={styles.text}>Estás en la web</Text>}
            {Platform.OS === 'android' && <Text style={styles.text}>Estás en android</Text>}
            {Platform.OS === 'ios' && <Text style={styles.text}>Estás en ios</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#fff",
    }
});