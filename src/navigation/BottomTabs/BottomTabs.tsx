import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import NotificationsScreen from "@/src/screens/Notifiction";
import OrderScreen from "@/src/screens/OrderScreen";
import ProfileScreen from "@/src/screens/ProfileScreen";
import { colors } from "@/src/theme/colors";
import HomeScreen from "../../screens/Home";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          elevation: 10,
        },
        tabBarIcon: ({ focused }) => {
          let iconName: any;

          if (route.name === "Home") iconName = "home-outline";
          if (route.name === "Notifications") iconName = "notifications-outline";
          if (route.name === "Orders") iconName = "receipt-outline";
          if (route.name === "Profile") iconName = "person-outline";

          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? colors.primary : colors.gray}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}