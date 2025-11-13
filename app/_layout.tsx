import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useShareIntent } from "expo-share-intent";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import { Alert } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { hasShareIntent, shareIntent, resetShareIntent, error } =
    useShareIntent();

  useEffect(() => {
    if (hasShareIntent && shareIntent) {
      // Handle share intent data
      // shareIntent.text - raw text
      // shareIntent.webUrl - extracted URL
      // shareIntent.files - array of files
      // shareIntent.meta - metadata object

      // Process the share intent here
      // For now, we'll just log it - you can customize this to navigate or process the data

      Alert.alert(
        "Share intent received:",
        JSON.stringify({
          text: shareIntent.text,
          webUrl: shareIntent.webUrl,
          files: shareIntent.files,
          meta: shareIntent.meta,
        })
      );

      // Reset share intent after processing
      resetShareIntent();
    }
  }, [hasShareIntent, shareIntent, resetShareIntent]);

  if (error) {
    console.error("Share intent error:", error);
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
