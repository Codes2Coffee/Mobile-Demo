import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Storepage from "./Storepage";
import AddProduct from "./AddProduct";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

const Bottom = createBottomTabNavigator();

function MainScreen() {
  return (
    <>
      <Bottom.Navigator screenOptions={{ headerTitle: "" }}>
        <Bottom.Screen
          name="Store"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-bag" size={20} />
            ),
            tabBarLabelStyle: {
              color: "black",
            },
          }}
          component={Storepage}
        />
        <Bottom.Screen
          name="Add"
          component={AddProduct}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="plus" size={20} />,
            tabBarLabelStyle: {
              color: "black",
            },
          }}
        />
      </Bottom.Navigator>
    </>
  );
}

export default MainScreen;
