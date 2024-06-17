import React from "react";

import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Stack, useRouter } from "expo-router";

import { IconButton } from "@/components/IconButton";
import { colors } from "@/constants/colors";

import "react-native-reanimated";

export default function AuthLayout() {
  const router = useRouter();

  const headerOptions: NativeStackNavigationOptions = {
    headerLeft: () => (
      <IconButton icon="arrow-left" onPress={() => router.back()} />
    ),
    headerShadowVisible: false,
    headerShown: true,
    headerTitleAlign: "center",
    headerTitleStyle: {
      color: colors.white,
      fontFamily: "Medium",
      fontSize: 16,
    },
  };

  return (
    <Stack>
      <Stack.Screen
        name="account-detail"
        options={{
          ...headerOptions,
          headerRight: () => (
            <IconButton icon="settings" onPress={() => console.log("ok")} />
          ),
          title: "Дансны дэлгэрэнгүй",
        }}
      />
      <Stack.Screen
        name="transfer"
        options={{
          ...headerOptions,
          headerRight: () => (
            <IconButton icon="bookmark" onPress={() => console.log("ok")} />
          ),
          title: "Гүйлгээ",
        }}
      />
    </Stack>
  );
}
