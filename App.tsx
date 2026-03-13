
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useDispatch, useSelector } from "react-redux";

import AppNavigator from "./src/navigation/AppNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";

import { logout, setUser } from "./src/redux/slices/authSlice";
import { RootState, store } from "./src/redux/store";

import { subscribeAuth } from "./src/services/authService";

function Root() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeAuth((firebaseUser) => {

      if (firebaseUser) {
        dispatch(
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || "",
            profileCompleted: true, // user already signed in
          })
        );
      } else {
        dispatch(logout()); // important
      }

      setLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  // Wait until Firebase checks auth
  if (loading) return null;

  // User logged in
  if (user) {
    return user.profileCompleted ? <AppNavigator /> : <AuthNavigator />;
  }

  // User not logged in
  return <AuthNavigator />;
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}