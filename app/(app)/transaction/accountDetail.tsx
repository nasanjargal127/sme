import React, { useEffect, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { format } from "date-fns";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AccountCard } from "@/components/AccountCard";
import { BottomSheet } from "@/components/BottomSheet";
import { Container } from "@/components/Container";
import { Icon, IconName } from "@/components/Icon";
import { Pressable } from "@/components/Pressable";
import { Text } from "@/components/Text";
import { TransactionDetail } from "@/components/TransationDetail";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";

const statementData = [
  {
    amount: 500000,
    description: "Борлуулалтын орлого",
    isIncome: true,
    title: "Картын гүйлгээ",
  },
  {
    amount: 500000,
    description: "Борлуулалтын орлого",
    isIncome: false,
    title: "Картын гүйлгээ",
  },
];

export default function AccountDetail() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      contentStyle: {
        backgroundColor: params.primaryColor,
      },
      headerStyle: { backgroundColor: params.primaryColor },
    });
  }, [navigation, params?.primaryColor]);

  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          paddingBottom: sizes.medium,
          paddingHorizontal: sizes.small,
          paddingTop: sizes.small,
        }}
      >
        <AccountCard
          title="Дэлгүүр"
          bgColor={colors["white-20"]}
          balance={292992999999}
          accountNumber="2025116077"
          textColor={colors.white}
          bankId={2}
        />
      </View>
      <Container style={{ backgroundColor: colors.white }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <View style={{ flexDirection: "row", gap: sizes.small }}>
                <ActionButton
                  onPress={() =>
                    router.navigate({
                      params: { primaryColor: params.primaryColor },
                      pathname: "/transaction/transfer",
                    })
                  }
                  iconName="history"
                  text="Гүйлгээ хийх"
                  bgColor={params.primaryColor as string}
                />
                <ActionButton
                  onPress={() => console.log("ok")}
                  iconName="history"
                  text="Хуулга харах"
                  bgColor={params.primaryColor as string}
                />
              </View>
              <Text
                variant="Medium"
                fontSize={18}
                style={{ color: colors.darkBlue, marginTop: sizes.XL }}
              >
                Сүүлийн 10 гүйлгээ
              </Text>
            </>
          }
          contentContainerStyle={{
            paddingBottom: sizes.medium + insets.bottom,
            paddingTop: sizes.standard,
          }}
          data={statementData}
          renderItem={({ item }) => (
            <Pressable onPress={() => bottomSheetRef.current?.present()}>
              <Divider />
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    gap: sizes.small,
                  }}
                >
                  <View
                    style={[
                      {
                        backgroundColor: item.isIncome
                          ? colors["green-10"]
                          : colors["red-10"],
                      },
                      styles.iconContainer,
                    ]}
                  >
                    <Icon
                      name={item.isIncome ? "arrow-down" : "arrow-up"}
                      height={19}
                      color={item.isIncome ? colors.green : colors.red}
                    />
                  </View>
                  <View>
                    <Text style={{ color: colors["darkBlue-60"] }}>
                      {item.title}
                    </Text>
                    <Text
                      fontSize={14}
                      style={{ color: colors["darkBlue-40"] }}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
                <Text
                  variant="Medium"
                  fontSize={18}
                  style={{
                    color: item.isIncome ? colors.green : colors.darkBlue,
                  }}
                >
                  {item.isIncome ? "+" : "-"}
                  {item.amount.toLocaleString()}₮
                </Text>
              </View>
            </Pressable>
          )}
        />
      </Container>
      <BottomSheet
        handleComponent={null}
        bottomSheetModalRef={bottomSheetRef}
        enableDynamicSizing
      >
        <BottomSheetView
          style={{
            paddingBottom: insets.bottom + sizes.medium,
            paddingHorizontal: sizes.standard,
            paddingVertical: sizes.standard - 2,
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ color: colors.darkBlue }}
              variant="Bold"
              fontSize={20}
            >
              Зарлага
            </Text>
            <Pressable
              style={styles.closeIconContainer}
              onPress={() => bottomSheetRef.current?.dismiss()}
            >
              <Icon
                name="dismiss"
                height={28}
                color={params?.primaryColor as string}
              />
            </Pressable>
          </View>
          <View style={{ gap: sizes.standard, marginTop: sizes.standard - 2 }}>
            <Text fontSize={14} style={{ color: colors.darkBlue }}>
              {format(new Date(), "yyyy-MM-dd HH:mm")}
            </Text>
            <Text fontSize={14} style={{ color: colors.darkBlue }}>
              trn7172945189237123
            </Text>
          </View>
          <View style={{ paddingTop: sizes.medium + 4 }}>
            <TransactionDetail
              receiverName="Уанлайн Технологи ХХК"
              receiverAccountNumber="2025116077"
              receiverBankId={2}
              amount={500000}
              fee="200"
              description="hoes"
              myAccountName="Уанлайн Технологи ХХК"
              myAccountNumber="2025116077"
              balance={993933993}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

function ActionButton({
  iconName,
  onPress,
  text,
  bgColor,
}: {
  iconName: IconName;
  onPress: () => void;
  text: string;
  bgColor: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        borderRadius: sizes.medium,
        flex: 1,
        padding: sizes.standard,
      }}
    >
      <View style={styles.iconAccountButton}>
        <Icon name={iconName} height={28} color={colors.white} />
      </View>
      <Text style={{ color: colors.white, marginTop: sizes.small }}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  closeIconContainer: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: colors["darkBlue-10"],
    borderRadius: 18,
    justifyContent: "center",
    width: 36,
  },
  divider: {
    borderTopColor: "#F7F7F7",
    borderTopWidth: 1,
    marginVertical: sizes.small,
  },
  iconAccountButton: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: colors["white-20"],
    borderRadius: 22,
    height: 44,
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: "center",
    width: 50,
  },
});
