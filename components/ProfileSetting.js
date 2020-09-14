import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Input,
  InputGroup,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
} from "native-base";
import {
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  MaterialIcons,
} from "@expo/vector-icons";
export default function ProfileSetting() {
  return (
    <Container>
      <Header style={styles.Heado}>
        <Left>
          <Button
            transparent
            // onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Entypo name="menu" size={24} color="black" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "black" }}>My Profile</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card style={{ border: "none" }}>
          <CardItem>
            <Body>
              <TouchableOpacity style={{ left: 120 }}>
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
              <TouchableOpacity style={{ left: 100 }}>
                <Text style={{ fontWeight: "bold" }}>Cristina Kardashion</Text>
              </TouchableOpacity>
            </Body>
          </CardItem>
        </Card>
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
        <Button
          full
          rounded
          dark
          style={{ marginTop: 10 }}
          //   onPress={() => this.props.navigation.navigate("SignIn")}
        >
          <Text>Logout</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Heado: {
    backgroundColor: "transparent",
    color: "black",
  },
  stretch: {
    height: 120,
    width: 120,
    borderRadius: 70,
  },
  addimager: {
    // backgroundColor: "#DEDEDE",
    top: -30,
  },
});
