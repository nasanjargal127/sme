import React, { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";

import { Amount } from "./Amount";
import { BankLogoRender } from "./BankLogos";
import { Text } from "./Text";

type TransactionDetailType = {
  receiverName: string;
  receiverAccountNumber: string;
  receiverBankId: number;
  amount: number;
  description: string;
  fee?: string;
  myAccountName: string;
  myAccountNumber: string;
  balance: number;
};

export function TransactionDetail({
  receiverName,
  receiverAccountNumber,
  receiverBankId,
  amount,
  description,
  fee,
  myAccountName,
  myAccountNumber,
  balance,
}: TransactionDetailType) {
  return (
    <View>
      <Text variant="Medium" style={{ color: colors.darkBlue }}>
        Хүлээн авагч
      </Text>
      <View style={{ gap: sizes.mini, marginTop: sizes.small }}>
        <CardContainer style={{ alignItems: "center" }}>
          <View>
            <Text
              fontSize={18}
              variant="Medium"
              style={{ color: colors.darkBlue }}
            >
              {receiverName}
            </Text>
            <Text style={{ color: colors["darkBlue-60"] }}>
              {receiverAccountNumber}
            </Text>
          </View>
          <BankLogoRender id={receiverBankId} size={40} />
        </CardContainer>
        <CardContainer>
          <View>
            <Text
              fontSize={18}
              variant="Medium"
              style={{ color: colors.darkBlue }}
            >
              {amount.toLocaleString()}₮
            </Text>
            <Text style={{ color: colors["darkBlue-60"] }}>{description}</Text>
            {fee ? (
              <Text style={{ color: colors["darkBlue-60"] }}>{fee}₮</Text>
            ) : null}
          </View>
        </CardContainer>
      </View>
      <Text
        variant="Medium"
        style={{ color: colors.darkBlue, marginTop: sizes.medium + 4 }}
      >
        Миний данс
      </Text>
      <CardContainer style={{ marginTop: sizes.small }}>
        <View>
          <Text style={{ color: colors["darkBlue-60"] }}>{myAccountName}</Text>
          <Text style={{ color: colors["darkBlue-60"] }}>
            {myAccountNumber}
          </Text>
          <Text
            style={{ color: colors["darkBlue-60"], marginTop: sizes.standard }}
          >
            Гүйлгээний дараах үлдэгдэл
          </Text>
          <Amount
            amount={balance}
            color={colors["darkBlue-60"]}
            fontSize={18}
            style={{ marginTop: 4 }}
            fractionFontSize={18}
          />
        </View>
        <BankLogoRender id={receiverBankId} size={40} />
      </CardContainer>
    </View>
  );
}

function CardContainer({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}) {
  return <View style={[styles.cardContainer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: colors.lightBlue,
    borderRadius: sizes.standard,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: sizes.standard,
    paddingVertical: sizes.small,
  },
});
