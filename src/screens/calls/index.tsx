import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

export default function Calls() {
  return (
    <View style={styles.container}>
      <Text>Calls</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
