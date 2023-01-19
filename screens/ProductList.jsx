import React from "react";
import { Pressable, View } from "react-native";
import Header from "../components/Header";
import { StyleSheet } from "react-native";
import { dummyData } from "../data/data";
import { FlatList } from "react-native-gesture-handler";
import CardList from "../components/CardList";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

function ProductList() {
  function handleRender(item) {
    return <CardList props={item.item} />;
  }
  const navigate = useNavigation();
  return (
    <View style={style.root}>
      <Header search={true} text={"Products"} />
      <View style={style.container}>
        <View style={style.addContainer}>
          <Pressable
            style={({ pressed }) =>
              pressed ? [style.add, style.addPressed] : style.add
            }
            onPress={() => navigate.navigate("Add")}
          >
            <Icon name="plus" size={30} />
          </Pressable>
        </View>

        <FlatList
          keyExtractor={(item) => item.id}
          data={dummyData}
          renderItem={handleRender}
        />
      </View>
    </View>
  );
}

export default ProductList;

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  add: {
    padding: 15,
    marginRight: 15,
    borderRadius: 20,
  },
  addPressed: {
    opacity: 0.5,
  },
  addContainer: {
    alignItems: "flex-end",
    width: "100%",
  },
});
