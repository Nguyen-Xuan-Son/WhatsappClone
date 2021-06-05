import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

export default function Chats() {
  return (
    <View style={styles.container}>
      <Text>Chats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
