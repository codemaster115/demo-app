import { useNavigation } from "@react-navigation/native";
import { AspectImage, RemoteImage, Touchable } from "components/atoms";
import { FlipCard, FlipSide } from "components/molecules/FlipCard";
import { Stack } from "tamagui";
import { CardNumbers } from "./CardNumbers";
import { useCardVisibility } from "./hooks";
import { LoadingPlaceholder as CardNumbersLoadingPlaceholder } from "./LoadingPlaceholder";
import { CARD_IMAGE_ASPECT_RATIO, CARD_IMAGE_WIDTH, styles } from "./styles";

const CarouselCard = ({ cardArt }) => {
  const navigation = useNavigation();
  const {
    isFrontOfCardVisible,
    handleFlipCard,
    maybePrimaryCardData,
    loading: isPrimaryCardDataLoading,
  } = useCardVisibility(navigation);

  return (
    <Touchable onPress={handleFlipCard} pressStyle={undefined}>
      {cardArt ? (
        <FlipCard
          style={styles.flipCard}
          side={isFrontOfCardVisible ? FlipSide.FRONT : FlipSide.BACK}
          front={
            <RemoteImage
              width={CARD_IMAGE_WIDTH}
              aspectRatio={CARD_IMAGE_ASPECT_RATIO}
              uri={cardArt.frontImageUrl}
            />
          }
          back={
            <Stack>
              <RemoteImage
                width={CARD_IMAGE_WIDTH}
                aspectRatio={CARD_IMAGE_ASPECT_RATIO}
                uri={cardArt.backImageUrl}
              />
              {isPrimaryCardDataLoading ? (
                <CardNumbersLoadingPlaceholder />
              ) : (
                <CardNumbers
                  formattedCardNumber={maybePrimaryCardData?.formattedCardNumber}
                  formattedExpirationDate={maybePrimaryCardData?.formattedExpirationDate}
                  cvv={maybePrimaryCardData?.cvv}
                />
              )}
            </Stack>
          }
        />
      ) : (
        <AspectImage imageName={"default-hypercard"} width={CARD_IMAGE_WIDTH} />
      )}
    </Touchable>
  );
};

export { CarouselCard };
