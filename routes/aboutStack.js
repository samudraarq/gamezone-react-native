import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/About";
import Header from "../shared/header";

const Stack = createStackNavigator();

function aboutStack() {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="About GameZone" />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default aboutStack;
