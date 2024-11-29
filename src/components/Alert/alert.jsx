import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { pointec_Styles } from "../../generalStyles";
import LottieView from 'lottie-react-native';

export default function CustomAlert({ onConfirmPress, title, message, cancelText, confirmText, visible, onCancelPress, isLoading, isDone, isError }) {
    const [showModal, setShowModal] = useState(visible);

    const closeModal = () => {
        setShowModal(false);
        onConfirmPress();
    };
    return (
        <Modal
            transparent
            animationType="slide"
            visible={showModal}
            onRequestClose={() => onClose()}
        >
            <View style={styles.modalContainer}>
                <View style={styles.innerContainer}>
                    {isLoading && (
                        <LottieView
                            source={require('../../assets/loading_Document_Animation.json')}
                            autoPlay
                            loop
                            style={{ width: 100, height: 100 }}
                        />
                    )}
                    {isDone && (
                        <LottieView
                            source={require('../../assets/done_Animation.json')}
                            autoPlay
                            loop={false}
                            style={{ width: 100, height: 100 }}
                        />
                    )}
                    {isError && (
                        <LottieView
                            source={require('../../assets/error_Animation.json')}
                            autoPlay
                            loop={false}
                            style={{ width: 100, height: 100 }}
                        />
                    )}
                    <Text style={[styles.textUp]}>{title}</Text>
                    <Text style={[styles.textDown]}>{message}</Text>
                    <View style={styles.buttons}>
                        {confirmText ? (
                            <TouchableOpacity style={[styles.button]} onPress={() => closeModal()}>
                                <Text style={[pointec_Styles.textWhite, pointec_Styles.textCenter]}>{confirmText}</Text>
                            </TouchableOpacity>
                        ) : null}
                        {cancelText ? (
                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => {
                                    setShowModal(false);
                                    onCancelPress();
                                }}
                            >
                                <Text style={[pointec_Styles.textWhite, pointec_Styles.textCenter]}>
                                    {cancelText}
                                </Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    innerContainer: {
        width: "90%",
        backgroundColor: "#16191c",
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    textUp: {
        textAlign: 'center',
        color: '#f3f3f3',
        fontSize: 18,
        margin: 10,
    },
    textDown: {
        textAlign: 'center',
        color: '#f3f3f3',
        fontSize: 15,
    },
    buttons: {
        flexDirection: 'row',
        gap: 20,
    },
    button: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#0450AF',
        borderRadius: 5,
    },
});