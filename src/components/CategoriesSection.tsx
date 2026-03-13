import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageList } from "../theme/ImgeList";
import CategoryItem from "./CategoryItem";

const categories = [
  { id: "1", name: "Hoodies", icon: ImageList.hoody },
  { id: "2", name: "Shorts", icon: ImageList.shorts },
  { id: "3", name: "Shoes", icon: ImageList.shoes },
  { id: "4", name: "Bag", icon: ImageList.accesory },
];

export default function CategoriesSection({ navigation }: any) {
  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Categories</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            name={item.name}
            icon={item.icon}
            onPress={() =>
             navigation.navigate("Products", { category: item })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop:10,
    marginHorizontal:10
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  seeAll: {
    fontSize: 16,
    color: "#555",
  },
});