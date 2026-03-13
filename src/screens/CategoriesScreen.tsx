import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../components/BackButton";
import { ImageList } from "../theme/ImgeList";
import { colors } from "../theme/colors";

const categories = [
  { id: "1", name: "Hoodies", icon: ImageList.hoody },
  { id: "2", name: "Accessories", icon: ImageList.accesory },
  { id: "3", name: "Shorts", icon: ImageList.shorts },
  { id: "4", name: "Shoes", icon: ImageList.shoes },
  { id: "5", name: "Bags", icon: ImageList.accesory },
];

export default function CategoriesScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Back Button */}
      <BackButton onPress={() => navigation.goBack()} />

      <Text style={styles.title}>Shop by Categories</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("Products", { category: item.name })
            }
          >
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:colors.background
  },

 

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    color:'black'
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray1,
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "500",
  },
});
