import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ContactSync from "./components/ContactSync";

export default function App() {
  return (
    <View style={styles.container}>
      <ContactSync />
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
