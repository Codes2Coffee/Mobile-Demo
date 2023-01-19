import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ProductCard({ url, name, price, description, images }) {
  const navigate = useNavigation();
  return (
    <View style={style.root}>
      <Pressable
        style={style.button}
        onPress={() => {
          navigate.navigate("Singlepage", {
            url,
            name,
            price,
            description,
            images,
          });
        }}
      >
        <Image style={style.image} source={{ uri: images[0] }} />
        <View style={style.info}>
          <Text style={style.name}>{name}</Text>
          <Text style={style.price}>Php{price}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ProductCard;

const style = StyleSheet.create({
  root: {
    flex: 1,
    height: 200,
    margin: 10,
    padding: 10,
  },
  button: { flex: 1 },
  image: {
    flex: 4,
    width: "100%",
  },
  info: {
    flex: 2,
  },
  name: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 18,
  },
  price: {
    color: "orange",
    fontWeight: "bold",
  },
});
