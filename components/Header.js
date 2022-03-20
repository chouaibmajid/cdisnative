import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="ios-menu" size={30} color="white" />
        </TouchableOpacity>
        <View>
          <Image style={styles.logo} source={require("./logo.png")} />
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity onPress={() => navigation.navigate("connexion")}>

          <Feather name="user" size={30} color="white" />
          </TouchableOpacity>
          <AntDesign name="shoppingcart" size={30} color="white" />
        </View>
      </View>
      <View style={styles.headerBottom}>
        <Ionicons
          style={styles.searchIcons}
          name="ios-search"
          size={28}
          color="gray"
        />
        <TextInput style={styles.inputSearch} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: "#113140",
  },
  headerTop: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 150,
    height: 40,
  },
  rightHeader: {
    flexDirection: "row",
  },
  inputSearch: {
    width: "100%",
    paddingVertical: 13,
    outline: "none",
    border : "none",
    fontSize: 15,
    
  },
  headerBottom: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  searchIcons: {
    backgroundColor: "white",
  },

});
