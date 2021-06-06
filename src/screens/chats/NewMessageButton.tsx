import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../../constants/Colors";
import { View } from "../../components/Themed";

export default function NewMessageButton() {
  const route = useNavigation();

  const handleOnPress = () => {
    route.navigate("Contacts"); // TODO
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={25}
          color={COLORS.light.background}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: COLORS.light.tint,
    justifyContent: "center",
    alignItems: "center",
  },
});
