import { Container } from "@/components/Container";
import { Icon, IconName } from "@/components/Icon";
import { Pressable } from "@/components/Pressable";
import { Text } from "@/components/Text";
import { UserName } from "@/components/UserName";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={[styles.container, { paddingTop: insets.top + sizes.medium }]}
      >
        <View style={styles.profile} />
        <UserName
          title="С. Очмандах"
          company="Oneline Technology LLC"
          isTitleAlign
        />
      </View>
      <Container style={{ paddingTop: sizes.standard, gap: sizes.small }}>
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
    paddingBottom: sizes.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    borderRadius: sizes.standard,
    borderColor: colors.lightBlue,
    padding: sizes.standard + 1,
    borderWidth: 1,
    flexDirection: "row",
    gap: sizes.medium,
  },
  profile: {
    backgroundColor: colors.blue,
    width: sizes.medium * 5,
    aspectRatio: 1,
    borderRadius: (sizes.medium * 5) / 2,
    marginBottom: sizes.standard,
  },
});
