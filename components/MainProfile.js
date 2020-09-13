import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { Container } from "native-base";
import { Entypo, Feather } from "@expo/vector-icons";
import Tabs from "./Tabs";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import CreateEmail from "./CreateAccountEmail";
import ContactSync from "./ContactSync";
import SignIn from "./SignIn";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle "
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <Image style={styles.stretch} source={require("../assets/bglogo.jpg")} />
      <Text style={{ left: 80, top: 5, fontWeight: "bold" }}>Bilal Hadid</Text>
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();
export function MyDrawer() {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Create Your Account" component={CreateEmail} />
        <Drawer.Screen name="Contact Sync" component={ContactSync} />

        <Drawer.Screen name="Log out" component={SignIn} />
      </Drawer.Navigator>
    </>
  );
}

export default function Home({ navigation }) {
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
            source={require("../assets/bg3.jpg")}
            style={styles.image}
          >
            <Entypo
              name="menu"
              size={40}
              color="white"
              style={{ top: -170, left: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
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
  stretch: {
    height: 150,
    width: 150,
    borderRadius: 75,
    left: 50,
  },
});
