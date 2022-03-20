// Librairies
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

function DrawerContentScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            paddingHorizontal: 25,
            paddingVertical: 10,
          }}
          onPress={() => props.navigation.toggleDrawer()}
        >
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 84,
    height: 84,
    marginBottom: 15,
  },
});

export default DrawerContentScreen;
