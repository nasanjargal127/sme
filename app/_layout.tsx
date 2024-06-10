import React, { useEffect } from "react";

import {
  Rubik_300Light,
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_500Medium_Italic,
  Rubik_600SemiBold,
  Rubik_600SemiBold_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  Rubik_900Black,
} from "@expo-google-fonts/rubik";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Black: Rubik_900Black,
    Bold: Rubik_700Bold,
    BoldItalic: Rubik_700Bold_Italic,
    Light: Rubik_300Light,
    LightItalic: Rubik_300Light_Italic,
    Medium: Rubik_500Medium,
    MediumItalic: Rubik_500Medium_Italic,
    Regular: Rubik_400Regular,
    SemiBold: Rubik_600SemiBold,
    SemiBoldItalic: Rubik_600SemiBold_Italic,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          <Stack.Screen name="signIn" options={{ headerShown: true }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
