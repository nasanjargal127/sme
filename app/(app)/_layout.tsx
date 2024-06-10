import React from "react";

import { Stack } from "expo-router";

import "react-native-reanimated";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="transaction"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
