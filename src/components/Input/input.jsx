import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome5';
import { pointec_Styles } from "../../generalStyles";

export default function Input({ text, placeholder, value, onChange, secureTextEntry, type, width = "90%" }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <View style={[pointec_Styles.textLeft, pointec_Styles.marginBottomThree, { width: width }]}>
            <Text style={[pointec_Styles.text, pointec_Styles.textWhite, pointec_Styles.marginBottomTwo]}>{text}</Text>
            <TextInput style={pointec_Styles.input}
                placeholderTextColor={"#ffffff6c"}
                placeholder={placeholder}
                secureTextEntry={type === "password" ? !passwordVisible : secureTextEntry}
                value={value}
                onChangeText={(text) => onChange(text, type)}
            />
            {type === "password" && <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#fff" style={{ position: "absolute", right: 10, top: 45 }} onPress={() => setPasswordVisible(!passwordVisible)} />}
        </View>
    )
}