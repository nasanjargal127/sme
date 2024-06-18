import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AccountCard } from "@/components/AccountCard";
import { Amount } from "@/components/Amount";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PosIcon } from "@/components/PosIcon";
import { Pressable } from "@/components/Pressable";
import { Text } from "@/components/Text";
import { UserCard } from "@/components/UserCard";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { AccountType } from "@/types";

const accounts: AccountType[] = [
  {
    accountNumber: "2025116077",
    balance: 100000.01,
    bankName: "Голомт банк",
    id: 2,
    primaryColor: "#245BA5",
    title: "Дэлгүүр пос",
  },
  {
    accountNumber: "5004410875",
    balance: 70000,
    bankName: "Хас банк",
    id: 4,
    primaryColor: "#E17000",
    title: "Хас банк",
  },
  {
    accountNumber: "5551169112",
    balance: 30000,
    bankName: "Хаан банк",
    id: 3,
    primaryColor: "#04715E",
    title: "Дэлгүүр пос",
  },
];

const CARD_HEIGHT = ((sizes.window.width - 24) / 5) * 3;

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const totalBalance = accounts.reduce(
    (acc, account) => acc + account.balance,
    0
  );

  return (
    <>
      <View
        style={{
          gap: sizes.medium,
          paddingHorizontal: sizes.medium,
          paddingTop: insets.top,
        }}
      >
        <StatusBar style="light" />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 12,
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              aspectRatio: 1,
              backgroundColor: colors.blue,
              borderRadius: 24,
              width: 48,
            }}
          />
          <UserCard title="С. Очмандах" company="Oneline Technology LLC" />
        </View>
      </View>
      <Container bgColor="#F5F5F7">
        <ScrollView
          contentContainerStyle={{ paddingBottom: sizes.medium }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              paddingHorizontal: sizes.micro,
              paddingVertical: sizes.standard,
            }}
          >
            <Text variant="Medium" fontSize={20}>
              Данс
            </Text>
          </View>
          {accounts.length > 1 ? (
            <>
              <View style={styles.bluredContent}>
                {accounts?.map((account) => {
                  const maxBalanceAccount = accounts.reduce(
                    (maxAccount, currentAccount) => {
                      return currentAccount.balance > maxAccount.balance
                        ? currentAccount
                        : maxAccount;
                    },
                    accounts[0]
                  );

                  const width =
                    ((sizes.window.width - sizes.small * 2) * account.balance) /
                    totalBalance;

                  const height =
                    (CARD_HEIGHT * account.balance) / maxBalanceAccount.balance;

                  return (
                    <Circle
                      key={account.accountNumber}
                      width={width}
                      height={height}
                      bgColor={account.primaryColor}
                    />
                  );
                })}
              </View>
              <BlurView
                style={styles.blurView}
                intensity={90}
                tint="systemUltraThinMaterialDark"
                blurReductionFactor={4}
                experimentalBlurMethod="dimezisBlurView"
              >
                <Text style={{ color: colors["white-60"] }}>
                  {accounts.length} дансны нийт үлдэгдэл
                </Text>
                <Amount
                  amount={totalBalance}
                  style={{ marginTop: sizes.mini }}
                  color={colors.white}
                />
              </BlurView>
            </>
          ) : null}
          {accounts.length === 0 ? (
            <View>
              <LinearGradient
                colors={["#006CED", "#8750FD"]}
                style={styles.gradientView}
                locations={[0.8, 0.2]}
                start={{ x: 0.9, y: 0.9 }}
                end={{ x: 0, y: 1 }}
              >
                <View style={{ width: 180 }}>
                  <Text fontSize={18} style={{ color: colors.white }}>
                    Та мерчанд болоход бэлэн үү?
                  </Text>
                  <Pressable
                    onPress={() => router.navigate("/send-request")}
                    style={styles.button}
                  >
                    <Text fontSize={18} style={{ color: colors.white }}>
                      Хүсэлт илгээх
                    </Text>
                  </Pressable>
                </View>
                <PosIcon />
              </LinearGradient>
            </View>
          ) : (
            <View style={{ gap: sizes.mini, marginTop: sizes.mini }}>
              {accounts.map((account) => (
                <Pressable
                  key={account.id}
                  onPress={() =>
                    router.navigate({
                      params: { bankId: account.id },
                      pathname: "/account/account-detail",
                    })
                  }
                >
                  <AccountCard
                    title={account.title}
                    balance={account.balance}
                    accountNumber={account.accountNumber}
                    textColor={account.primaryColor}
                    bankId={account.id}
                  />
                </Pressable>
              ))}
              <Button
                title="Данс нэмэх"
                contained={false}
                onPress={() => console.log("ok")}
                disabled={false}
              />
            </View>
          )}
        </ScrollView>
      </Container>
    </>
  );
}

function Circle({
  width,
  height,
  bgColor,
}: {
  height: number;
  width: number;
  bgColor: string;
}) {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        borderRadius: width / 2,
        height,
        width,
      }}
    />
  );
}

const styles = StyleSheet.create({
  blurView: {
    aspectRatio: 5 / 3,
    borderRadius: sizes.standard,
    justifyContent: "center",
    overflow: "hidden",
    paddingLeft: sizes.standard,
    position: "absolute",
    top: 56,
    width: "100%",
  },
  bluredContent: {
    alignItems: "center",
    aspectRatio: 5 / 3,
    backgroundColor: colors.white,
    borderRadius: sizes.standard,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    width: "100%",
  },
  button: {
    alignSelf: "flex-start",
    borderColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: sizes.medium,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  gradientView: {
    alignItems: "center",
    aspectRatio: 5 / 3,
    borderRadius: sizes.standard,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: sizes.small * 2,
  },
});
