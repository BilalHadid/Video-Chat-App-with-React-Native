import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Item, Input } from "native-base";

import {
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

export default function CreatePhone() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="ios-arrow-round-back" size={54} color="black" />
      </TouchableOpacity>
      <Text>Create New Account</Text>

      <TouchableOpacity>
        <Fontisto style={styles.imager} name="male" size={84} color="white" />
        <MaterialCommunityIcons
          style={styles.addimager}
          name="camera-plus-outline"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <View>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          placeholderTextColor="black"
        />

        <Item rounded style={styles.itemStyle}>
          <Feather
            name="phone"
            size={24}
            color="black"
            style={styles.iconStyle}
          />
          <Input style={styles.inputStyle} placeholder="Phone Number" />
        </Item>
        <TouchableOpacity>
          <Text style={styles.loghe}>Send Code</Text>
        </TouchableOpacity>
        <Text style={{ justifyContent: "center", alignItems: "center" }}>
          OR
        </Text>
        <TouchableOpacity>
          <Text style={styles.sighe}>Sign Up With Email</Text>
        </TouchableOpacity>
      </View>
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
  imager: {
    backgroundColor: "#EEEEF0",
    borderRadius: 100,
    padding: 30,
  },
  addimager: {
    backgroundColor: "#DEDEDE",
    borderRadius: 100,
    padding: 10,
    marginLeft: 80,
    top: -35,
  },
  button: {
    backgroundColor: "#487EFB",
    borderColor: "#487EFB",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
  },
  iconStyle: {
    color: "#5a52a5",
    fontSize: 28,
    marginLeft: 15,
  },
  loghe: {
    borderWidth: 1,
    padding: 15,
    backgroundColor: "#487EFB",
    borderColor: "#487EFB",
    borderRadius: 25,
    color: "white",
    fontSize: 17,
    width: 200,
    height: 55,
    textAlign: "center",
  },
  sighe: {
    marginTop: 10,
    borderWidth: 1,
    padding: 15,
    backgroundColor: "white",
    borderColor: "#487EFB",
    borderRadius: 25,
    color: "#487EFB",
    fontSize: 17,
    width: 200,
    height: 55,
    textAlign: "center",
  },
  itemStyle: {
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 17,
    color: "#5a52a5",
  },
  textInput: {
    width: 300,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 10,
    paddingLeft: 30,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,2)",
  },
});
