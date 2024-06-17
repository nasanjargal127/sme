import { ScrollView, View } from "react-native";

import { useForm } from "react-hook-form";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";

export default function SendRequest() {
  const { control } = useForm();
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{
        gap: sizes.small,
        paddingBottom: insets.bottom + sizes.medium,
        paddingHorizontal: sizes.small,
        paddingTop: sizes.medium + 4,
      }}
    >
      <View style={{ flexDirection: "row", gap: sizes.small }}>
        <Icon name="book-information" />

        <Text style={{ color: colors["darkBlue-60"] }}>
          Та хүсэлт өгөхдөө ийм зүйлийг анхаарна уу. Таны хүсэлт 1-3 хоногийн
          дотор шийдвэрлэгдэнэ.
        </Text>
      </View>
      <Input label="Овог*" control={control} name="firstName" />
      <Input label="Нэр*" control={control} name="lastName" />
    </ScrollView>
  );
}
