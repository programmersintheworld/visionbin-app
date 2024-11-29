import { Text, View, Image, TouchableOpacity, BackHandler, Modal, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { pointec_Styles } from "../../generalStyles";
import { menu_Styles } from "./menu_styles";
import CustomAlert from "../Alert/alert";

const dataNav = [
    { name: "Inicio", icon: "home", route: "Home" },
    { name: "Empleados", icon: "account-group", route: "Employees" },
    { name: "Ventas", icon: "cash-register", route: "Sales" },
    { name: "Comisiones", icon: "cash-multiple", route: "Commissions" },
    { name: "Almacén", icon: "warehouse", route: "Warehouse" },
    { name: "Mensajes", icon: "message", route: "Messages" },
    { name: "Configuración", icon: "cog", route: "Settings" },
    { name: "Reportes", icon: "file-chart", route: "Reports" },
    { name: "Cerrar Sesión", icon: "logout", route: "Logout" },
];

export function MenuApp() {
    const navigation = useNavigation();
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [modalExit, setModalExit] = useState(false);
    const [hover, setHover] = useState(Array(dataNav.length).fill(false));
    const route = useRoute();
    let backPressCount = 0;

    const handleVisibleMenu = () => {
        setVisibleMenu(true);
        console.log("visibleMenu: ", visibleMenu);
    }

    const onClose = () => {
        setVisibleMenu(false);
    }

    const handleHover = (index) => {
        const newHover = Array(dataNav.length).fill(false);
        newHover[index] = true;
        setHover(newHover);
    }

    const handleHoverOut = () => {
        setHover(Array(dataNav.length).fill(false));
    }

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                setVisibleMenu(false);
                backPressCount += 1;
                if (backPressCount === 2) {
                    if (route.name === "Home") {
                        setModalExit(true);
                        return true;
                    } else {
                        navigation.goBack();
                    }
                    backPressCount = 0;
                }
                return true;
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [navigation, modalExit])
    );

    const handleBackPress = () => {
        BackHandler.exitApp();
        navigation.navigate("Home");
        setModalExit(false);
    }

    return (
        <>{modalExit && (
            <CustomAlert visible={modalExit} title="¡Atención!" message="¿Desea salir de la aplicación?" confirmText="Salir" cancelText="Cancelar" isError={true} onConfirmPress={handleBackPress} onCancelPress={() => setModalExit(false)} />
        )}
            <View style={[pointec_Styles.flexRow, pointec_Styles.flexBetween, pointec_Styles.paddingTopOne, pointec_Styles.paddingRightOne, pointec_Styles.backgroundColorPredefined, pointec_Styles.paddingBottomOne]}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image style={pointec_Styles.logoHeader} source={require('../../assets/Pointec.png')} />
                </TouchableOpacity>
                <View style={[pointec_Styles.flexRow, pointec_Styles.gapTwo]}>
                    <TouchableOpacity>
                        <Icon name="store" size={45} color="#353637" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="account-circle" size={45} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleVisibleMenu}>
                        <Icon name={visibleMenu ? "close-circle" : "menu"} size={45} color="#FF613F" />
                    </TouchableOpacity>
                </View>
                {visibleMenu && (
                    <Modal visible={visibleMenu}
                        transparent
                        animationType="slide"
                        onRequestClose={() => onClose()}
                    >
                        <View style={[menu_Styles.modalContainer]}>
                            <View style={{ alignItems: "flex-end", marginRight: 5, marginTop: 5 }}>
                                <Icon name="close-circle" size={45} color="#FF613F" onPress={() => onClose()} />
                            </View>
                            <View style={[menu_Styles.innerContainer]}>
                                <View style={[pointec_Styles.flexRow, pointec_Styles.gapTwo, pointec_Styles.flexCenterHorizontal]}>
                                    <Icon name="store" size={95} color="#353637" />
                                    <Text style={[pointec_Styles.text, pointec_Styles.textWhite]}>Enterprise</Text>
                                </View>
                                <ScrollView style={[pointec_Styles.marginTopTwo]}>
                                    {dataNav.map((item, index) => {
                                        return (
                                            <Pressable key={index} style={[pointec_Styles.flexRow, pointec_Styles.gapThree, pointec_Styles.flexCenter]}
                                                onPress={() => {
                                                    if (item.route === "Logout") {
                                                        handleHover(index);
                                                        onClose();
                                                        handleHoverOut()
                                                        navigation.navigate("Login", { origin: "Logout" });
                                                    } else {
                                                        handleHover(index);
                                                        onClose();
                                                        handleHoverOut()
                                                        navigation.navigate(item.route);
                                                    }
                                                }}
                                                onPressIn={() => handleHover(index)}
                                                onPressOut={() => handleHoverOut()}
                                            >
                                                {hover[index] ? (
                                                    <LinearGradient colors={["#0450AF", "#2F97CA"]} style={[menu_Styles.button]}>
                                                        <Icon name={item.icon} size={45} color="#fff" />
                                                        <Text style={[pointec_Styles.text, pointec_Styles.textWhite]}>{item.name}</Text>
                                                    </LinearGradient>
                                                ) : (
                                                    <View style={[menu_Styles.button]}>
                                                        <Icon name={item.icon} size={45} color="#fff" />
                                                        <Text style={[pointec_Styles.text, pointec_Styles.textWhite]}>{item.name}</Text>
                                                    </View>
                                                )}
                                            </Pressable>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    </Modal >
                )}
            </View >
        </>
    )
}