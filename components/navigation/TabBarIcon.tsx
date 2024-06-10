import React from "react";
import { View } from "react-native";

import { Icon, IconName } from "../Icon";

export function TabBarIcon({
  name,
  color,
  height = 24,
}: {
  name: IconName;
  color: string;
  height?: number;
}) {
  return (
    <View style={{ marginBottom: -3 }}>
      <Icon height={height} name={name} color={color} />
    </View>
  );
}
