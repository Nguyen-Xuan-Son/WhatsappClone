import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { User } from "../../models/types";
import ContactItem from "./ContactItem";
import { View } from "../../components/Themed";
import users from "./../../mock/Users";

export default function Contacts() {
  const usersData: User[] = users; // TODO

  return (
    <View style={styles.container}>
      <FlatList
        data={usersData}
        renderItem={({ item }: { item: User }) => (
          <ContactItem contact={item} />
        )}
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
