import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductList from "./screens/ProductList";
import MainScreen from "./screens/MainScreen";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Bottom = createBottomTabNavigator();
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Provider store={store}>
          <NavigationContainer>
            <Bottom.Navigator
              screenOptions={{
                headerShown: false,
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
                name="List"
                component={ProductList}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="list" size={20} />
                  ),
                  tabBarLabelStyle: {
                    color: "black",
                  },
                }}
              />
            </Bottom.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </>
  );
}
