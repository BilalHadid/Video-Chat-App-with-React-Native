import React from "react";

import { LinearGradient, TouchableOpacity } from "expo-linear-gradient";

import { Feather } from "@expo/vector-icons";

import styled from "styled-components/native";

const Container = styled.View`
  height: 1px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.2);
  flex-direction: row;
`;
const Menu = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.Image.attrs({ resizeMode: "contain" })`
  height: 45px;
`;
const MenuText = styled.Text`
  font-size: 15px;
  margin-top: -3px;
  color: ${(props) => (props.active ? "#fff" : "rgba(255,255,255,0.6)")};
`;
const Border = styled(LinearGradient)`
  width: 44px;
  height: 28px;
  border-radius: 8px;
  align-items: center;
`;
const Button = styled.View`
  width: 36px;
  height: 28px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const Tabs = () => {
  return (
    <Container style={{ top: 170, marginLeft: 30 }}>
      <Menu>
        <Icon source={require("../assets/icons/home.png")} />
        <MenuText active="true">Home</MenuText>
      </Menu>

      <Menu>
        <Icon source={require("../assets/icons/discover.png")} />
        <MenuText>Search</MenuText>
      </Menu>

      <Menu>
        <Icon source={require("../assets/icons/message.png")} />
        <MenuText>chat</MenuText>
      </Menu>

      <Menu>
        <Icon source={require("../assets/icons/profile.png")} />
        <MenuText>profile</MenuText>
      </Menu>
    </Container>
  );
};

export default Tabs;
