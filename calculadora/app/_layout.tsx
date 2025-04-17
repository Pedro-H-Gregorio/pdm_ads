import { Stack } from "expo-router";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $textColor: "#0275d8",
});

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Calculadora" }} />
    </Stack>
  );
}
