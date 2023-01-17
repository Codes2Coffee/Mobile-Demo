import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import Cart from "./screens/Cart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            options={{ headerShown: false }}
            component={MainScreen}
          />
          <Stack.Screen
            name="Cart"
            options={{ headerBackVisible: true, headerBackTitleVisible: false }}
            component={Cart}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
