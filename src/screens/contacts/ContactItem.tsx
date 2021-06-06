import React from "react";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, View } from "../../components/Themed";
import { User } from "../../models/types";
import LAYOUTS_CONSTANT from "../../constants/Layout";

type ChatItemProps = {
  contact: User;
};

export default function ChatItem(props: ChatItemProps) {
  const { contact } = props;
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("ChatRoom", { ...contact, uri: contact.imageUri });
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: contact.imageUri }} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.nameHeader}>{contact.name}</Text>
          <Text numberOfLines={1} style={styles.message}>
            {contact.status}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  message: {
    color: "gray",
    fontSize: 16,
  },
  nameHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
