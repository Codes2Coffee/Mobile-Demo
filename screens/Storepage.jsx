import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

function Storepage() {
  return (
    <View style={style.root}>
      <Header text={"Store"} />
      <View style={style.container}></View>
    </View>
  );
}

export default Storepage;

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
