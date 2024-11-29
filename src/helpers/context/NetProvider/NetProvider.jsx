import { React, createContext, useState, useEffect } from "react";
import NetInfo from '@react-native-community/netinfo';

export const NetContext = createContext();

export default function NetProvider({ children }) {
    const [isConnected, setIsConnected] = useState(null);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const contextValue = {
        isConnected,
    }

    return (
        <NetContext.Provider value={contextValue}>{children}</NetContext.Provider>
    );
}