import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../theme/colors";
import { ImageList } from "../theme/ImgeList";

export default function Header() {

  const [selected, setSelected] = useState("Men");
  const [open, setOpen] = useState(false);

  const options = ["Men", "Women", "Children"];

  const selectOption = (item: string) => {
    setSelected(item);
    setOpen(false);
  };

  return (
    <View style={styles.container}>

      {/* Profile */}
      <Image source={ImageList.profile} style={styles.profile} />

      {/* Dropdown */}
      <View style={styles.dropdownWrapper}>

        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setOpen(!open)}
        >
          <Text style={styles.dropdownText}>{selected}</Text>
          <Ionicons name="chevron-down" size={18} color="#000" />
        </TouchableOpacity>

        {open && (
          <View style={styles.menu}>
            {options.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.menuItem}
                onPress={() => selectOption(item)}
              >
                <Text style={styles.menuText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

      </View>

      {/* Bag Icon */}
      <TouchableOpacity style={styles.bagButton}>
        <Ionicons name="bag-outline" size={22} color="white" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
  zIndex: 100,
  elevation: 100, // Android
},

  profile: {
    width: 45,
    height: 45,
    borderRadius: 22,
  },

  dropdownWrapper: {
    alignItems: "center",
  },

  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },

  dropdownText: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 6,
  },

  menu: {
    position: "absolute",
    top: 45,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 5,
    paddingVertical: 5,
    width: 120,
  },

  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  menuText: {
    fontSize: 15,
  },

  bagButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});