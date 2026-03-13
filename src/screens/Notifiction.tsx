import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../components/EmptyState";
import { colors } from "../theme/colors";
import { ImageList } from "../theme/ImgeList";

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.header}>Notifications</Text>

      <EmptyState
        image={ImageList.bell}
        title="No Notification yet"
        buttonTitle="Explore Categories"
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
  },
});