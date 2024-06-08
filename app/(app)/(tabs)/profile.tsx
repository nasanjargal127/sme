import { Container } from "@/components/Container";
import { Pressable } from "@/components/Pressable";
import { Text } from "@/components/Text";
import { UserName } from "@/components/UserName";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={{
          paddingTop: insets.top + sizes.medium,
          paddingBottom: sizes.medium,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.blue,
            width: sizes.medium * 5,
            aspectRatio: 1,
            borderRadius: (sizes.medium * 5) / 2,
            marginBottom: sizes.standard,
          }}
        />
        <UserName
          title="С. Очмандах"
          company="Oneline Technology LLC"
          isTitleAlign
        />
      </View>
      <Container style={{ paddingTop: sizes.standard, gap: sizes.small }}>
        <Row
          icon={
            <MaterialIcons name="checklist" size={18} color={colors.blue} />
          }
          title="Хувийн мэдээлэл"
          onPress={() => console.log("ok")}
        />
        <Row
          icon={
            <MaterialIcons name="sticky-note-2" size={20} color={colors.blue} />
          }
          title="Эрхийн тохиргоо"
          onPress={() => console.log("ok")}
        />
        <Row
          icon={<MaterialIcons name="logout" size={18} color={colors.blue} />}
          title="Системээс гарах"
          onPress={() => console.log("ok")}
        />
      </Container>
    </>
  );
}

function Row({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon: ReactNode;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.rowContainer} onPress={onPress}>
      {icon}
      <Text fontSize={16} variant="Medium" style={{ color: colors.darkBlue }}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    borderRadius: sizes.standard,
    borderColor: colors.lightBlue,
    padding: sizes.standard + 1,
    borderWidth: 1,
    flexDirection: "row",
    gap: sizes.medium,
  },
  container: {
    display: "flex",
  },
});
