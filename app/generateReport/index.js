import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Page() {
  const route = useRouter();
  const today = new Date().toLocaleDateString();
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Aquí puedes manejar el envío del reporte
    console.log('Reporte enviado:', { location, description });
    route.push('/home'); // Redirigir a la página de inicio después de enviar el reporte
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{today}</Text>
      <Text style={styles.title}>Crear un reporte</Text>
      <TextInput
        style={styles.input}
        placeholder="Titulo del reporte"
        placeholderTextColor="white"
        value={location}
        onChangeText={setLocation}
      />
    <TouchableOpacity style={styles.imageUploadButton} onPress={() => { /* Lógica para subir imagen */ }}>
      <Text style={styles.buttonText}>Subir Imagen</Text>
    </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        placeholderTextColor="white"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        placeholderTextColor="white"
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar Reporte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={[styles.linkText, styles.signUpLink]}>Generar reporte</Text>
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
  date: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'F18A37',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});