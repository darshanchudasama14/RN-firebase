import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import CustomButton from "./CustomButton";

type Props = {
  image: any;
  title: string;
  buttonTitle: string;
};

export default function EmptyState({ image, title, buttonTitle }: Props) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <CustomButton title={buttonTitle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: colors.text,
    fontWeight: 'bold'
  },
});