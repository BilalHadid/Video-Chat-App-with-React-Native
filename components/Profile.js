import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Assalam o alaikum bilal</Text>
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
