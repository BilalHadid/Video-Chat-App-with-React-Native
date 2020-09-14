import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const CallScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/dp1.jpeg")}
      style={styles.container}
    >
      <Image
        style={styles.image}
        borderRadius={100}
        source={require("../assets/dp1.jpeg")}
      />
      <Text style={styles.text}>Adam Smith</Text>
      <Text style={styles.timer}>00:50</Text>
      <View style={styles.buttonView}>
        <MaterialCommunityIcons.Button
          style={styles.buttons}
          name="microphone"
          borderRadius={50}
          backgroundColor="#abbacf"
          size={37}
          color="white"
        />
        <Text>{"     "}</Text>
        <FontAwesome5.Button
          style={styles.buttons}
          borderRadius={50}
          backgroundColor="red"
          name="phone-slash"
          size={25}
          color="white"
        />
        <Text>{"     "}</Text>
        <Ionicons.Button
          name="md-megaphone"
          style={styles.buttons}
          borderRadius={50}
          backgroundColor="#abbacf"
          size={33}
          color="white"
        />
      </View>
    </ImageBackground>
  );
};
export default CallScreen;
const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: "35%",
    color: "white",
  },
  timer: {
    position: "absolute",
    top: "40%",
    color: "white",
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  image: {
    top: "10%",
    width: "35%",
    height: "20%",
    position: "absolute",
  },
  buttons: {
    height: 55,
    width: 55,
  },
  buttonView: {
    flexDirection: "row",
    top: "60%",
  },
});
