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
import { Item, Input } from "native-base";
import { Checkbox } from "react-native-paper";

export default function ContactSync() {
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
      <Text style={styles.mainHead}>Contact Sync</Text>
      <Item rounded style={styles.itemStyle}>
        <Feather
          name="phone"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Input style={styles.inputStyle} placeholder="Phone Number" />
      </Item>
      <View>
        <Checkbox.Item label="Sync" status="checked" style={styles.checkSync} />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.okbutton}>Sign Up With Phone</Text>
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
  back: {
    top: -50,
    right: 150,
  },
  mainHead: {
    color: "#487EFB",
    fontSize: 25,
    fontWeight: "bold",
    right: 60,
    top: -45,
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
  okbutton: {
    borderWidth: 1,
    padding: 15,
    backgroundColor: "#487EFB",
    borderColor: "#487EFB",
    borderRadius: 25,
    color: "white",
    fontSize: 17,
    width: 300,
    top: -15,
    textAlign: "center",
  },
  iconStyle: {
    color: "#5a52a5",
    fontSize: 28,
    marginLeft: 15,
  },
  itemStyle: {
    left: 10,
    top: -20,
    width: 350,
  },
  inputStyle: {
    flex: 1,
    fontSize: 17,
    color: "#5a52a5",
  },
  checkSync: {
    right: 90,
    top: -20,
  },
});
