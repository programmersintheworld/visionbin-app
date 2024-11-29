import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import instance from "../../src/helpers/API/instance";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import * as ImagePicker from 'expo-image-picker';

export default function Page() {
  const route = useRouter();
  const today = new Date().toLocaleDateString();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [image, setImage] = useState(null); // Para almacenar la imagen seleccionada

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let locationResult = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = locationResult.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleImagePicker = async () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };

    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCamera = async () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };

    const result = await ImagePicker.launchCameraAsync(options);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    try {
      const formatData = new FormData();
      formatData.append('title', title);
      formatData.append('description', description);
      const user_id = await AsyncStorage.getItem('id_user');
      formatData.append('user_id', user_id);
      formatData.append("location_long", longitude);
      formatData.append("location_lat", latitude);

      const response = await instance.post('/reports', formatData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        route.push('/home');
      }
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
    }
    route.push('/home');
  };

  const goBack = () => {
    route.push('/home');
  }

  return (
    <ScrollView>
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
        <TouchableOpacity style={styles.imageUploadButton} onPress={handleImagePicker}>
          <Text style={styles.buttonText}>Seleccionar de la galería</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageUploadButton} onPress={handleCamera}>
          <Text style={styles.buttonText}>Tomar una foto</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          placeholderTextColor="white"
          value={description}
          onChangeText={setDescription}
        />
        {latitude !== "" && longitude !== "" && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker coordinate={{ latitude: parseFloat(latitude), longitude: parseFloat(longitude) }} title="Ubicación del reporte" />
          </MapView>
        )}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={[styles.linkText, styles.signUpLink, { color: "white", fontWeight: "bold" }]}>Generar reporte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBack} onPress={goBack}>
          <Text style={[styles.linkText, styles.signUpLink, { color: "white", fontWeight: "bold" }]}>Regresar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
    width: '80%', // Establece un ancho fijo
    alignItems: 'center', // Centra el texto dentro del botón
  },
  imagePreview: {
    width: 100,
    height: 100,
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
  map: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
});
