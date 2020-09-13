import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image style={styles.stretch} source={require("../assets/bglogo.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
