import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

function Header({ text, search }) {
  const navigate = useNavigation();
  return (
    <View style={style.root}>
      <View style={style.titleContainer}>
        <Text style={style.title}>{text}</Text>
        <View style={style.buttonContainer}>
          <Pressable
            style={({ pressed }) =>
              pressed ? [style.buttonPressed, style.button] : style.button
            }
            onPress={() => {
              navigate.navigate("Cart");
            }}
          >
            <Ionicons name="cart" size={30} />
          </Pressable>
          <Pressable
            style={({ pressed }) =>
              pressed ? [style.buttonPressed, style.button] : style.button
            }
          >
            <Ionicons name="person" size={30} />
          </Pressable>
        </View>
      </View>
      {search && (
        <TextInput
          style={style.searchBar}
          placeholder="Search Store or Product"
        />
      )}
    </View>
  );
}

export default Header;

const style = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
  },
  searchBar: {
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
  },
  button: {
    height: 45,
    width: 45,
    marginHorizontal: 5,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
