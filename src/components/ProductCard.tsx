import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
}

export default function ProductCard({ name, price, oldPrice, image }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      
      {/* Heart */}
      <TouchableOpacity style={styles.heart}>
        <Ionicons name="heart-outline" size={18} color="#333" />
      </TouchableOpacity>

      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>

          {oldPrice && (
            <Text style={styles.oldPrice}>${oldPrice.toFixed(2)}</Text>
          )}
        </View>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: "#F5F5F5",
    borderRadius: 18,
    marginRight: 16,
    padding: 10,
  },

  heart: {
    position: "absolute",
    right: 12,
    top: 12,
    zIndex: 10,
  },

  imageContainer: {
    width: "100%",
    height: 110,
    // borderRadius: 14,
    overflow: "hidden",
    marginBottom: 10,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  info: {
    paddingHorizontal: 2,
  },

  name: {
    fontSize: 12,
    color: "#333",
    marginBottom: 4,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },

  oldPrice: {
    fontSize: 13,
    color: "#888",
    textDecorationLine: "line-through",
  },
});