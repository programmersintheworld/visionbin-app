import React, { useEffect, useState } from 'react';
import { View, Text } from 'dripsy';
import { useNet } from '../../helpers/context/NetProvider/UseNet';

export function Network() {
    const { isConnected } = useNet();
    const [visible, setVisible] = useState(false);
    const [connectionLost, setConnectionLost] = useState(false);

    useEffect(() => {
        if (isConnected === null) return;

        if (isConnected) {
            if (connectionLost) {
                setVisible(true);
                const timer = setTimeout(() => {
                    setVisible(false);
                }, 3000);

                return () => clearTimeout(timer);
            } else {
                setVisible(false);
            }
        } else {
            setVisible(true);
            setConnectionLost(true);
        }
    }, [isConnected]);

    return (
        visible && (
            <View
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isConnected ? 'success' : 'error',
                    padding: 2,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    animation: isConnected ? 'fadeIn 0.5s' : 'fadeOut 0.5s',
                }}
            >
                <Text sx={{ color: 'default' }}>
                    {isConnected ? 'Conexión establecida' : 'No hay conexión'}
                </Text>
            </View>
        )
    );
}
