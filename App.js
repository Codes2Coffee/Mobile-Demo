import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Storepage from "./screens/Storepage";
import AddProduct from "./screens/AddProduct";
import MainScreen from "./screens/MainScreen";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

const Bottom = createBottomTabNavigator();
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Bottom.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveBackgroundColor: "rgba(0,0,0,0.1)",
            }}
          >
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
              component={MainScreen}
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
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
