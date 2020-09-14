import React from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";
import { MaterialIcons, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: "1%" }}>
          Profile
        </Text>
      </View>
      <Image
        borderRadius={100}
        style={styles.images}
        source={require("./assets/dp1.jpeg")}
      />
      <Text style={{ marginTop: "5%", fontSize: 18 }}>Adam Smith</Text>
      <View style={styles.iconsView}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            style={styles.icons}
            name="account-circle"
            size={30}
            color="blue"
          />
          <Text>Account Details</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={24}
            color="black"
            style={styles.arrow}
          />
        </View>
        <View style={styles.iconContainer}>
          <SimpleLineIcons name="settings" size={24} color="black" />
          <Text>Account Details</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={24}
            color="black"
            style={styles.arrow}
          />
        </View>
        <View style={styles.iconContainer}>
          <MaterialIcons name="smartphone" size={24} color="black" />
          <Text>Account Details</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={24}
            color="black"
            style={styles.arrow}
          />
        </View>
      </View>
      <Button title="Log Out" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  images: {
    width: "35%",
    height: "20%",
    marginTop: "5%",
  },
  header: {
    marginTop: "10%",
    fontWeight: "bold",
    alignItems: "center",
    width: "100%",
    borderBottomColor: "#686b6e",
    borderBottomWidth: 1,
  },
  icons: {
    width: "15%",
    height: "33%",
  },
  iconsView: {
    height: "38%",
    width: "66%",
    alignItems: "center",
  },
  arrow: {
    marginLeft: "25%",
  },
  iconContainer: {
    flexDirection: "row",
    height: "33%",
    width: "100%",
  },
});

export default App;
