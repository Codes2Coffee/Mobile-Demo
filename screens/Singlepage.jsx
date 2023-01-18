import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";

function Singlepage({ route, navigation }) {
  return (
    <View>
      <Header text={route.params.name} />
      <Text>{route.params.name}</Text>
      <Text>{route.params.price}</Text>
      <Text>{route.params.description}</Text>
    </View>
  );
}

export default Singlepage;
