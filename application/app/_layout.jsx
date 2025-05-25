import { Stack } from "expo-router";
// root layout for expo router
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="login" />
      <Stack.Screen name="(drawer)" />  {/* This is the main app */}
    </Stack>
  );
}