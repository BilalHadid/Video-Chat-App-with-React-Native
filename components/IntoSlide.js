import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import img1 from "../assets/2.jpg";

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
    backgroundColor: "blue",
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
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  dotStloe: { backgroundColor: "rgba(255, 255, 255, .9)", height: 20 },
  //[...]
});

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: {
      uri:
        "https://i.pinimg.com/736x/fa/4a/b4/fa4ab4eed72c9f7c040acc553dfa4c4b.jpg",
    },
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: {
      uri:
        "https://i.pinimg.com/736x/fa/4a/b4/fa4ab4eed72c9f7c040acc553dfa4c4b.jpg",
    },
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: {
      uri:
        "https://i.pinimg.com/736x/fa/4a/b4/fa4ab4eed72c9f7c040acc553dfa4c4b.jpg",
    },
    backgroundColor: "black",
  },
];
const image = {
  uri:
    "https://i.pinimg.com/736x/fa/4a/b4/fa4ab4eed72c9f7c040acc553dfa4c4b.jpg",
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
        <Text style={styles.title}>{item.text}</Text>
        <Image style={styles.image} source={image} />
        <Text style={styles.text}>This Is World</Text>
      </View>
    );
  };

  render() {
    if (this.state.showRealApp) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 50,
            backgroundColor: "#febe29",
            color: "white",
          }}
        >
          <ImageBackground style={styles.image} source={image} />
          <Text>
            {" "}
            This will be your screen when you click Skip from any slide or Done
            button at last
          </Text>
        </View>
      );
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
