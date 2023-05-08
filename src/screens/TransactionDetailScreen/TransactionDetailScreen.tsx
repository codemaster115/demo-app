import {
  Body1,
  Body2,
  Caption,
  Header2,
  ScreenContainer,
  ScreenSubContainer,
} from "components/atoms";
import { ErrorUI } from "components/molecules";
import { PrimaryButton } from "components/molecules/buttons";
import { HomeTabStackReactNavigationProps } from "navigation/HomeTabStackNavigator/types";
import { Spacer, XStack, YStack } from "tamagui";
import { useLayoutAnimationOnChange } from "utils";
import { PointsWheel } from "./PointsWheel";
import { useTransactionById } from "./hooks";
import { LoadingPlaceholder } from "./LoadingPlaceholder";

type TransactionDetailScreenProps =
  HomeTabStackReactNavigationProps<"TransactionDetailScreen">;

const TransactionDetailScreen = ({
  route: {
    params: { transactionId },
  },
}: TransactionDetailScreenProps) => {
  const {
    loading,
    error,
    networkStatus,
    refetch,
    categoryName,
    merchantName,
    formattedTransactionDate,
    formattedDollars,
    status,
    last4OfCard,
    rewardDescription,
    areButtonsDisabled,
  } = useTransactionById(transactionId);

  useLayoutAnimationOnChange(networkStatus);

  return (
    <>
      <ScreenContainer>
        <Spacer size={"$8"} />
        {loading ? (
          <LoadingPlaceholder />
        ) : error ? (
          <ScreenSubContainer flex={1} justifyContent={"center"} alignItems={"center"}>
            <ErrorUI
              bodyText={"We couldn't load your transaction."}
              handleTryAgain={refetch}
            />
          </ScreenSubContainer>
        ) : (
          <>
            <ScreenSubContainer alignItems={"center"}>
              <Caption color={"$white70"}>{categoryName}</Caption>
              <Spacer size={"$4"} />
              <Header2 color={"$white"} textAlign={"center"}>
                {merchantName}
              </Header2>
              <Spacer size={"$4"} />
              <Body2 fontWeight={"500"} color={"$white70"}>
                {formattedTransactionDate}
              </Body2>
              <Spacer size={"$6"} />
              <Header2 color={"$white"}>{formattedDollars}</Header2>
              <Spacer size={"$9"} />
            </ScreenSubContainer>
            <PointsWheel />
            <ScreenSubContainer alignItems={"center"}>
              {rewardDescription ? (
                <>
                  <Spacer size={"$4"} />
                  <Body2 color={"$white70"}>{`${rewardDescription} earned`}</Body2>
                </>
              ) : null}

              <Spacer size={"$9"} />
              <XStack width={"$full"} justifyContent={"space-between"}>
                <Body1 fontWeight={"500"} color={"$white"} textTransform={"capitalize"}>
                  {"Status"}
                </Body1>
                <Body1 fontWeight={"500"} color={"$white70"} textTransform={"capitalize"}>
                  {status}
                </Body1>
              </XStack>
              <Spacer size={"$7"} />
              <XStack width={"$full"} justifyContent={"space-between"}>
                <Body1 fontWeight={"500"} color={"$white"} textTransform={"capitalize"}>
                  {"Card Details"}
                </Body1>
                <Body1 fontWeight={"500"} color={"$white70"} textTransform={"capitalize"}>
                  {last4OfCard}
                </Body1>
              </XStack>
            </ScreenSubContainer>
          </>
        )}
        <YStack />
      </ScreenContainer>
      <ScreenSubContainer backgroundColor={"$black"}>
        <PrimaryButton
          disabled={areButtonsDisabled}
          backgroundColor={"$black"}
          color={"$white50"}
        >
          {"Apply travel stipend"}
        </PrimaryButton>
        <Spacer size={"$4"} />
        <PrimaryButton disabled={areButtonsDisabled}>
          {"Request reimbursement"}
        </PrimaryButton>
        <Spacer size={"$7"} />
      </ScreenSubContainer>
    </>
  );
};

export { TransactionDetailScreen };
