import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from "react-native";

export default function ReportForm() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <Text style={styles.title}>Nuevo Reporte</Text>

        <View style={styles.frame}>
          <Text style={styles.headerText}>Fecha:</Text>
          <TextInput
            style={styles.input}
            value={new Date().toLocaleDateString()}
            editable={false}
          />

          <Text style={styles.headerText}>Lugar del reporte:</Text>
          <TextInput style={styles.input} placeholder="Ingresa el lugar" />

          <Text style={styles.headerText}>Foto del reporte:</Text>
          <Image
            source={{ uri: "https://via.placeholder.com/200" }}
            style={styles.image}
          />

          <Text style={styles.headerText}>Descripción:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descripción del reporte"
            multiline
          />
          
          <View style={styles.button}>
            <Text style={styles.buttonText}>Guardar Reporte</Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B9858",
  },
  scrollContainer: {
    alignItems: "center",
    padding: 10,
    gap: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcome: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  imageContainer: {
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
  },
  item: {
    backgroundColor: "#2B7D39",
    padding: 20,
    marginVertical: 20,
    borderRadius: 20,
    width: 200,
    height: 80,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  frame: {
    width: 320,
    backgroundColor: "#F0C49C",
    borderRadius: 20,
    alignItems: "center",
    padding: 12,
    marginVertical: 20,
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#F18A37",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  flatListContent: {
    alignItems: "center",
  },
});
