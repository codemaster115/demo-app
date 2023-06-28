import { useMemo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getColorValue } from "theme/utils";
import { useNavigationExperience } from "navigation/hooks";
import { BottomTabNavigator } from "navigation/BottomTabNavigator";
import { Caption, Header3 } from "components/atoms";
import { AddNewVirtualCard } from "screens/AddNewVirtualCard";
import { Storybook } from "../../../.storybook/Storybook";
import { RootStackNavigatorParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

const RENDER_STORYBOOK = __DEV__ && false;

const RootStackNavigator = () => {
  const navigationExperience = useNavigationExperience();
  const screens = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (RENDER_STORYBOOK) {
      return <Stack.Screen name={"Storybook"} component={Storybook} />;
    }

    if (navigationExperience === "logged in") {
      // location for new screens to go without navbar

      return (
        <Stack.Group
          screenOptions={({ route }) => ({
            headerTitle: () =>
              route.name === "EnterFeedbackScreen" ? (
                <Header3 textAlign={"center"} color={"$white"}>
                  {"Feedback"}
                </Header3>
              ) : (
                ""
              ),
            headerStyle: { backgroundColor: getColorValue("black") },
            headerBackTitleVisible: false,
            headerLeft: () => null,
          })}
        >
          <Stack.Screen
            name={"BottomTabNavigator"}
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"AddNewVirtualCard"}
            component={AddNewVirtualCard}
            options={{
              headerTitle: () => <Caption color={"$white"}>{"NEW VIRTUAL CARD"}</Caption>,
              headerBackTitleVisible: true,
              headerBackTitle: "bbs",
              headerBackTitleStyle: { fontSize: 40 },
            }}
          />
        </Stack.Group>
      );
    }
  }, [navigationExperience]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: getColorValue("white"),
      }}
    >
      {screens}
    </Stack.Navigator>
  );
};

export { RootStackNavigator };
