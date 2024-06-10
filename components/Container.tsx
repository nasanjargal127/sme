import React, { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

import { colors } from "../constants/colors";
import { sizes } from "../constants/sizes";

export function Container({
  children,
  bgColor = colors.white,
  style,
}: {
  children: ReactNode;
  bgColor?: string;
  style?: ViewProps["style"];
}) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: sizes.medium,
    borderTopRightRadius: sizes.medium,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    paddingHorizontal: sizes.small,
  },
});
