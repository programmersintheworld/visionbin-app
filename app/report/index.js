import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function Page() {
  const today = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{today}</Text>
      <Text style={styles.title}>Basura tirada en las calles de:</Text>
      <Image
        source={{ uri: "https://via.placeholder.com/200" }}
        style={styles.image}
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula,
        ligula non feugiat cursus, risus metus fermentum nulla, vel egestas libero
        justo a neque. Curabitur.
      </Text>
      
      <Image
        source={{ uri: "https://via.placeholder.com/200" }}
        style={styles.image}
      />
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
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
});
