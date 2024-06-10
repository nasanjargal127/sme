import React from "react";

import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Text } from "@/components/Text";
import { colors } from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabel: ({ children, focused }) => {
          return (
            <Text
              style={{
                color: focused ? colors.darkBlue : colors["darkBlue-40"],
              }}
              fontSize={14}
              variant={focused ? "Medium" : "Regular"}
            >
              {children}
            </Text>
          );
        },
        tabBarStyle: { borderTopWidth: 0 },
      }}
      screenListeners={{
        tabPress: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
      }}
      sceneContainerStyle={{ backgroundColor: colors.darkBlue }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="wallet"
              color={focused ? colors.blue : colors["darkBlue-40"]}
            />
          ),
          title: "Данс",
        }}
      />
      <Tabs.Screen
        name="service"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="task-list"
              color={focused ? colors.blue : colors["darkBlue-40"]}
            />
          ),
          title: "Үйлчилгээ",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="person-account"
              color={focused ? colors.blue : colors["darkBlue-40"]}
            />
          ),
          title: "Бүртгэл",
        }}
      />
    </Tabs>
  );
}
