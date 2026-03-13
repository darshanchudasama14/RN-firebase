import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { setUser } from "../redux/slices/authSlice";
import { signIn } from "../services/authService";
import { colors } from "../theme/colors";

export default function SignInPasswordScreen({ route, navigation }: any) {
  const { email } = route.params;

  const [password, setPassword] = useState("");
   const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!password.trim()) {
      setError("Password is required");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    setError("");
    return true;
  };


  const handleLogin = async () => {
  if (!validate()) return;

  try {
    setLoading(true);

    const userCredential = await signIn(email.trim().toLowerCase(), password);

    setLoading(false);

    // You can show a success message from Firebase (optional)
    Alert.alert("Success", `Welcome ${userCredential.user.email}!`);
     // Get Firebase ID token
      const token = await userCredential.user.getIdToken() ?? "staticToken";

     // Save user info in Redux
      dispatch(
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email || "",
          profileCompleted: true, // mark as complete if you wan
      
        })
      );

  } catch (err: any) {
    setLoading(false);

    // Show Firebase's message directly
    Alert.alert("Login Failed", err.message || "Something went wrong");
  }
};

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Sign In</Text>

          <Text style={styles.email}>{email}</Text>

          <InputField
            placeholder="Password"
            secure
            value={password}
            onChangeText={setPassword}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <PrimaryButton
            title={loading ? "Signing In..." : "Continue"}
            onPress={handleLogin}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  flex: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
    color: colors.text,
  },

  email: {
    color: colors.gray,
    marginBottom: 30,
  },

  link: {
    marginTop: 15,
    color: colors.primary,
    fontWeight: "500",
  },

  error: {
    color: colors.danger,
    fontSize: 12,
    marginBottom: 10,
  },
});
