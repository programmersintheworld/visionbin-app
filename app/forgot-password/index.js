import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import instance from '../../src/helpers/API/instance';
import vision from '../../assets/vision0.png';
import { useRouter } from 'expo-router';

export default function Page() {
  const route = useRouter();
  const [email, setEmail] = useState('');

  const handleCode = async () => {
    try {
      const formatData = new FormData();
      formatData.append('email', email);

      const response = await instance.post('/auth/forgot_password', formatData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status === 200) {
        route.push('/code');
      }
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
    }
  }

  const handleLogin = () => {
    route.push("/register")
  }

  return (
    <View style={styles.container}>
      <Image source={vision} style={styles.image} resizeMode="contain" />

      <Text style={styles.welcome}>
        ¿Olvidaste tu Contraseña?
      </Text>
      <Text style={styles.welcome}>
        Recuperala!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu Correo electrónico"
        placeholderTextColor="white"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />


      <TouchableOpacity style={styles.button} onPress={handleCode}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={[styles.linkText, styles.signUpLink]}> Crea una</Text>
        </TouchableOpacity>
      </View>

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
    fontSize: 45,
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
  recu: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 20,
  }
});
