import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

import { InputGroup, Input } from "native-base";
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons
            name="ios-arrow-round-back"
            size={54}
            color="#487EFB"
            style={styles.back}
          />
        </TouchableOpacity>
        <Text
          style={{
            left: 150,
            fontSize: 20,
            fontWeight: "bold",
            paddingBottom: "1%",
          }}
        >
          Profile
        </Text>
      </View>
      <Image
        borderRadius={100}
        style={styles.images}
        source={require("../assets/dp1.jpeg")}
      />
      <Text style={{ marginBottom: "5%", fontSize: 18 }}>Adam Smith</Text>
      <View style={styles.iconsView}>
        <InputGroup borderType="underline">
          <Ionicons name="ios-contact" size={34} color="#487EFB" />
          <Input placeholder="Account Detail" />
          <Ionicons name="ios-arrow-forward" size={24} color="gray" />
        </InputGroup>
        <InputGroup borderType="underline">
          <SimpleLineIcons name="settings" size={26} color="gray" />
          <Input placeholder="Setting" />
          <Ionicons name="ios-arrow-forward" size={24} color="gray" />
        </InputGroup>
        <InputGroup borderType="underline">
          <MaterialIcons name="phone-in-talk" size={26} color="green" />
          <Input placeholder="Contact us" />
          <Ionicons name="ios-arrow-forward" size={24} color="gray" />
        </InputGroup>
      </View>
      <TouchableOpacity style={styles.button}>
        <Button style={styles.button} title="Log Out" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    left: 10,
  },
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
    display: "flex",
    flexDirection: "row",
    marginTop: "10%",
    fontWeight: "bold",
    alignItems: "center",
    width: "100%",
    borderBottomColor: "#686b6e",
    borderBottomWidth: 1,
  },
  iconsView: {
    height: "15%",
    width: "66%",
    alignItems: "center",
  },
  arrow: {
    marginLeft: "25%",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    height: "33%",
    width: "100%",
  },
  button: {
    marginTop: 50,
  },
});

export default ProfileScreen;
