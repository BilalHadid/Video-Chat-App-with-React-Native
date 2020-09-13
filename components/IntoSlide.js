import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import img1 from "../assets/2.jpg";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#487EFB",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  title: {
    top: 50,
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 410,
  },
  dotStloe: { backgroundColor: "rgba(255, 255, 255, .9)", height: 20 },
  //[...]
});

const slides = [
  {
    key: 1,
    title: "Private Message",
    icon: {},
    text: ".\nCommunicate With your friend via Private Message",
    image: {
      uri:
        "https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-shading-background-abstract-colorful-background-colorful-art-image_22644.jpg",
    },
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Bussiness Contact",
    icon: "addusergroup",
    text: "Create a bussiness contact",
    image: {
      uri:
        "https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-shading-background-abstract-colorful-background-colorful-art-image_22644.jpg",
    },
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Send Photo & Video",
    icon: "camera",
    text: "Have Fun with your friend by sending photos and video to each other",
    image: {
      uri:
        "https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-shading-background-abstract-colorful-background-colorful-art-image_22644.jpg",
    },
    backgroundColor: "black",
  },
];
const image = {
  uri:
    "https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-shading-background-abstract-colorful-background-colorful-art-image_22644.jpg",
};
export default class IntoSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <EvilIcons name="check" size={24} color="black" />
      </View>
    );
  };
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <ImageBackground
          source={require("../assets/1last.jpg")}
          style={styles.image}
        >
          <AntDesign name={this.icon} size={100} color="white" />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.text}</Text>
        </ImageBackground>
      </View>
    );
  };

  render() {
    if (this.state.showRealApp) {
      return <SignIn />;
    } else {
      return (
        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
        />
      );
    }
  }
}
