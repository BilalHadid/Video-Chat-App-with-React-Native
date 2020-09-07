import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Slider = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="camera" size={160} color="#487EFB" />
      <Text style={styles.mainhe}>Instanchatty</Text>
      <Text style={styles.parafirst}>
        Send text,photo,videos, and audio messages to your close friend
      </Text>
      <TouchableOpacity>
        <Text style={styles.loghe}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.sighe}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainhe: {
    color: "#487EFb",
    fontSize: 25,
    fontWeight: "bold",
  },
  parafirst: {
    fontSize: 15,
    textAlign: "center",
    margin: 25,
  },
  loghe: {
    borderWidth: 1,
    padding: 15,
    backgroundColor: "#487EFB",
    borderColor: "#487EFB",
    borderRadius: 25,
    color: "white",
    fontSize: 17,
    width: 200,
    height: 55,
    textAlign: "center",
  },
  sighe: {
    marginTop: 10,
    borderWidth: 1,
    padding: 15,
    backgroundColor: "white",
    borderColor: "#487EFB",
    borderRadius: 25,
    color: "#487EFB",
    fontSize: 17,
    width: 200,
    height: 55,
    textAlign: "center",
  },
});
