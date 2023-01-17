import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  buttomContainer: {
    flex: 6,
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  goals: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "purple",
    borderRadius: 10,
    padding: 5,
  },
});
