import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import vision from '../../assets/vision.png';

export default function Page() {
  return (
    <View style={styles.container}>
      <Image
        source={vision}
        style={styles.image}
        resizeMode="contain" 
      />

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200, 
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16, 
  },
});
