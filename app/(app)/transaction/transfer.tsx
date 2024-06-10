import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { AccountCard } from "@/components/AccountCard";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";

export default function AccountDetail() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    navigation.setOptions({
      contentStyle: {
        backgroundColor: params.primaryColor,
      },
      headerStyle: { backgroundColor: params.primaryColor },
    });
  }, [navigation, params?.primaryColor]);

  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          paddingBottom: sizes.medium,
          paddingHorizontal: sizes.small,
          paddingTop: sizes.small,
        }}
      >
        <AccountCard
          title="Дэлгүүр"
          bgColor={colors["white-20"]}
          balance={2929929999}
          accountNumber="2025116077"
          textColor={colors.white}
          bankId={2}
        />
      </View>
      <Container
        style={{ backgroundColor: colors.white, paddingTop: sizes.standard }}
      >
        <Input label="Дансны дугаар" value={value} onChangeText={setValue} />
      </Container>
    </>
  );
}
