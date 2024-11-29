import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import vision from '../../assets/vision0.png';
import {useRouter} from 'expo-router';

export default function Page() {
    const route = useRouter();
    
  return (
    <View style={styles.container}>
      <Image source={vision} style={styles.image} resizeMode="contain" />
      
      <Text style={styles.welcome}>
        ¿Olvidaste tu Contraseña?
      </Text>
      <Text style={styles.welcome}>
      Crea Tu Nueva Contraseña
      </Text>
      
      
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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
