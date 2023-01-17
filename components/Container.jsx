import React from "react";
import { View, StyleSheet } from "react-native";

function Container() {
  return <View style={style.root}></View>;
}

export default Container;

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});
