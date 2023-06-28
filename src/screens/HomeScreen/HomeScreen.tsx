import {
  BlurCarouselItem,
  Body1,
  Caption,
  Header1,
  ParallaxCarousel,
  ScreenContainer,
  ScreenSubContainer,
} from "components/atoms";
import { ErrorUI } from "components/molecules";
import { NewCard } from "components/molecules/NewCard";
import { HomeTabStackReactNavigationProps } from "navigation/HomeTabStackNavigator/types";
import { useTransactionsBottomSheetStore } from "services/zustand";
import { Spacer, Stack } from "tamagui";
import { useLayoutAnimationOnChange } from "utils";
import { CarouselCard } from "./CarouselCard";
import { GlassVideo } from "./GlassVideo";
import { useAccountDetailsForHome } from "./hooks";
import { LoadingPlaceholder } from "./LoadingPlaceholder";
import { MakePaymentButton } from "./MakePaymentButton";
import { TransactionsBottomSheet } from "./TransactionsBottomSheet";

type HomeScreenProps = HomeTabStackReactNavigationProps<"HomeScreen">;
const colors = ["#26292E", "#899F9C", "#B3C680", "#5C6265", "#F5D399", "#F1F1F1"];

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const {
    loading,
    error,
    currentBalance,
    creditLimit,
    refetch,
    hasExistingPaymentMethods,
    cardArt,
  } = useAccountDetailsForHome();

  const setHomeScreenContentY = useTransactionsBottomSheetStore(
    (state) => state.setHomeScreenContentY,
  );

  useLayoutAnimationOnChange(loading);

  return (
    <>
      <ScreenContainer>
        <GlassVideo />
        {loading ? (
          <LoadingPlaceholder />
        ) : error ? (
          <ScreenSubContainer flex={1} justifyContent={"center"} alignItems={"center"}>
            <ErrorUI
              bodyText={"We couldn't load your account information."}
              handleTryAgain={refetch}
            />
          </ScreenSubContainer>
        ) : (
          <>
            <ScreenSubContainer alignItems={"center"}>
              <Spacer size={"$4"} />
              <Caption color={"$white70"}>{"BALANCE"}</Caption>
              <Spacer size={"$2"} />
              <Header1 textAlign={"center"} color={"white"}>
                {currentBalance}
              </Header1>
              <Spacer size={"$5"} />
              <Body1 color={"$white70"} fontWeight={"300"}>
                {`Credit limit: ${creditLimit}`}
              </Body1>
              <Spacer size={"$6"} />
              <Stack paddingHorizontal={-20}>
                <ParallaxCarousel
                  vertical={false}
                  //TODO need to pass real data of card list
                  data={colors}
                  renderItem={({ index, animationValue }) => (
                    <BlurCarouselItem animationValue={animationValue}>
                      {index === colors.length - 1 ? (
                        <NewCard />
                      ) : (
                        <CarouselCard cardArt={cardArt} />
                      )}
                    </BlurCarouselItem>
                  )}
                />
              </Stack>
              <Spacer size={"$6"} />
              <MakePaymentButton hasExistingPaymentMethods={hasExistingPaymentMethods} />
              <Spacer size={"$6"} />
              <Stack onLayout={setHomeScreenContentY} />
            </ScreenSubContainer>
          </>
        )}
      </ScreenContainer>
      <TransactionsBottomSheet />
    </>
  );
};

export { HomeScreen };
