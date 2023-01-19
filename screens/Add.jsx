import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";
import Header from "../components/Header";
import UrlCard from "../components/UrlCard";

function Add() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [nameErr, setNameErr] = useState(false);
  const [priceErr, setPriceErr] = useState(false);
  const [desErr, setDesErr] = useState(false);
  const [ImgErr, setImgErr] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!name || !price || !description || urls.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name, price, description, urls]);

  const handleUrlChange = () => {
    if (!url) {
      return;
    }
    const newData = {
      id: Math.random().toString() + Date.now().toString(),
      url,
    };

    setUrls((prev) => [...prev, newData]);
    setUrl("");
  };

  const handleSubmit = () => {};

  return (
    <View style={style.root}>
      <Header text={"Add"} search={false} />
      <View style={style.container}>
        <View style={style.fields}>
          <Text>Product Name*</Text>
          <TextInput
            value={name}
            onChangeText={(val) => setName(val)}
            style={nameErr ? [style.input, style.inputErr] : style.input}
          />
        </View>
        <View style={style.fields}>
          <Text>Price*</Text>
          <TextInput
            value={price}
            onChangeText={(val) => setPrice(val)}
            style={priceErr ? [style.input, style.inputErr] : style.input}
          />
        </View>
        <View style={style.fields}>
          <Text>Description*</Text>
          <TextInput
            value={description}
            onChangeText={(val) => setDescription(val)}
            multiline
            numberOfLines={3}
            style={desErr ? [style.input, style.inputErr] : style.input}
          />
        </View>
        <View style={style.imageField}>
          <View style={style.imageSubField}>
            <Text>Image URL*</Text>
            <TextInput
              value={url}
              onChangeText={(val) => setUrl(val)}
              style={ImgErr ? [style.input, style.inputErr] : style.input}
            />
          </View>
          <View>
            <ButtonPrimary
              onSubmit={handleUrlChange}
              title={"Add"}
              height={30}
              width={60}
            />
          </View>
        </View>
        <View style={style.urls}>
          {urls &&
            urls.map((val, index) => (
              <UrlCard
                key={index}
                id={val.id}
                setUrls={setUrls}
                urls={urls}
                text={val.url}
              />
            ))}
        </View>
        <View style={style.buttonContainer}>
          <ButtonPrimary
            title="Save"
            height={50}
            width={150}
            disabled={disabled}
            onSubmit={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
}

export default Add;

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  fields: {
    width: "100%",
    marginBottom: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    height: 40,
  },
  inputErr: {
    borderBottomColor: "red",
  },
  imageField: {
    width: "100%",
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageSubField: {
    width: "80%",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  urls: {
    width: "100%",
    marginVertical: 10,
  },
});
