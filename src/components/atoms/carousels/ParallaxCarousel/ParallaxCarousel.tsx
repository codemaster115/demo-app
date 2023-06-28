import { useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import type {
  IComputedDirectionTypes,
  TCarouselProps,
} from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { Stack } from "tamagui";
import { PaginationItem } from "../PaginationItem";
import { carouselStyles } from "./styles";

interface ILayoutConfig {
  /**
   * control prev/next item offset.
   * @default 100
   */
  parallaxScrollingOffset?: number;
  /**
   * control prev/current/next item offset.
   * @default 0.8
   */
  parallaxScrollingScale?: number;
  /**
   * control prev/next item offset.
   * @default Math.pow(parallaxScrollingScale, 2)
   */
  parallaxAdjacentItemScale?: number;
}

type TParallaxModeProps = IComputedDirectionTypes<{
  /**
   * Carousel Animated transitions.
   */
  mode?: "parallax";
  modeConfig?: ILayoutConfig;
}>;

// interface TBaseConfig {
//   size: number;
//   vertical: boolean;
// }

// TODO custom parallax carousel animation config
// function parallaxLayout(baseConfig: TBaseConfig, modeConfig: ILayoutConfig = {}) {
//   const { size, vertical } = baseConfig;
//   const {
//     parallaxScrollingOffset = 100,
//     parallaxScrollingScale = 0.8,
//     parallaxAdjacentItemScale = parallaxScrollingScale ** 2,
//   } = modeConfig;

//   return (value: number) => {
//     "worklet";
//     const translate = interpolate(
//       value,
//       [-1, 0, 1],
//       [-size + parallaxScrollingOffset, 0, size - parallaxScrollingOffset],
//     );

//     const zIndex = interpolate(value, [-1, 0, 1], [0, size, 0], Extrapolate.CLAMP);

//     const scale = interpolate(
//       value,
//       [-1, 0, 1],
//       [parallaxAdjacentItemScale, parallaxScrollingScale, parallaxAdjacentItemScale],
//       Extrapolate.CLAMP,
//     );

//     return {
//       transform: [
//         vertical
//           ? {
//               translateY: translate,
//             }
//           : {
//               translateX: translate,
//             },
//         {
//           scale,
//         },
//       ],
//       zIndex,
//     };
//   };
// }

type ParallaxCarouseProps<T> = Omit<TCarouselProps<T>, "mode" | "modeConfig"> &
  Omit<TParallaxModeProps, "width" | "height"> & {
    showPaginationDots?: boolean;
  };

const ParallaxCarousel = <T,>({
  showPaginationDots = true,
  modeConfig = {
    parallaxScrollingScale: 0.95,
    parallaxScrollingOffset: 50,
  },
  data,
  renderItem,
  vertical: isVertical,
  ...rest
}: ParallaxCarouseProps<T>) => {
  const { width } = useWindowDimensions();
  const progressValue = useSharedValue<number>(0);
  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: width * 0.86,
        height: width * 0.6,
      } as const)
    : ({
        vertical: false,
        width: width * 0.95,
        height: width * 0.54,
      } as const);

  return (
    <Stack alignItems={"center"}>
      <Carousel
        {...baseOptions}
        style={carouselStyles.container}
        loop={false}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode={"parallax"}
        modeConfig={modeConfig}
        scrollAnimationDuration={1200}
        // customAnimation={parallaxLayout(
        //   {
        //     size: PAGE_WIDTH * 0.88,
        //     vertical: false,
        //   },
        //   {
        //     parallaxScrollingScale: 1,
        //     parallaxAdjacentItemScale: 0.8,
        //     parallaxScrollingOffset: 40,
        //   },
        // )}
        data={data}
        renderItem={renderItem}
        {...rest}
      />
      {showPaginationDots && (
        <Stack
          flexDirection={isVertical ? "column" : "row"}
          justifyContent={"space-between"}
          alignSelf={"center"}
          position={isVertical ? "absolute" : "relative"}
          width={isVertical ? "$4" : "$10"}
        >
          {data.map((backgroundColor, index) => (
            <PaginationItem
              size={"$3"}
              backgroundColor={"$white"}
              activeColor={"red"}
              animValue={progressValue}
              index={index}
              key={`${index} -${backgroundColor}`}
              isRotate={isVertical}
              length={data.length}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export { ParallaxCarousel };
