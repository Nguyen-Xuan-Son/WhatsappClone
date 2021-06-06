import React from "react";
import { StyleSheet } from "react-native";
import dayjs from "dayjs";

import { View, Text } from "../../components/Themed";
import { Message } from "../../models/types";

type MessageItemProps = {
  message: Message;
  isMySelf: boolean;
};

export default function MessageItem(props: MessageItemProps) {
  const { message, isMySelf } = props;

  return (
    <View
      style={{
        ...styles.container,
        alignSelf: isMySelf ? "flex-end" : "flex-start",
        marginLeft: isMySelf ? 20 : 10,
        marginRight: isMySelf ? 10 : 20,
        backgroundColor: isMySelf ? "#DCF8C5" : "#fff",
      }}
    >
      {!isMySelf && <Text style={styles.name}>{message.user?.name}</Text>}
      <Text>{message.content}</Text>
      <Text style={styles.time}>
        {dayjs(message.createdAt).isToday()
          ? dayjs(message.createdAt).format("LTS")
          : dayjs(message.createdAt).format("LLLL")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
  },
  time: {
    alignSelf: "flex-end",
  },
});
