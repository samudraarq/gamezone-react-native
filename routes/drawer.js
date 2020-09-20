import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import homeStack from "./homeStack";
import aboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

const navigator = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={homeStack} />
      <Drawer.Screen name="About" component={aboutStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default navigator;
