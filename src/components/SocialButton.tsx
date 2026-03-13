import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  title: string;
  icon: any;
  onPress?: () => void;
}

export default function SocialButton({ title, icon, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
     backgroundColor: "rgb(244, 244, 244)",
    paddingVertical: 14,
    borderRadius: 14,
    marginBottom: 12,
    paddingHorizontal: 16,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
    resizeMode: "contain",
  },

  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
});
