import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={24}
        color="black"
        style={styles.icon}
        onPress={openMenu}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    elevation: 3,
  },
  headerText: {
    color: "#444",
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    left: 16,
    paddingTop: 10,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  headerImage: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
});
