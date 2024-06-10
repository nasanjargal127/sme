import { Text } from "@/components/Text";
import { colors } from "@/constants/colors";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="accountDetail"
        options={{
          headerShown: true,
          title: "Дансны дэлгэрэнгүй",
          headerTitleStyle: {
            fontFamily: "Medium",
            fontSize: 16,
            color: colors.white,
          },
          headerShadowVisible: false,
          headerLeft: () => <Text>back</Text>,
          headerRight: () => <Text>forward</Text>,

          // headerStyle: {backgroundColor: ""}
        }}
      />
    </Stack>
  );
}
