import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { Home, Profile } from "../screens/index";
function Routes() {
  return (
    <NavigationContainer initialRouteName="Home">
      {/* If initialRouteName="Home" then no matter how you put stack by default home will at top */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        {/* Stack object hai name= "name of screen" compomnent mai component name */}
        <Stack.Screen name="Profile Screen" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
