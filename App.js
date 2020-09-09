import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CreatePhone from "./components/CreateAccountPhone";

export default function App() {
  return (
    <View style={styles.container}>
      <CreatePhone />
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
