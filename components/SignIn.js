import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import MusicApp from "./index";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("../assets/2.jpg")]);

    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <MusicApp />;
  }
}
