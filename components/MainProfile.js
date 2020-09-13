import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import { Container } from "native-base";
import { Entypo, Feather } from "@expo/vector-icons";
import Tabs from "./Tabs";
import { DrawerNavigation } from "react-navigation";
// import { Button, View } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";

export default function Home() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/bglogo.jpg")}
            style={styles.image}
          >
            <Entypo
              name="menu"
              size={40}
              color="white"
              style={{ top: -170, left: 10 }}
            />
            <View style={{ top: 120 }}>
              <TouchableOpacity>
                <Image
                  style={styles.tinyLogo}
                  source={require("../assets/icons/like.png")}
                />
              </TouchableOpacity>
              <Text style={{ left: 360, color: "white" }}>1.5K</Text>
              <TouchableOpacity>
                <Image
                  style={styles.tinyLogo}
                  source={require("../assets/icons/comment.png")}
                />
              </TouchableOpacity>
              <Text style={{ left: 360, color: "white" }}>Chat</Text>
              <TouchableOpacity>
                <Image
                  style={styles.tinyLogo}
                  source={require("../assets/icons/share.png")}
                />
              </TouchableOpacity>
              <Text style={{ left: 360, color: "white" }}>share</Text>
            </View>
            <View>
              <Tabs />
            </View>
          </ImageBackground>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 410,
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  tinyLogo: {
    marginVertical: 20,
    width: 50,
    height: 50,
    left: 350,
  },
});
