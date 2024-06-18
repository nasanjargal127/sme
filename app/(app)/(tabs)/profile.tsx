import React from "react";
import { StyleSheet, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Container } from "@/components/Container";
import { Icon, IconName } from "@/components/Icon";
import { Pressable } from "@/components/Pressable";
import { Text } from "@/components/Text";
import { UserCard } from "@/components/UserCard";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";

export default function TabTwoScreen() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={[styles.container, { paddingTop: insets.top + sizes.medium }]}
      >
        <View style={styles.profile} />
        <UserCard
          title="С. Очмандах"
          company="Oneline Technology LLC"
          isTitleAlign
        />
      </View>
      <Container style={{ gap: sizes.small, paddingTop: sizes.standard }}>
        <Row
          iconName="outlined-task-list"
          title="Хувийн мэдээлэл"
          onPress={() => console.log("ok")}
        />
        <Row
          iconName="receipt"
          title="Эрхийн тохиргоо"
          onPress={() => console.log("ok")}
        />
        <Row
          iconName="arrow-hook-down-right"
          title="Системээс гарах"
          onPress={() => console.log("ok")}
        />
      </Container>
    </>
  );
}

function Row({
  title,
  iconName,
  onPress,
}: {
  title: string;
  iconName: IconName;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.rowContainer} onPress={onPress}>
      <Icon name={iconName} height={20} color={colors.blue} />
      <Text fontSize={16} variant="Medium" style={{ color: colors.darkBlue }}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: sizes.medium,
  },
  profile: {
    aspectRatio: 1,
    backgroundColor: colors.blue,
    borderRadius: (sizes.medium * 5) / 2,
    marginBottom: sizes.standard,
    width: sizes.medium * 5,
  },
  rowContainer: {
    borderColor: colors.lightBlue,
    borderRadius: sizes.standard,
    borderWidth: 1,
    flexDirection: "row",
    gap: sizes.medium,
    padding: sizes.standard + 1,
  },
});
