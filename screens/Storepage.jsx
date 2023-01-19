import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { dummyData } from "../data/data";

function Storepage() {
  function renderItems(item) {
    return (
      <ProductCard
        name={item.item.name}
        url={item.item.url}
        price={item.item.price}
        description={item.item.description}
        images={item.item.images}
      />
    );
  }
  return (
    <View style={style.root}>
      <Header search={true} text={"Store"} />
      <View style={style.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={dummyData}
          renderItem={renderItems}
          numColumns={2}
        />
      </View>
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
    padding: 20,
    // flexDirection: "row",
  },
});
