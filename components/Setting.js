import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text>Assalam o alaikum</Text>
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
