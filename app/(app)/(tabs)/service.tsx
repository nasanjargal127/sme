import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { IconButton } from "@/components/IconButton";
import { PosIcon } from "@/components/PosIcon";
import { Pressable } from "@/components/Pressable";
import { Text } from "@/components/Text";
import { colors } from "@/constants/colors";
import { serviceData } from "@/constants/data";
import { sizes } from "@/constants/sizes";
import { ServiceType } from "@/types";

export default function Service() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={{
          paddingHorizontal: sizes.standard,
          paddingTop: insets.top,
        }}
      >
        <StatusBar style="light" />
        <View style={styles.headerContainer}>
          <Text fontSize={26} variant="Bold" style={{ color: colors.white }}>
            Үйлчилгээ
          </Text>
          <IconButton icon="alert" onPress={() => console.log("ok")} />
        </View>
      </View>
      <Container style={{ backgroundColor: colors.gray }}>
        <FlatList
          contentContainerStyle={{
            gap: sizes.small,
            paddingBottom: sizes.medium,
          }}
          columnWrapperStyle={{ gap: 12 }}
          showsVerticalScrollIndicator={false}
          data={serviceData}
          numColumns={2}
          ListHeaderComponent={
            <>
              <Text fontSize={20} style={styles.title} variant="SemiBold">
                Миний ПОС
              </Text>
              <View
                style={{
                  backgroundColor: colors.white,
                  borderRadius: sizes.standard,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: sizes.standard,
                }}
              >
                <View>
                  <Text
                    fontSize={14}
                    style={{ color: "#245BA5" }}
                    variant="Medium"
                  >
                    Дэлгүүр ПОС
                  </Text>
                  <Text style={{ color: colors["darkBlue-40"] }}>
                    2025116077
                  </Text>
                  <Pressable
                    onPress={() => console.log("ok")}
                    style={styles.button}
                  >
                    <Text fontSize={18} style={{ color: colors.blue }}>
                      Хүсэлт илгээх
                    </Text>
                  </Pressable>
                </View>
                <PosIcon bgColor={colors.lightBlue} />
              </View>
              <Text
                fontSize={20}
                style={[styles.title, { marginTop: sizes.medium }]}
                variant="SemiBold"
              >
                Бизнест зориулсан үйлчилгээ
              </Text>
            </>
          }
          renderItem={({ item }: { item: ServiceType }) => (
            <Pressable
              onPress={() => console.log("ok")}
              style={styles.container}
            >
              <View style={styles.iconContainer}>
                <Icon name={item.icon} />
              </View>
              <Text variant="Medium" style={{ color: colors.darkBlue }}>
                {item.text}
              </Text>
            </Pressable>
          )}
        />
      </Container>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    borderColor: colors.lightBlue,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: sizes.medium,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: sizes.standard,
    gap: sizes.small,
    paddingBottom: sizes.standard,
    paddingHorizontal: sizes.standard,
    paddingTop: sizes.small,
    width: (sizes.window.width - 36) / 2,
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    paddingBottom: sizes.medium,
    paddingTop: sizes.micro,
  },
  iconContainer: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: colors.lightBlue,
    borderRadius: 24,
    justifyContent: "center",
    width: 48,
  },
  title: {
    color: colors.darkBlue,
    paddingLeft: sizes.micro,
    paddingVertical: sizes.standard,
  },
});
