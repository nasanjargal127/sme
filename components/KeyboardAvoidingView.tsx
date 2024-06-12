import React from "react";
import {
  Keyboard,
  KeyboardAvoidingViewProps,
  Platform,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

export function KeyboardAvoidingView({
  children,
  ...props
}: KeyboardAvoidingViewProps) {
  return (
    <RNKeyboardAvoidingView
      behavior={Platform.select({ android: "height", ios: "padding" })}
      style={{ flex: 1 }}
      {...props}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </RNKeyboardAvoidingView>
  );
}
