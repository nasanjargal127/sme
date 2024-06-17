import React from "react";

import { Stack, router } from "expo-router";

import { Icon } from "@/components/Icon";
import { Pressable } from "@/components/Pressable";
import { colors } from "@/constants/colors";
import "react-native-reanimated";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: colors.white } }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="account"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="send-request"
        options={{
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Icon name="chevron-left" color={colors.white} />
            </Pressable>
          ),
          headerShown: true,
          headerStyle: { backgroundColor: colors.darkBlue },
          headerTintColor: colors.white,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.white,
            fontFamily: "Medium",
            fontSize: 16,
          },
          title: "Мерчант болох хүсэлт",
        }}
      />
    </Stack>
  );
}
