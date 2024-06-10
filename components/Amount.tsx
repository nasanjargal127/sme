import React from "react";
import { StyleProp, TextStyle } from "react-native";

import { Text } from "./Text";

type AmountType = {
  amount: number;
  color?: string;
  fontSize?: number;
  fractionFontSize?: number;
  style?: StyleProp<
    Omit<TextStyle, "fontFamily" | "fontWeight" | "fontStyle" | "fontSize">
  >;
};

export function Amount({
  amount = 0,
  color,
  fontSize = 26,
  style,
  fractionFontSize = 16,
}: AmountType) {
  const amountString = amount.toFixed(2);
  const [whole, fraction] = amountString.split(".");

  return (
    <Text variant="Medium" fontSize={fontSize} style={[{ color }, style]}>
      {`${Math.abs(parseInt(whole, 10)).toLocaleString()}.`}
      <Text
        variant="Medium"
        style={{ color: color || "#02295C66" }}
        fontSize={fractionFontSize}
      >
        {fraction} ₮
      </Text>
    </Text>
  );
}
