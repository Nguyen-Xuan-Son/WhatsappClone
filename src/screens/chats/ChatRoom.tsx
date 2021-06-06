import React, { useState } from "react";
import { StyleSheet, FlatList, TextInput, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { View } from "../../components/Themed";
import COLORS from "../../constants/Colors";
import { Messages, Message } from "../../models/types";
import LAYOUTS_CONSTANT from "../../constants/Layout";
import messages from "./../../mock/Chats";
import MessageItem from "./MessageItem";

export default function ChatRoom() {
  const messagesMock: Messages = messages;
  const mySelfId = "u1";
  const [message, setMessage] = useState("");

  const handelChangeMessage = (e: string) => {
    setMessage(e);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require("./../../assets/images/BG.png")}
      >
        <FlatList
          style={styles.messageContainer}
          data={messagesMock.messages}
          renderItem={({ item }: { item: Message }) => (
            <MessageItem isMySelf={item.user?.id === mySelfId} message={item} />
          )}
          keyExtractor={(item) => item.id}
        />

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <View style={styles.emoticonHappyIcon}>
              <MaterialCommunityIcons
                name="emoticon-happy-outline"
                size={25}
                color={"gray"}
              />
            </View>
            <View style={styles.inputItem}>
              <TextInput
                style={styles.input}
                onChangeText={handelChangeMessage}
                value={message}
                multiline={true}
                placeholder="Type a message"
                keyboardType="ascii-capable"
              />
            </View>
            <View style={styles.attachmentIcon}>
              <MaterialCommunityIcons
                name="attachment"
                size={25}
                color={"gray"}
              />
            </View>
            <View style={styles.cameraIcon}>
              <MaterialCommunityIcons name="camera" size={25} color={"gray"} />
            </View>
          </View>
          <View style={styles.recordVoice}>
            <MaterialCommunityIcons
              name="microphone-outline"
              size={24}
              color={COLORS.light.background}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: LAYOUTS_CONSTANT.window.width,
    height: LAYOUTS_CONSTANT.window.height,
    resizeMode: "cover",
  },
  messageContainer: {
    width: LAYOUTS_CONSTANT.window.width,
    height: LAYOUTS_CONSTANT.window.height - 180,
  },
  inputContainer: {
    height: 180,
    marginTop: 10,
    backgroundColor: "#fff0",
    flexDirection: "row",
    width: LAYOUTS_CONSTANT.window.width,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  inputWrapper: {
    flex: 1,
    marginRight: 10,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
  },
  emoticonHappyIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 5,
  },
  inputItem: {
    flex: 1,
  },
  input: {
    borderRadius: 30,
    fontSize: 18,
  },
  attachmentIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  recordVoice: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    backgroundColor: COLORS.light.tint,
  },
});
