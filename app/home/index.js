import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import vision from "../../assets/vision.png";
import user from "../../assets/user.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const DATA = [
  {
    id: "1",
    type: "Reporte",
    title: "Reporte 1",
  },
  {
    id: "2",
    type: "Reporte",
    title: "Reporte 2",
  },
  {
    id: "3",
    type: "Basura",
    title: "Bote de basura",
  },
  {
    id: "4",
    type: "Basura",
    title: "Bote de basura",
  },
];

const Item = ({ title, type }) => {
  const route = useRouter();

  const handleCreateReport = () => {
    route.push("/generateReport");
  };

  const handleReports = () => {
    route.push("/report");
  };

  return (
    <View style={styles.frame}>
      <Text style={styles.headerText}>{type === "Reporte" ? "Reportes Realizados" : "Bote de Basura"}</Text>
      <TouchableOpacity onPress={handleReports}>
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCreateReport}>
        <Text style={styles.buttonText}>Crear Nuevo</Text>
      </TouchableOpacity>
    </View>
  );
};

const Page = () => {
  const route = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    route.push("/login");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} type={item.type} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          ListHeaderComponent={
            <View>
              <View style={styles.header}>
                <TouchableOpacity onPress={handleLogout}>
                  <Image source={user} style={styles.userImage} />
                </TouchableOpacity>
                <Text style={styles.welcome}>Hola, User!</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image source={vision} style={styles.image} resizeMode="contain" />
              </View>
            </View>
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B9858",
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
    alignItems: "center",
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
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "white",
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
  flatListContent: {
    alignItems: "center",
  },
});

export default Page;
