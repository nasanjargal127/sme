import React from "react";
import { View } from "react-native";

import { colors } from "../constants/colors";

import { Text } from "./Text";

export function UserCard({
  title,
  company,
  isTitleAlign = false,
}: {
  title: string;
  company: string;
  isTitleAlign?: boolean;
}) {
  return (
    <View>
      <Text
        fontSize={18}
        variant="Medium"
        style={{
          color: colors.white,
          textAlign: isTitleAlign ? "center" : "left",
        }}
      >
        {title}
      </Text>
      <Text fontSize={12} style={{ color: colors["white-60"] }}>
        {company}
      </Text>
    </View>
  );
}
