import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { AnimatedAspectImage } from "components/atoms";
import Animated, {
  useSharedValue,
  withDelay,
  withSpring,
  useAnimatedStyle,
  FadeOut,
  FadeIn,
  interpolate,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getColorValue } from "theme/utils";
import {
  ARTIFICIAL_LOADING_DELAY,
  ENDING_WORDMARK_ANIMATION_SCALE,
  STARTING_WORDMARK_WIDTH,
} from "./constants";

const styles = StyleSheet.create({
  animatedView: {
    backgroundColor: getColorValue("black"),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const LoggedOutUI = () => {
  const [yPositionOfWordmark, setYPositionOfWordmark] = useState<number | undefined>(
    undefined,
  );
  const sharedValue = useSharedValue(0);
  const { top } = useSafeAreaInsets();

  const toValue = -(yPositionOfWordmark ?? 0) + top;

  useEffect(() => {
    if (yPositionOfWordmark !== undefined) {
      sharedValue.value = withDelay(
        ARTIFICIAL_LOADING_DELAY - 1500,
        withSpring(toValue, {
          stiffness: 25,
        }),
      );
    }
  }, [sharedValue, toValue, top, yPositionOfWordmark]);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      sharedValue.value,
      [0, toValue],
      [1, ENDING_WORDMARK_ANIMATION_SCALE],
    );

    return {
      width: 150,
      height: 50,
      transform: [{ translateY: sharedValue.value }, { scale }],
    };
  }, [toValue]);

  return (
    <Animated.View exiting={FadeOut} style={styles.animatedView}>
      <AnimatedAspectImage
        imageName={"logo-with-wordmark"}
        onLayout={(event) => {
          setYPositionOfWordmark(event.nativeEvent.layout.y);
        }}
        style={animatedStyle}
        entering={FadeIn}
        width={STARTING_WORDMARK_WIDTH}
      />
    </Animated.View>
  );
};

export { LoggedOutUI };
