import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  name: string;
  icon:  ImageSourcePropType;
  onPress: () => void;
}

export default function CategoryItem({ name, icon,onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <Image source={{ uri: icon }} style={styles.icon} /> */} 
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 14,
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 30,
  },
  text: {
    marginTop: 6,
    fontSize: 12,
  },
});