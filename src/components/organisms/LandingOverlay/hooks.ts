import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ARTIFICIAL_LOADING_DELAY, SPLASH_SCREEN_HIDE_DELAY } from "./constants";

const useArtificialLoadingDelay = () => {
  const [isArtificiallyLoading, setIsArtificiallyLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsArtificiallyLoading(false);
    }, ARTIFICIAL_LOADING_DELAY);

    return () => clearTimeout(timeout);
  }, []);

  return isArtificiallyLoading;
};

const useHideSplashScreen = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hideAsync();
    }, SPLASH_SCREEN_HIDE_DELAY);

    return () => clearTimeout(timeout);
  }, []);
};

export { useHideSplashScreen, useArtificialLoadingDelay };
