import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MyDrawer } from "./components/MainProfile";
import { NavigationContainer } from "@react-navigation/native";
import IntoSlide from "./components/IntoSlide";
export default function App() {
  return (
    // <NavigationContainer>
    //   <MyDrawer />
    // </NavigationContainer>
    <IntoSlide />
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
