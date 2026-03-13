import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../theme/colors";

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>Gilbert Jones</Text>
        <Text style={styles.email}>Gilbertjones001@gmail.com</Text>
        <Text style={styles.phone}>121-224-7890</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.edit}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightGray,
    padding: 16,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  email: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 4,
  },
  phone: {
    fontSize: 13,
    color: colors.gray,
  },
  edit: {
    color: colors.primary,
    fontWeight: "500",
  },
});