import React from "react";
import { Image, StyleSheet, View } from "react-native";

export function PosIcon({
  bgColor = "rgba(255, 255, 255, 0.1)",
}: {
  bgColor?: string;
}) {
  return (
    <View
      style={[
        {
          backgroundColor: bgColor,
        },
        styles.container,
      ]}
    >
      <Image
        source={require("@/assets/images/pos_icon_2x.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    borderRadius: 50,
    position: "relative",
    width: 87,
  },
  image: {
    bottom: -20,
    height: 100,
    left: -16,
    position: "absolute",
    width: 100,
  },
});
