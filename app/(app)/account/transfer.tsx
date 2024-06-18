import React, { useEffect } from "react";
import { View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AccountCard } from "@/components/AccountCard";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { KeyboardAvoidingView } from "@/components/KeyboardAvoidingView";
import { colors } from "@/constants/colors";
import { bankPrimaryColor } from "@/constants/data";
import { sizes } from "@/constants/sizes";

const formSchema = z.object({
  accountNumber: z.string().min(1, "Заавал оруулна уу!!"),
  amount: z.string(),
  description: z.string(),
  name: z.string(),
});

type FormValues = {
  accountNumber: string;
  amount: string;
  description: string;
  name: string;
};

export default function Transfer() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const bankId = parseInt(params.bankId as string);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      accountNumber: "",
      amount: "",
      description: "",
      name: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("====>", JSON.stringify(data));
  };

  useEffect(() => {
    navigation.setOptions({
      contentStyle: {
        backgroundColor: bankPrimaryColor[bankId],
      },
      headerStyle: { backgroundColor: bankPrimaryColor[bankId] },
    });
  }, [navigation, bankId]);

  return (
    <KeyboardAvoidingView>
      <View style={{ flex: 1 }}>
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
            bankId={bankId}
          />
        </View>
        <Container
          style={{
            backgroundColor: colors.white,
            gap: sizes.small,
            paddingTop: sizes.standard,
          }}
        >
          <Input
            name="accountNumber"
            control={control}
            label="Дансны дугаар"
            keyboardType="numeric"
          />
          <Input name="name" control={control} label="Нэр" />
          <Input
            name="amount"
            control={control}
            label="Дүн"
            keyboardType="numeric"
          />
          <Input name="description" control={control} label="Утга" />
          <Button title="Үргэлжлүүлэх" onPress={handleSubmit(onSubmit)} />
        </Container>
      </View>
    </KeyboardAvoidingView>
  );
}
