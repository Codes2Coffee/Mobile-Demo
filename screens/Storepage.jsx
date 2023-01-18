import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

function Storepage() {
  const dummyData = [
    {
      id: Math.random().toString() + Date.now().toString(),
      url: "../assets/logoProd.png",
      name: "product1",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: Math.random().toString() + Date.now().toString(),
      url: "../assets/logoProd.png",
      name: "product2",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: Math.random().toString() + Date.now().toString(),
      url: "../assets/logoProd.png",
      name: "product3",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: Math.random().toString() + Date.now().toString(),
      url: "../assets/logoProd.png",
      name: "product4",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: Math.random().toString() + Date.now().toString(),
      url: "../assets/logoProd.png",
      name: "product5",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: Math.random().toString() + Date.now().toString(),
      url: "../assets/logoProd.png",
      name: "product6",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  function renderItems(item) {
    return (
      <ProductCard
        name={item.item.name}
        url={item.item.url}
        price={item.item.price}
        description={item.item.description}
      />
    );
  }
  return (
    <View style={style.root}>
      <Header text={"Store"} />
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
