import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

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

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Black: Rubik_900Black,
    Bold: Rubik_700Bold,
    Light: Rubik_300Light,
    Medium: Rubik_500Medium,
    Regular: Rubik_400Regular,
    SemiBold: Rubik_600SemiBold,
    BoldItalic: Rubik_700Bold_Italic,
    LightItalic: Rubik_300Light_Italic,
    MediumItalic: Rubik_500Medium_Italic,
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
    <Stack>
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
      <Stack.Screen name="signIn" options={{ headerShown: true }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
