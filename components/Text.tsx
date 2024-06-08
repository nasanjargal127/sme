import {
  StyleProp,
  Text as TextBase,
  TextProps as TextBaseProps,
  TextStyle,
} from "react-native";

export type FontVariantsType =
  | "Black"
  | "Bold"
  | "Light"
  | "Medium"
  | "Regular"
  | "SemiBold"
  | "BoldItalic"
  | "LightItalic"
  | "MediumItalic"
  | "SemiBoldItalic";

export type TextProps = Omit<TextBaseProps, "style"> & {
  style?: StyleProp<
    Omit<TextStyle, "fontFamily" | "fontWeight" | "fontStyle" | "fontSize">
  >;
  variant?: FontVariantsType;
  fontSize?: number;
};

export function Text({
  variant = "Regular",
  children,
  style,
  fontSize = 16,
  ...props
}: TextProps) {
  return (
    <TextBase
      {...props}
      children={
        typeof children === "string" ? children.replaceAll("\n", "") : children
      }
      style={[
        style,
        {
          fontFamily: variant,
          fontSize: fontSize,
        },
      ]}
    />
  );
}
