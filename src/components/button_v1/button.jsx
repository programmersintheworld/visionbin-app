import { TouchableOpacity, Text } from "react-native";
import { button_Styles } from "./button_styles";
import { pointec_Styles } from "../../generalStyles";
import { LinearGradient } from 'expo-linear-gradient';

export function ButtonComponentOne({ text, functionComponent, backgroundColorOne, backgroundColorTwo }) {
    return (
        <>
            <TouchableOpacity onPress={functionComponent} style={button_Styles.container}>
                <LinearGradient colors={[backgroundColorOne, backgroundColorTwo]} style={button_Styles.container}>
                    <Text style={[pointec_Styles.textWhite, pointec_Styles.textBold]}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </>
    )
}