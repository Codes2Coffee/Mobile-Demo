import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import { StyleSheet } from "react-native";

function AddProduct() {
  return (
    <View style={style.root}>
      <Header text={"Add Product"} />
      <View style={style.container}></View>
    </View>
  );
}

export default AddProduct;

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
