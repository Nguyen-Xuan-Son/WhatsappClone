import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View, Text, Image } from "react-native";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

import NotFoundScreen from "../screens/NotFoundScreen";
import ChatRoom from "../screens/chats//ChatRoom";
import { RootStackParamList } from "../models/types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import COLORS from "../constants/Colors";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: COLORS.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 26,
        },
      }}
    >
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: "WhatsApp",
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: 60,
                  marginRight: 10,
                }}
              >
                <Octicons
                  name="search"
                  size={24}
                  color={COLORS.light.tabIconDefault}
                />
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color={COLORS.light.tabIconDefault}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={({ route }: { route: any }) => ({
          headerBackTitle: "",
          headerTitle: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    marginHorizontal: 10,
                  }}
                  source={{ uri: route.params?.uri }}
                />
                <View>
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                  >
                    {route?.params?.name}
                  </Text>
                </View>
              </View>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: 100,
                  marginRight: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="video"
                  size={24}
                  color={COLORS.light.tabIconDefault}
                />
                <MaterialCommunityIcons
                  name="phone"
                  size={24}
                  color={COLORS.light.tabIconDefault}
                />
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color={COLORS.light.tabIconDefault}
                />
              </View>
            );
          },
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
