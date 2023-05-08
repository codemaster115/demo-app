import { StyleSheet } from "react-native";
import {
  ScreenContainer,
  ScreenSubContainer,
  Body1,
  Header2,
  LogoWithWordmark,
} from "components/atoms";
import Animated, { FadeOut } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Spacer, YStack } from "tamagui";
import { formatUTCString } from "utils";

type LoggedInUIProps = {
  employmentStartDate: string;
};

const styles = StyleSheet.create({
  animatedView: { flex: 1 },
});

const LoggedInUI = ({ employmentStartDate }: LoggedInUIProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Animated.View exiting={FadeOut} style={styles.animatedView}>
      <ScreenContainer>
        <ScreenSubContainer flex={1} alignItems={"center"} justifyContent={"center"}>
          <Body1 color={"$white"}>{"Employee Since"}</Body1>
          <Spacer size={"$2"} />
          <Header2 color={"$white"}>
            {formatUTCString(employmentStartDate, "yyyy")}
          </Header2>
          <YStack position={"absolute"} bottom={bottom}>
            <LogoWithWordmark />
          </YStack>
        </ScreenSubContainer>
      </ScreenContainer>
    </Animated.View>
  );
};

export { LoggedInUI };
