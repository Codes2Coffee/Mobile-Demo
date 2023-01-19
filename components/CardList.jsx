import React from "react";
import { Image, Pressable, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function CardList({ props }) {
  return (
    <View style={style.root}>
      <View style={style.leftContainer}>
        <Image style={style.image} source={{ uri: props.images[0] }} />
        <View style={style.info}>
          <Text>{props.name}</Text>
          <Text>{props.price}</Text>
        </View>
      </View>
      <View style={style.buttonContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [style.button, style.buttonPressed] : style.button
          }
        >
          <Icon name="edit" size={25} color={"black"} />
        </Pressable>
      </View>
    </View>
  );
}

export default CardList;

const style = StyleSheet.create({
  root: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
  },
  leftContainer: {
    height: "100%",
    width: "70%",
    flexDirection: "row",
  },
  info: {
    height: "100%",
    marginLeft: 10,
  },
  buttonContainer: {
    height: "100%",
    width: "30%",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 40,
    padding: 10,
  },
  buttonPressed: {
    backgroundColor: "rgba(0,0,0,0.1)",
    opacity: 0.5,
  },
  image: {
    height: "100%",
    width: "50%",
    resizeMode: "cover",
  },
});
