import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function UrlCard({ text, setUrls, urls, id }) {
  return (
    <View style={style.root}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [style.button, style.pressed] : style.button
        }
        onPress={() => {
          const filtered = urls.filter((val) => val.id !== id);
          setUrls(filtered);
        }}
      >
        <Text style={style.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default UrlCard;

const style = StyleSheet.create({
  root: {
    marginVertical: 2,
    borderRadius: 10,
    overflow: "hidden",
  },
  text: {
    color: "#fff",
  },
  button: {
    padding: 5,
    backgroundColor: "orange",
  },
  pressed: {
    opacity: 0.5,
  },
});
