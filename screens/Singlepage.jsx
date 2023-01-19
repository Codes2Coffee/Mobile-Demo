import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import Header from "../components/Header";

function Singlepage({ route, navigation }) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const images = route.params.images;

  const [active, setActive] = useState(1);

  const handleScroll = ({ nativeEvent }) => {
    const slide =
      Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      ) + 1;
    if (slide !== active) {
      if (images.length >= slide) {
        setActive(slide);
      }
    }
  };
  return (
    <ScrollView style={style.root}>
      <Header text={route.params.name} />
      <View style={{ width, backgroundColor: "#fff" }}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width }}
          onScroll={handleScroll}
        >
          {images.map((img, index) => (
            <View style={{ width, height: 300 }} key={index}>
              <Image
                source={{ uri: img }}
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              />
            </View>
          ))}
        </ScrollView>
        <View style={style.indicatorContainer}>
          <View style={style.indicator}>
            <Text style={style.indexText}>
              {active}/{images.length}
            </Text>
          </View>
        </View>
      </View>
      <View style={style.bottomContainer}>
        <Text style={style.name}>{route.params.name}</Text>
        <Text style={style.price}>Php{route.params.price}</Text>
        <Text style={style.description}>{route.params.description}</Text>
      </View>
    </ScrollView>
  );
}

export default Singlepage;

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  indicator: {
    backgroundColor: "#000",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  indexText: {
    color: "#fff",
  },
  bottomContainer: {
    padding: 15,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "rgba(0,0,0,0.7)",
    marginTop: 10,
  },
  price: {
    color: "orange",
    fontSize: 25,
    marginTop: 10,
  },
  description: {
    marginTop: 10,
  },
});
