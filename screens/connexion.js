import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Image ,TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
const connexion = ({navigation}) => {
  return (
    <SafeAreaView style={styles.CONTAINER}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("./drawer/logo.png")} />
      </View>
      <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
      <Ionicons name="close-circle-outline" size={24} color="white" />
      </TouchableOpacity>
      <Text>connexion</Text>
    </SafeAreaView>
  );
};

export default connexion;

const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
  },
  close:{
      position: "absolute",
      top: 5,
      right: 5
  },
  header: {
    height: 40,
    backgroundColor: "#113140",
  },
  logo: {
    height: 35,
    resizeMode: "contain",
  },
});
