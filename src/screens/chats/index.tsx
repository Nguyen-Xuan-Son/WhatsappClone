import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { ChatItem as Item } from "../../models/types";
import ChatItem from "./ChatItem";
import { View } from "../../components/Themed";
import chatMock from "./../../mock/ChatRooms";

export default function Chats() {
  const chats: Item[] = chatMock; // TODO

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({ item }: { item: Item }) => <ChatItem chat={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
