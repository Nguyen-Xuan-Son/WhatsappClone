import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

export default function Status() {
  return (
    <View style={styles.container}>
      <Text>Tab Status</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
