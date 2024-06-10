import { AccountCard } from "@/components/AccountCard";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { Pressable } from "@/components/Pressable";
import { Text } from "@/components/Text";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function AccountDetail() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  console.log(params);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: params.primaryColor },
      contentStyle: {
        backgroundColor: params.primaryColor,
      },
    });
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <View
        style={{ paddingHorizontal: sizes.small, paddingBottom: sizes.medium }}
      >
        <AccountCard
          title="Дэлгүүр"
          bgColor={colors["white-20"]}
          balance={292992999999}
          accountNumber="2025116077"
          textColor={colors.white}
          bankId={2}
        />
      </View>
      <Container style={{ backgroundColor: colors.white }}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: sizes.medium,
            paddingTop: sizes.standard,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flexDirection: "row", gap: sizes.small }}>
            <ActionButton
              onPress={() => console.log("ok")}
              text="Гүйлгээ хийх"
              bgColor={params.primaryColor as string}
            />
            <ActionButton
              onPress={() => console.log("ok")}
              text="Гүйлгээ хийх"
              bgColor={params.primaryColor as string}
            />
          </View>
          <Text>sdfkjkdflsjklfdkljklfds</Text>
        </ScrollView>
      </Container>
    </>
  );
}

function ActionButton({
  onPress,
  text,
  bgColor,
}: {
  onPress: () => void;
  text: string;
  bgColor: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        borderRadius: sizes.medium,
        padding: sizes.standard,
        flex: 1,
      }}
    >
      <View
        style={{
          height: 44,
          aspectRatio: 1,
          borderRadius: 22,
          backgroundColor: colors["white-20"],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="arrow-hook-down-right" height={28} color={colors.white} />
      </View>
      <Text style={{ color: colors.white, marginTop: sizes.small }}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
