import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import instance from "../../src/helpers/API/instance";
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState('');

  const handleSubmit = async () => {
    // try {
    //   const formatData = new FormData();
    //   formatData.append('location', location);
    //   formatData.append('description', description);

    //   const response = await instance.post('/reports', formatData, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   });

    //   if (response.status === 201) {
    //     route.push('/home');
    //   }
    // } catch (error) {
    //   console.error('Error during login:', error.response?.data || error.message);
    // }
    route.push('/home');
  };

  const goBack = () => {
    route.push('/home');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear un reporte</Text>
      <Text style={styles.date}>{today}</Text>
      <TextInput
        style={styles.input}
        placeholder="Titulo del reporte"
        placeholderTextColor="white"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity style={styles.imageUploadButton}>
        <Text style={styles.buttonText}>Subir Imagen</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        placeholderTextColor="white"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        placeholderTextColor="white"
        value={location}
        onChangeText={setLocation}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={[styles.linkText, styles.signUpLink, { color: "white", fontWeight: "bold" }]}>Generar reporte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBack} onPress={goBack}>
        <Text style={[styles.linkText, styles.signUpLink, { color: "white", fontWeight: "bold" }]}>Regresar</Text>
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
    gap: 20,
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
  imageUploadButton: {
    backgroundColor: '#F18A37',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#F18A37',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonBack: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});