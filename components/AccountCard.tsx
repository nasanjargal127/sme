import { colors } from "@/constants/colors";
import { StyleSheet, View } from "react-native";
import { sizes } from "../constants/sizes";
import { Amount } from "./Amount";
import { BankLogoRender } from "./BankLogos";
import { Text } from "./Text";

type AccountCardType = {
  accountNumber: string;
  textColor?: string;
  title: string;
  balance: number;
  bankId: number;
  bgColor?: string;
};

export function AccountCard({
  accountNumber,
  textColor,
  title,
  balance,
  bankId,
  bgColor = colors.white,
}: AccountCardType) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View>
        <Text variant="Medium" fontSize={14} style={{ color: textColor }}>
          {title}
        </Text>
        <Text
          fontSize={16}
          style={{ color: colors["darkBlue-40"], marginTop: 3 }}
        >
          {accountNumber}
        </Text>
        <Amount
          amount={balance}
          color={textColor}
          style={{ marginTop: sizes.mini }}
        />
      </View>
      <BankLogoRender id={bankId} size={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: sizes.standard,
    padding: sizes.standard,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
