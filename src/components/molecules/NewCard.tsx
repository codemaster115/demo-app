import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PlusCircle } from "@tamagui/lucide-icons";
import { Caption, Touchable } from "components/atoms";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "screens/HomeScreen/styles";
import { Spacer } from "tamagui";

const NewCard = () => {
  const navigation = useNavigation();

  return (
    <Touchable
      style={styles.flipCard}
      borderRadius={"$4"}
      pressStyle={undefined}
      overflow={"hidden"}
      alignItems={"center"}
      justifyContent={"center"}
      onPress={() => navigation.navigate("AddNewVirtualCard")}
    >
      <LinearGradient colors={["#3E3E3E", "#1F1F1F"]} style={StyleSheet.absoluteFill} />
      <PlusCircle color={"$white"} strokeWidth={1} size={"$8"} />
      <Spacer size={"$6"} />
      <Caption color={"$white50"}>{"NEW VIRTUAL CARD"}</Caption>
    </Touchable>
  );
};

export { NewCard };
