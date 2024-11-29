import { StatusBar } from 'expo-status-bar';
import AuthProvider from '../src/helpers/context/AuthProvider/AuthProvider';
import NetProvider from '../src/helpers/context/NetProvider/NetProvider';
import { Slot } from 'expo-router';
import Constants from 'expo-constants';
import { DripsyProvider } from 'dripsy';
import { SafeAreaView } from 'react-native';
import { theme } from '../src/generalStyles';
import { Network } from '../src/components/Network/Network';

export default function Page() {

    return (
        <NetProvider>
            <AuthProvider>
                <DripsyProvider theme={theme}>
                    <SafeAreaView style={{ flex: 1, backgroundColor: "#4B9858", marginTop: Constants.statusBarHeight }}>
                        <StatusBar style="auto" />
                        <Network />
                        <Slot />
                    </SafeAreaView>
                </DripsyProvider>
            </AuthProvider>
        </NetProvider>
    )
}