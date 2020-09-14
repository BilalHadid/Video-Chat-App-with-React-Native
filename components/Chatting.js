import React, { useState } from "react";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { IconButton } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },
});

const Chatting = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Hello!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Ahsan Shakeel",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
  ]);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#6646ee",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };
  const renderActions = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="camera" size={32} color="#6646ee" />
        </View>
      </Send>
    );
  };
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={32} color="#6646ee" />
        </View>
      </Send>
    );
  };
  const handleSend = (newMessage = []) => {
    setMessages(GiftedChat.append(messages, newMessage));
  };
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");
  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={_goBack} color="#6646ee" />
        <Appbar.Content title="Frank Martin" color="#6646ee" />
        <Appbar.Action icon="settings" onPress={_handleMore} color="#6646ee" />
        <Appbar.Action icon="phone" onPress={_handleMore} color="#6646ee" />
        <Appbar.Action icon="video" onPress={_handleMore} color="#6646ee" />
      </Appbar.Header>
      <GiftedChat
        messages={messages}
        onSend={(newMessage) => handleSend(newMessage)}
        user={{ _id: 1, name: "Ahsan Shakeel" }}
        renderBubble={renderBubble}
        showUserAvatar
        renderSend={renderSend}
        alwaysShowSend
        renderActions={renderActions}
      />
    </>
  );
};
export default Chatting;
