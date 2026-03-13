import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BackButton from "../components/BackButton";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

import { signUp } from "../services/authService";
import { colors } from "../theme/colors";

import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const EMAIL_REGEX = /\S+@\S+\.\S+/;

export default function CreateAccountScreen({ navigation }: any) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // Validate form fields
  const validate = () => {
    const newErrors: Errors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!EMAIL_REGEX.test(email)) newErrors.email = "Enter a valid email";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle signup
  const handleContinue = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const userCredential = await signUp(email.trim().toLowerCase(), password);

      setLoading(false);

      // Optionally save basic info to Redux
      dispatch(
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          profileCompleted: false, // Will complete in AboutYourself
        })
      );

      // Navigate to AboutYourself screen
      navigation.navigate("AboutYourself");
    } catch (error: any) {
      setLoading(false);

      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Error", "This email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Error", "Please enter a valid email.");
      } else if (error.code === "auth/weak-password") {
        Alert.alert("Error", "Password must be at least 6 characters.");
      } else {
        Alert.alert("Error", "Something went wrong. Please try again.");
      }
    }
  };

  return (
    <View style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <BackButton onPress={() => navigation.goBack()} />

          <Text style={styles.title}>Create Account</Text>

          <View style={styles.inputContainer}>
            <InputField
              placeholder="Firstname"
              value={firstName}
              onChangeText={setFirstName}
            />
            {errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}

            <InputField
              placeholder="Lastname"
              value={lastName}
              onChangeText={setLastName}
            />
            {errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}

            <InputField
              placeholder="Email Address"
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setEmail}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <InputField
              placeholder="Password"
              secure
              value={password}
              onChangeText={setPassword}
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
          </View>

          <PrimaryButton
            title={loading ? "Creating Account..." : "Continue"}
            onPress={handleContinue}
          />

          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotText}>
              Forgot Password? <Text style={styles.reset}>Reset</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  flex: { flex: 1 },
  container: { flexGrow: 1, paddingHorizontal: 24, paddingTop: 40 },
  title: { fontSize: 28, fontWeight: "700", color: colors.text, marginBottom: 30 },
  inputContainer: { marginBottom: 10 },
  forgotContainer: { marginTop: 20 },
  forgotText: { color: colors.gray, fontSize: 14 },
  reset: { color: colors.text, fontWeight: "500" },
  error: { color: "#FF3B30", fontSize: 12, marginBottom: 8, marginLeft: 4 },
});