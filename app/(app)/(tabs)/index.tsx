import { ScrollView, StyleSheet, View } from "react-native";

import { AccountCard } from "@/components/AccountCard";
import { Amount } from "@/components/Amount";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Pressable } from "@/components/Pressable";
import { Text } from "@/components/Text";
import { UserName } from "@/components/UserName";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const accounts = [
  {
    id: 2,
    bankName: "Голомт банк",
    title: "Дэлгүүр пос",
    accountNumber: "2025116077",
    balance: 100000.01,
    primaryColor: "#245BA5",
  },
  {
    id: 4,
    bankName: "Хас банк",
    title: "Хас банк",
    accountNumber: "5004410875",
    balance: 70000,
    primaryColor: "#E17000",
  },
  {
    id: 3,
    bankName: "Хаан банк",
    title: "Дэлгүүр пос",
    accountNumber: "5551169112",
    balance: 30000,
    primaryColor: "#04715E",
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
          paddingTop: insets.top,
          paddingHorizontal: sizes.medium,
          gap: sizes.medium,
        }}
      >
        <StatusBar style="light" />
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              width: 48,
              aspectRatio: 1,
              backgroundColor: colors.blue,
              borderRadius: 24,
            }}
          />
          <UserName title="С. Очмандах" company="Oneline Technology LLC" />
        </View>
      </View>
      <Container bgColor="#F5F5F7">
        <ScrollView
          contentContainerStyle={{ paddingBottom: sizes.medium }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              paddingVertical: sizes.standard,
              paddingHorizontal: sizes.micro,
            }}
          >
            <Text variant="Medium" fontSize={20}>
              Данс
            </Text>
          </View>
          <View style={styles.bluredContent}>
            {accounts.map((account) => {
              const maxBalanceAccount = accounts.reduce(
                (maxAccount, currentAccount) => {
                  return currentAccount.balance > maxAccount.balance
                    ? currentAccount
                    : maxAccount;
                },
                accounts[0]
              );
              return (
                <Circle
                  key={account.accountNumber}
                  width={
                    ((sizes.window.width - 24) * account.balance) / totalBalance
                  }
                  height={
                    (CARD_HEIGHT * account.balance) / maxBalanceAccount.balance
                  }
                  bgColor={account.primaryColor}
                />
              );
            })}
          </View>
          <BlurView
            style={styles.blurView}
            intensity={90}
            tint="systemUltraThinMaterialDark"
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
          <View style={{ gap: sizes.mini, marginTop: sizes.mini }}>
            {accounts.map((account) => (
              <Pressable
                key={account.id}
                onPress={() => router.push("/signIn")}
              >
                <AccountCard
                  title={account.title}
                  balance={account.balance}
                  accountNumber={account.accountNumber}
                  primaryColor={account.primaryColor}
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
        width,
        borderRadius: width / 2,
        height,
        backgroundColor: bgColor,
      }}
    />
  );
}

const styles = StyleSheet.create({
  blurView: {
    borderRadius: sizes.standard,
    width: "100%",
    aspectRatio: 5 / 3,
    overflow: "hidden",
    position: "absolute",
    top: 56,
    paddingLeft: sizes.standard,
    justifyContent: "center",
  },
  bluredContent: {
    borderRadius: sizes.standard,
    width: "100%",
    aspectRatio: 5 / 3,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
});
