import { TouchableOpacity, Text } from "react-native";
import { button_Styles } from "./button_styles";
import { pointec_Styles } from "../../generalStyles";

export function ButtonComponentTwo({ text, functionComponent, backgroundColorOne, width = "75%" }) {
    return (
        <>
            <TouchableOpacity onPress={functionComponent} style={[button_Styles.container, { backgroundColor: `${backgroundColorOne}`, width: `${width}` }]}>
                <Text styles={[pointec_Styles.textWhite, pointec_Styles.textBold]}>{text}</Text>
            </TouchableOpacity>
        </>
    )
}