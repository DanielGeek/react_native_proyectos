import { colors } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80
  },
  difficulty: {
    color: colors.lightGreen,
    fontSize: 22,
    textAlign: "center",
    marginTop: 20
  },
  results: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 80
  }
});

export default styles;
