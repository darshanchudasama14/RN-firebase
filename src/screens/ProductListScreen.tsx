import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../components/BackButton";
import { colors } from "../theme/colors";

const products = [
  {
    id: "1",
    name: "Men's Fleece Hoodie",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: "2",
    name: "Pullover Skate Hoodie",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  },
  {
    id: "3",
    name: "Fleece Skate Hoodie",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    id: "4",
    name: "Men's Ice Dye Hoodie",
    price: 128,
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  },
];

export default function ProductListScreen({ route, navigation }: any) {
  const { category } = route.params;

  // if object passed -> use name
  const categoryTitle =
    typeof category === "object" ? category.name : category;

  return (
    <SafeAreaView style={styles.container}>

      <BackButton onPress={() => navigation.goBack()} />
      <Text style={styles.title}>{categoryTitle}({products.length})</Text>

      <FlatList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={styles.card}>

            {/* Wishlist Icon */}
            <TouchableOpacity style={styles.heart}>
              <Ionicons name="heart-outline" size={18} />
            </TouchableOpacity>

            <Image source={{ uri: item.image }} style={styles.image} />

            <Text numberOfLines={2} style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },

  card: {
    width: "48%",
    marginBottom: 20,
    backgroundColor: colors.gray1, borderRadius: 12,
  },

  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },

  heart: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 1,
    backgroundColor: "white", // i will add this extra becuase this heart now showing proper
    padding: 4,
    borderRadius: 20,
  },

  name: {
    marginTop: 8,
    fontSize: 13,
    marginHorizontal: 5
  },

  price: {
    marginTop: 3,
    fontWeight: "bold",
    marginHorizontal: 5
  },

});