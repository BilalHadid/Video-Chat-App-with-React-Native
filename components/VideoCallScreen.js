import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const VideoCallScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/dp1.jpeg")}
      style={styles.container}
    >
      <Image
        style={styles.image}
        borderRadius={5}
        source={require("../assets/dp2.jpeg")}
      />
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  text: {
    marginTop: "20%",
    color: "white",
  },
  image: {
    top: "10%",
    width: "40%",
    height: "30%",
    position: "absolute",
    left: "55%",
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

export default VideoCallScreen;
