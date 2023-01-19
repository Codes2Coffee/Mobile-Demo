import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

function ButtonPrimary(props) {
  console.log(props);
  return (
    <View style={[style.root, { width: props.width, height: props.height }]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [style.button, style.pressed]
            : props.disabled
            ? [style.button, style.buttonDisabled]
            : style.button
        }
        disabled={props.disabled}
        onPress={props.onSubmit}
      >
        <Text style={style.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
}

export default ButtonPrimary;

const style = StyleSheet.create({
  root: {
    width: 150,
    height: 50,
    overflow: "hidden",
  },
  button: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
  pressed: {
    opacity: 0.7,
  },
});
