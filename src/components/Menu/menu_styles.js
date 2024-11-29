import { StyleSheet } from 'react-native';

export const menu_Styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    innerContainer: {
        flex: 1,
        backgroundColor: '#16191C',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    button: {
        padding: 5,
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 10,
        flexDirection: 'row',
        width: "70%"
    },
    closeButton: {
        position: 'absolute',
        padding: 10,
    },
})