import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MyDrawer } from "./components/MainProfile";
import { NavigationContainer } from "@react-navigation/native";
import Chatting from "./components/Chatting";
export default function App() {
  return (
    // <NavigationContainer>
    //   <MyDrawer />
    // </NavigationContainer>
    <Chatting />
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
