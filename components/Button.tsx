import React from "react";
import { PressableProps, StyleSheet } from "react-native";

import { colors } from "../constants/colors";

import { Pressable } from "./Pressable";
import { Text } from "./Text";

type ButtonPropsType = {
  title: string;
  contained?: boolean;
  onPress: () => void;
  disabled?: boolean;
} & PressableProps;

export function Button({
  contained = true,
  title,
  onPress,
  disabled,
  ...props
}: ButtonPropsType) {
  return (
    <Pressable
      {...props}
      disabled={disabled}
      style={[styles.container, contained ? styles.contained : styles.outlined]}
      onPress={onPress}
    >
      <Text
        variant="Medium"
        fontSize={16}
        style={{ color: contained ? colors.white : colors.blue }}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contained: {
    backgroundColor: colors.blue,
  },
  container: {
    alignItems: "center",
    borderRadius: 16,
    justifyContent: "center",
    paddingVertical: 17,
  },
  outlined: {
    borderColor: colors.blue,
    borderWidth: 1,
  },
});
