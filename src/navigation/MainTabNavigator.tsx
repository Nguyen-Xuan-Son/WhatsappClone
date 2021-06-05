import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import CameraTab from "../screens/camera";
import ChatsTab from "../screens/chats";
import StatusTab from "../screens/status";
import CallsTab from "../screens/calls";
import { MainTabParamList } from "../models/types";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: COLORS[colorScheme].background,
        style: {
          backgroundColor: COLORS[colorScheme].tint,
        },
        indicatorStyle: {
          backgroundColor: COLORS[colorScheme].background,
          height: 5,
        },
        labelStyle: {
          fontWeight: "bold",
          fontSize: 16,
        },
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={CameraTab}
        options={{
          tabBarLabel: ({ color }: { color: string }) => (
            <MaterialCommunityIcons name="camera" size={26} color={color} />
          ),
        }}
      />
      <MainTab.Screen name="Chats" component={ChatsTab} />
      <MainTab.Screen name="Status" component={StatusTab} />
      <MainTab.Screen name="Calls" component={CallsTab} />
    </MainTab.Navigator>
  );
}
