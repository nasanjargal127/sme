import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { colors } from "../constants/colors";

const Y_VALUE = 14;

type InputPropsType = {
  editable?: boolean;
  label: string;
  onBlur?: () => void;
  rightContent?: React.ReactNode;
  value: string;
} & TextInputProps;

export function Input({
  editable = true,
  label,
  onBlur,
  rightContent,
  style,
  ...props
}: InputPropsType) {
  const animatedValue = useSharedValue(0);
  const yValue = Y_VALUE;
  const initialFontSize = 12;
  const targetFontSize = 16;

  const returnAnimatedTitleStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedValue.value,
      [0, 1],
      [props.value ? -yValue : 0, -yValue],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
    const fontSize = interpolate(
      animatedValue.value,
      [0, 1],
      [props.value ? initialFontSize : targetFontSize, initialFontSize],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
    const fontFamily = animatedValue.value === 1 ? "Regular" : "Medium";

    return {
      fontFamily,
      fontSize,
      transform: [
        {
          translateY,
        },
      ],
    };
  });

  return (
    <View style={[styles.container, { borderColor: colors.lightBlue }, style]}>
      <Animated.Text
        style={[styles.labelStyle, returnAnimatedTitleStyles]}
        numberOfLines={1}
      >
        <Text
          style={{
            color: colors["darkBlue-40"],
          }}
        >
          {label}
        </Text>
      </Animated.Text>
      <TextInput
        {...props}
        editable={editable}
        allowFontScaling={false}
        style={[styles.fieldbody, { color: colors.darkBlue }]}
        onFocus={() => {
          animatedValue.value = withTiming(1);
        }}
        onBlur={() => {
          if (!props.value) {
            animatedValue.value = withTiming(0);
          }
          onBlur && onBlur();
        }}
        blurOnSubmit
      />
      {rightContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden",
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "relative",
  },
  fieldbody: {
    flex: 1,
    fontFamily: "Medium",
    fontSize: 18,
    height: "100%",
    paddingTop: 10,
  },
  labelStyle: {
    marginLeft: 16,
    position: "absolute",
  },
});
