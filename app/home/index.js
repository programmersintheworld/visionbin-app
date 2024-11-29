import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import vision from "../../assets/vision.png";
import user from "../../assets/user.png";

const DATA = [
  {
    id: "1",
  },
];

const Item = ({ title }) => (
  <View style={styles.frame}>
    <Text style={styles.headerText}>Reportes Realizados</Text>
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Crear Nuevo</Text>
    </TouchableOpacity>

    <View style={styles.frame}>
      <Text style={styles.headerText}>Botes realizados</Text>
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Crear Nuevo</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Page = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={user} style={styles.userImage} />
          </TouchableOpacity>
          <Text style={styles.welcome}>Hola, User!</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={vision} style={styles.image} resizeMode="contain" />
        </View>

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
        />
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B9858",
  },
  scrollContainer: {
    alignItems: "center",
    padding: 10,
    gap: 20,
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