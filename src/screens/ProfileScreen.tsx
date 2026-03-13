import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import MenuItem from "../components/MenuItem";
import ProfileCard from "../components/ProfileCard";
import { logout } from "../redux/slices/authSlice";
import { logoutFirebase } from "../services/authService";
import { colors } from "../theme/colors";
import { ImageList } from "../theme/ImgeList";


export default function ProfileScreen() {

    const dispatch = useDispatch();
const onLogout = async () => {
  try {
    await logoutFirebase();   // Firebase logout
    dispatch(logout());       // Redux logout
    console.log("logout success");
  } catch (error) {
    console.log("Logout error", error);
  }
};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Profile Image */}
        <View style={styles.avatarContainer}>
          <Image
            source={ImageList.profile}
            style={styles.avatar}
          />
        </View>

        {/* User Info */}
        <ProfileCard />

        {/* Menu */}
        <View style={styles.menu}>
          <MenuItem title="Address" />
          <MenuItem title="Wishlist" />
          <MenuItem title="Payment" />
          <MenuItem title="Help" />
          <MenuItem title="Support" />
        </View>

        {/* Sign Out */}
        <Text style={styles.signOut} onPress={()=>{
            onLogout()
        }}>Sign Out</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },

  avatarContainer: {
    alignItems: "center",
    marginTop: 30,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  menu: {
    marginTop: 20,
  },

  signOut: {
    textAlign: "center",
    marginTop: 25,
    color: colors.danger,
    fontWeight: "600",
  },
});