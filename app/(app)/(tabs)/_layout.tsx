import { Tabs } from "expo-router";
import React from "react";

import { Text } from "@/components/Text";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { colors } from "@/constants/colors";
import * as Haptics from "expo-haptics";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopWidth: 0 },
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
      }}
      screenListeners={{
        tabPress: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
      }}
      sceneContainerStyle={{ backgroundColor: colors.darkBlue }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Данс",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="wallet"
              color={focused ? colors.blue : colors["darkBlue-40"]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="service"
        options={{
          title: "Үйлчилгээ",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="task-list"
              color={focused ? colors.blue : colors["darkBlue-40"]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Бүртгэл",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="person-account"
              color={focused ? colors.blue : colors["darkBlue-40"]}
            />
          ),
        }}
      />
    </Tabs>
  );
}
