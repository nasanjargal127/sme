import React from "react";

import { Stack, useRouter } from "expo-router";

import { IconButton } from "@/components/IconButton";
import { colors } from "@/constants/colors";
import "react-native-reanimated";

export default function AuthLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="accountDetail"
        options={{
          headerLeft: () => (
            <IconButton icon="arrow-left" onPress={() => router.back()} />
          ),
          headerRight: () => (
            <IconButton icon="settings" onPress={() => console.log("ok")} />
          ),
          headerShadowVisible: false,
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.white,
            fontFamily: "Medium",
            fontSize: 16,
          },
          title: "Дансны дэлгэрэнгүй",
        }}
      />
      <Stack.Screen
        name="transfer"
        options={{
          headerLeft: () => (
            <IconButton icon="arrow-left" onPress={() => router.back()} />
          ),
          headerRight: () => (
            <IconButton icon="settings" onPress={() => console.log("ok")} />
          ),
          headerShadowVisible: false,
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.white,
            fontFamily: "Medium",
            fontSize: 16,
          },
          title: "Дансны дэлгэрэнгүй",
        }}
      />
    </Stack>
  );
}
