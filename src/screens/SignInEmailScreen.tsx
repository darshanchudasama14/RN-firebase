import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import SocialButton from "../components/SocialButton";

import { SafeAreaView } from "react-native-safe-area-context";
import { ImageList } from "../theme/ImgeList";
import { colors } from "../theme/colors";

export default function SignInEmailScreen({ navigation }: any) {

  const [email, setEmail] = useState("");

  const handleContinue = () => {

    if (!email.trim()) {
      alert("Please enter email");
      return;
    }

    navigation.navigate("SignInPassword", { email });

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

          <Text style={styles.title}>Sign in</Text>

          <InputField
            placeholder="Email Address"
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setEmail}
          />

          <PrimaryButton
            title="Continue"
            onPress={handleContinue}
          />

          <View style={styles.row}>
            <Text style={styles.text}>Don't have an Account ?</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("CreateAccountScreen")}
            >
              <Text style={styles.link}> Create One</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialContainer}>

            <SocialButton
              title="Continue With Apple"
              icon={ImageList.apple}
            />

            {/* Google Login Removed */}
              <SocialButton
              title="Continue With Google"
              icon={ImageList.google}
            />

            <SocialButton
              title="Continue With Facebook"
              icon={ImageList.facebook}
            />

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white
  },

  flex: {
    flex: 1
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: "center"
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30
  },

  row: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center"
  },

  text: {
    color: "#777"
  },

  link: {
    color: colors.primary,
    fontWeight: "600"
  },

  socialContainer: {
    marginTop: 30,
    gap: 12
  }
});
