import { Dimensions, StyleSheet } from "react-native";

const PAGE_WIDTH = Dimensions.get("window").width;

const carouselStyles = StyleSheet.create({
  container: {
    width: PAGE_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { carouselStyles };
