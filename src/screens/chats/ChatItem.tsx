import React from "react";
import { StyleSheet, Image } from "react-native";
import dayjs from "dayjs";

import { Text, View } from "../../components/Themed";
import { ChatItem as Item } from "../../models/types";
import LAYOUTS_CONSTANT from "../../constants/Layout";

type ChatItemProps = {
  chat: Item;
};

export default function ChatItem(props: ChatItemProps) {
  const { chat } = props;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: chat.users[1].imageUri }} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.nameHeader}>{chat.users[1].name}</Text>
          </View>
          <View>
            <Text style={styles.time}>
              {dayjs(chat.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.message}>{chat.lastMessage.content}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: LAYOUTS_CONSTANT.window.width,
    height: 80,
  },
  avatarContainer: {
    marginLeft: 10,
  },
  avatar: { width: 60, height: 60, borderRadius: 50 },
  contentContainer: {
    marginHorizontal: 10,
    flex: 1,
    height: "100%",
    justifyContent: "space-evenly",
    borderBottomColor: "#d4d4d4",
    borderStyle: "solid",
    borderBottomWidth: 0.5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },
  message: {
    color: "gray",
    fontSize: 16,
  },
  time: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
});
