import React, { useCallback } from "react";
import {
  Pressable as OrigPressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

import * as Haptics from "expo-haptics";

type PressablePropsType = {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  style?: PressableProps["style"];
} & PressableProps;

export function Pressable({
  children,
  disabled,
  style: propsStyle,
  onPress,
  ...props
}: PressablePropsType) {
  const getOpacity = useCallback(
    (pressed: boolean) => (disabled ? 0.4 : pressed ? 0.6 : 1),
    [disabled],
  );

  const style = useCallback(
    ({
      pressed,
    }: PressableStateCallbackType): StyleProp<ViewStyle> &
      PressableProps["style"] =>
      StyleSheet.flatten([propsStyle, { opacity: getOpacity(pressed) }]),
    [getOpacity, propsStyle],
  );

  return (
    <OrigPressable
      style={style}
      onPress={() => {
        onPress();
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }}
      {...props}
    >
      {children}
    </OrigPressable>
  );
}
