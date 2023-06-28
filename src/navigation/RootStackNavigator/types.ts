import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackNavigatorParamList = {
  LandingScreen: undefined;
  EnterFeedbackScreen: undefined;
  BottomTabNavigator: undefined;
  Storybook: undefined;
  AddNewVirtualCard: undefined;
};

type RootStackNavigatorRouteName = keyof RootStackNavigatorParamList;

type RootStackReactNavigationProps<S extends RootStackNavigatorRouteName> =
  NativeStackScreenProps<RootStackNavigatorParamList, S>;

export type { RootStackNavigatorParamList, RootStackReactNavigationProps };
