import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AboutYourselfScreen from "../screens/AboutYourselfScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ResetEmailSentScreen from "../screens/ResetEmailSentScreen";
import SignInEmailScreen from "../screens/SignInEmailScreen";
import SignInPasswordScreen from "../screens/SignInPasswordScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignInEmail" component={SignInEmailScreen} />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
         <Stack.Screen
        name="AboutYourself"
        component={AboutYourselfScreen} />
      <Stack.Screen name="SignInPassword" component={SignInPasswordScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetEmailSent" component={ResetEmailSentScreen} />

    </Stack.Navigator>
  );
}