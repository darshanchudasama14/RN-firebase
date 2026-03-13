import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../components/PrimaryButton";
import { setUser } from "../redux/slices/authSlice";
import { RootState } from "../redux/store";

export default function AboutYourselfScreen({ navigation }: any) {
  const [gender, setGenderState] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleFinish = () => {
    if (!gender) {
      Alert.alert("Please select gender");
      return;
    }
    const token= "staticToken"

    // Update user in Redux and mark profileCompleted = true
    dispatch(
      setUser({
        ...user,
        gender,
        profileCompleted: true,
        token
      })
    );

    Alert.alert("Profile setup completed 🎉");

    // Navigate to AppNavigator Home
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "Home" }],
    // });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell us about yourself</Text>
      <Text style={styles.label}>Who do you shop for?</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.option, gender === "men" && styles.selected]}
          onPress={() => setGenderState("men")}
        >
          <Text>Men</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, gender === "women" && styles.selected]}
          onPress={() => setGenderState("women")}
        >
          <Text>Women</Text>
        </TouchableOpacity>
      </View>

      <PrimaryButton title="Finish" onPress={handleFinish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 20 },
  label: { marginBottom: 10 },
  row: { flexDirection: "row", gap: 10, marginBottom: 20 },
  option: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    borderColor: "#ddd",
  },
  selected: {
    backgroundColor: "#EDE9FF",
  },
});