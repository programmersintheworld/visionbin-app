import { StatusBar } from "expo-status-bar";
import {useRouter} from 'expo-router';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import vision from "../../assets/vision0.png";

export default function Page() {
    const route = useRouter();
    const handleForgotPassword = ()=>{
        route.push('/login');
    }
  return (
    <View style={styles.container}>
      <Image source={vision} style={styles.image} resizeMode="contain" />

      <Text style={styles.welcome}>Registrate</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="white"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="white"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirma tu Contraseña"
        placeholderTextColor="white"
        secureTextEntry
      />
      <View style={styles.button}>
      <TouchableOpacity >
        <Text style={styles.buttonText}>Crea Tu Cuenta</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>¿Ya tienes Cuenta?</Text>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={[styles.linkText, styles.signUpLink]}>Inicia Sesion</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#4B9858",
      padding: 20,
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    input: {
      width: "80%",
      height: 50,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 15,
      backgroundColor: "#9CE282",
    },
    button: {
      width: "80%",
      height: 50,
      backgroundColor: "#F18A37",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      marginTop: 20,
    },
    buttonText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
    welcome: {
      color: "white",
      fontSize: 50,
      textAlign: "center",
      marginBottom: 20,
    },
    linkText: {
      color: "#FFFFFF",
      textDecorationLine: "underline",
      fontSize: 14,
      marginVertical: 10,
    },
    signUpContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
    },
    signUpText: {
      color: "white",
      fontSize: 14,
    },
    signUpLink: {
      fontWeight: "bold",
      marginLeft: 5,
    },
});
