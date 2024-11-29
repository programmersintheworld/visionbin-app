import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { pointec_Styles } from "../../generalStyles";
import Icon from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default function Search({ onChange, value, placeholder }) {
    return (
        <View style={[pointec_Styles.flexCenterHorizontal, pointec_Styles.marginTopTwo, pointec_Styles.marginBottomTwo]}>
            <LinearGradient colors={["#0450AF", "#2F97CA"]} style={styles.gradient}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholderTextColor={"#404040"}
                        placeholder={placeholder}
                        onChange={(input) => onChange(input.nativeEvent.text, "search")}
                        value={value}
                        style={styles.input}
                    />
                    <Icon name="search" size={20} color="#404040" style={styles.icon} />
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    gradient: {
        borderRadius: 10,
        padding: 3,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#151c1c",
        width: "90%",
        borderRadius: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        color: "#404040",
    },
    icon: {
        marginRight: 10,
    },
});
