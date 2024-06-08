import { StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";
import { sizes } from "../constants/sizes";
import { Amount } from "./Amount";
import { BankLogoRender } from "./BankLogos";
import { Text } from "./Text";

type AccountCardType = {
  accountNumber: string;
  primaryColor: string;
  title: string;
  balance: number;
  bankId: number;
};

export function AccountCard({
  accountNumber,
  primaryColor,
  title,
  balance,
  bankId,
}: AccountCardType) {
  return (
    <View style={styles.container}>
      <View>
        <Text variant="Medium" fontSize={14} style={{ color: primaryColor }}>
          {title}
        </Text>
        <Text
          fontSize={16}
          style={{ color: colors["darkBlue-40"], marginTop: 3 }}
        >
          {accountNumber}
        </Text>
        <Amount amount={balance} style={{ marginTop: sizes.mini }} />
      </View>
      <BankLogoRender id={bankId} size={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: sizes.standard,
    padding: sizes.standard,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
