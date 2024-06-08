import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { colors } from "../constants/colors";
import { Text } from "./Text";

type AmountType = {
  amount: number;
  color?: string;
  fontSize?: number;
  style?: StyleProp<
    Omit<TextStyle, "fontFamily" | "fontWeight" | "fontStyle" | "fontSize">
  >;
};

export function Amount({
  amount = 0,
  color,
  fontSize = 26,
  style,
}: AmountType) {
  const amountString = amount.toFixed(2);
  const [whole, fraction] = amountString.split(".");
  const isPositive = amount >= 0;

  const textColor = color || (isPositive ? colors.darkBlue : colors.green);

  return (
    <Text variant="Medium" fontSize={26} style={[{ color: textColor }, style]}>
      {`${Math.abs(parseInt(whole, 10)).toLocaleString()}.`}
      <Text
        variant="Medium"
        style={{ color: color || "#02295C66" }}
        fontSize={16}
      >
        {fraction} ₮
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "OM",
  },
});
