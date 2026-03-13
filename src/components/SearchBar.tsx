import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../theme/colors";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
    justifyContent: "center",
  },
  input: {
    fontSize: 16,
  },
});