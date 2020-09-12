import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import {
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

export default function CreateEmail() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons
          name="ios-arrow-round-back"
          size={54}
          color="#487EFB"
          style={styles.back}
        />
      </TouchableOpacity>
      <Text style={styles.mainHead}>Create New Account</Text>

      <TouchableOpacity>
        <Image
          style={styles.stretch}
          source={require("../assets/bglogo.jpg")}
        />
        {/* <Fontisto style={styles.imager} name="male" size={84} color="white" /> */}
        <MaterialCommunityIcons
          style={styles.addimager}
          name="camera-plus-outline"
          size={30}
          color="gray"
        />
      </TouchableOpacity>
      <View>
        <TextInput
          placeholder="First Name"
          style={styles.textInput}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Last Name"
          style={styles.textInput}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Your Email"
          style={styles.textInput}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          placeholderTextColor="black"
        />

        <TouchableOpacity>
          <Text style={styles.loghe}>Sign Up</Text>
        </TouchableOpacity>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            left: 130,
            marginVertical: 10,
            fontWeight: "bold",
          }}
        >
          OR
        </Text>
        <TouchableOpacity>
          <Text style={styles.sighe}>Sign Up With Phone</Text>
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
    padding: 20,
  },
  addimager: {
    // backgroundColor: "#DEDEDE",
    top: -30,
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
    marginVertical: 5,
    left: 50,
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
    left: 50,
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
    borderColor: "rgba(1,1,1,2)",
  },
  back: {
    top: -50,
    right: 150,
  },
  mainHead: {
    color: "#487EFB",
    fontSize: 25,
    fontWeight: "bold",
    right: 30,
    top: -45,
  },
  stretch: {
    height: 120,
    width: 120,
    borderRadius: 70,
  },
});
