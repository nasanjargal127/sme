import { Dimensions, Platform } from "react-native";

const windowSizes = Dimensions.get("window");
const windowWidth = windowSizes.width;

export const sizes = {
  XL: 40,
  XXL: 60,
  XXXL: 80,
  gap: 8,
  large: 30,
  medium: 20,
  micro: 4,
  mini: 10,
  small: 12,
  standard: 16,
  window: {
    height: windowSizes.height,
    width: Platform.OS === "android" && windowWidth > 420 ? 420 : windowWidth,
  },
};
