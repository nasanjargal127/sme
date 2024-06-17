import React from "react";
import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

import { Icon, IconName } from "./Icon";
import { Pressable } from "./Pressable";

export function IconButton({
  icon,
  onPress,
}: {
  icon: IconName;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon name={icon} height={28} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: colors["white-20"],
    borderRadius: 20,
    justifyContent: "center",
    width: 40,
  },
});
