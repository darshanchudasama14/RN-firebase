
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import BottomTabs from "../navigation/BottomTabs/BottomTabs";
import ProductListScreen from "../screens/ProductListScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      {/* Bottom Tabs */}
      <Stack.Screen name="MainTabs" component={BottomTabs} />

      {/* Other Screens */}
      <Stack.Screen name="Products" component={ProductListScreen} />

    </Stack.Navigator>
  );
}
