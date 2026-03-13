import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import BackButton from "../components/BackButton";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

import { resetPassword } from "../services/authService";
import { colors } from "../theme/colors";

const EMAIL_REGEX = /\S+@\S+\.\S+/;

export default function ForgotPasswordScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }

    if (!EMAIL_REGEX.test(email)) {
      setError("Enter valid email");
      return false;
    }

    setError(null);
    return true;
  };

  const handleReset = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      await resetPassword(email);

      setLoading(false);

      navigation.navigate("ResetEmailSent");
    } catch (err: any) {
      setLoading(false);
      setError(err.message);
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

          <Text style={styles.title}>Forgot Password</Text>

          <Text style={styles.subtitle}>
            Enter your email address and we will send you instructions to reset
            your password.
          </Text>

          <InputField
            placeholder="Enter Email address"
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setEmail}
          />

          {error && <Text style={styles.error}>{error}</Text>}

          <PrimaryButton
            title={loading ? "Sending..." : "Continue"}
            onPress={handleReset}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
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
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    color: colors.gray,
    marginTop: 10,
    marginBottom: 30,
    lineHeight: 20,
  },

  error: {
    color: "#FF3B30",
    fontSize: 12,
    marginTop: 6,
    marginBottom: 10,
  },
});
