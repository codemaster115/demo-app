import Animated, { interpolateColor, useAnimatedStyle } from "react-native-reanimated";
import { Circle, CircleProps } from "tamagui";

type PaginationItemProps = CircleProps & {
  index: number;
  activeColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const PaginationItem = (props: PaginationItemProps) => {
  const { animValue, index, length, isRotate, activeColor, ...circleProps } = props;

  const colorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animValue.value,
      Array(length)
        .fill(0)
        .map((_, i) => i),
      Array(length)
        .fill("white")
        .map((v, i) => (i === index ? "gray" : v)),
    );

    return { backgroundColor };
  }, [index]);

  return (
    <AnimatedCircle
      {...circleProps}
      overflow={"hidden"}
      transform={[
        {
          rotateZ: isRotate ? "90deg" : "0deg",
        },
      ]}
      style={colorStyle}
    />
  );
};

export { PaginationItem };
