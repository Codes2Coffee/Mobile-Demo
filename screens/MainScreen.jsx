import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import Singlepage from "./Singlepage";
import Storepage from "./Storepage";
import Cart from "./Cart";

const Stack = createNativeStackNavigator();

export default function MainScreen() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={Storepage}
        />
        <Stack.Screen
          name="Cart"
          options={{ headerBackVisible: true, headerBackTitleVisible: false }}
          component={Cart}
        />
        <Stack.Screen
          name="Singlepage"
          options={{ headerShown: false }}
          component={Singlepage}
        />
      </Stack.Navigator>
    </>
  );
}
