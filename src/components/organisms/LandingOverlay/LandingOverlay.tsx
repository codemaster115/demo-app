import { useState } from "react";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useGetAccountOpenDateQuery } from "services/graphql/generated";
import { useArtificialLoadingDelay, useHideSplashScreen } from "./hooks";
import { LoggedInUI } from "./LoggedInUI";
import { LoggedOutUI } from "./LoggedOutUI";

SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  landingOverlaySafeArea: {
    zIndex: 100,
  },
});

const LandingOverlayWithoutSafeArea = () => {
  const isLoggedIn = true;
  const { data } = useGetAccountOpenDateQuery({
    fetchPolicy: "cache-first",
    skip: !isLoggedIn,
  });

  const [initialEmploymentStartDate] = useState(
    data?.cardholder?.__typename === "Cardholder"
      ? data.cardholder.employmentStartDate
      : undefined,
  );

  if (isLoggedIn && initialEmploymentStartDate) {
    return <LoggedInUI employmentStartDate={initialEmploymentStartDate} />;
  }

  return <LoggedOutUI />;
};

const LandingOverlay = () => {
  const isArtificiallyLoading = useArtificialLoadingDelay();

  useHideSplashScreen();

  return !isArtificiallyLoading ? null : (
    <SafeAreaProvider style={[StyleSheet.absoluteFill, styles.landingOverlaySafeArea]}>
      <LandingOverlayWithoutSafeArea />
    </SafeAreaProvider>
  );
};

export { LandingOverlay };
