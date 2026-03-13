import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function ResetEmailSentScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        We sent you an Email to reset your password.
      </Text>

      <PrimaryButton
        title="Return to Login"
        onPress={() => navigation.navigate("SignInEmail")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  text: { textAlign: "center", fontSize: 16, marginBottom: 20 },
});