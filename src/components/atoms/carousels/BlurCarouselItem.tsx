import { StyleSheet } from "react-native";
import { BlurView as _BlurView } from "expo-blur";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { XStackProps, XStack } from "tamagui";

const BlurView = Animated.createAnimatedComponent(_BlurView);

type BlurCarouselItemProps = XStackProps & {
  animationValue: Animated.SharedValue<number>;
};

const BlurCarouselItem = ({
  animationValue,
  children,
  ...rest
}: BlurCarouselItemProps) => {
  const maskStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animationValue.value, [-1, 0, 1], [1, 0, 1]);

    return {
      opacity,
    };
  }, [animationValue]);

  return (
    <XStack
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"hidden"}
      borderRadius={"$6"}
      {...rest}
    >
      {children}
      <BlurView
        intensity={50}
        pointerEvents={"none"}
        style={[StyleSheet.absoluteFill, maskStyle]}
      />
    </XStack>
  );
};

export { BlurCarouselItem };
