import { StatusBar } from "expo-status-bar";
import { useRouter } from 'expo-router';
import { useState } from "react";
import instance from "../../src/helpers/API/instance";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const route = useRouter();
  const handleForgotPassword = () => {
    route.push('/login');
  }

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor, rellena todos los campos');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return
    }

    try {
      const formatData = new FormData();
      formatData.append('email', email);
      formatData.append('password', password);
      formatData.append('confirmPassword', confirmPassword);

      const response = await instance.post('/auth/signup', formatData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status === 201) {
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('id_user', response.data.id);
        route.push('/home');
      }
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
    }
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
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="white"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirma tu Contraseña"
        placeholderTextColor="white"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={handleRegister}>
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
