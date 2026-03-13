import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import CategoriesSection from "../components/CategoriesSection";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { colors } from "../theme/colors";

type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  Products: { category: any };
};

const products = [
  {
    id: "1",
    name: "Men's Harrington Jacket",
    price: 148,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: "2",
    name: "Max Cirro Men's Slides",
    price: 55,
    oldPrice: 100.97,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
];

export default function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <SearchBar />

      <CategoriesSection navigation={navigation} />

      {/* Top Selling */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Selling</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>


      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingLeft: 4 }}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
            oldPrice={item.oldPrice}
          />
        )}
      />

      {/* New In */}
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors.primary }]}>
          New In
        </Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => "new" + item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
          />
        )}
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  seeAll: {
    fontSize: 14,
    color: "#666",
  },
});