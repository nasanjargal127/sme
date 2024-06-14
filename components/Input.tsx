import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { sizes } from "@/constants/sizes";

import { colors } from "../constants/colors";

import { Text as TextComponent } from "./Text";

interface FormInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  label: string;
  rightContent?: React.ReactNode;
}

const Y_VALUE = 14;

export function Input<T extends FieldValues>({
  label,
  rightContent,
  style,
  name,
  control,
  ...props
}: FormInputProps<T>) {
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
      }
    );
    const fontSize = interpolate(
      animatedValue.value,
      [0, 1],
      [props.value ? initialFontSize : targetFontSize, initialFontSize],
      {
        extrapolateRight: Extrapolation.CLAMP,
      }
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
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur, disabled },
        fieldState: { error },
      }) => {
        console.log(error);
        return (
          <View>
            <View
              style={[
                styles.container,
                { borderColor: error ? colors.errorRed : colors.lightBlue },
                style,
              ]}
            >
              <Animated.Text
                style={[styles.labelStyle, returnAnimatedTitleStyles]}
                numberOfLines={1}
              >
                <Text
                  style={{
                    color: error ? colors.errorRed : colors["darkBlue-40"],
                  }}
                >
                  {label}
                </Text>
              </Animated.Text>
              <TextInput
                {...props}
                editable={disabled}
                value={value}
                onChangeText={onChange}
                allowFontScaling={false}
                style={[styles.fieldbody, { color: colors.darkBlue }]}
                onFocus={() => {
                  animatedValue.value = withTiming(1);
                }}
                onBlur={() => {
                  if (!value) {
                    animatedValue.value = withTiming(0);
                  }
                  onBlur && onBlur();
                }}
                blurOnSubmit
              />
              {rightContent}
            </View>
            {error ? (
              <TextComponent
                fontSize={14}
                style={{
                  color: colors["red-50"],
                  marginLeft: sizes.standard,
                  marginTop: sizes.micro + 2,
                }}
              >
                {error?.message}
              </TextComponent>
            ) : null}
          </View>
        );
      }}
    />
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
