import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, onHomePress }) => {
  return (
    <View style={styles.headerContainer}>      
      {title === "Productos" && (
        <TouchableOpacity onPress={onHomePress} style={styles.homeButton}>
          <Ionicons name="home" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.orange,
        flexDirection: "row",
    marginBottom:20,
  },
  headerTitle: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    flex: 1,
    textAlign: "center",
  },
  homeButton: {
    position: "absolute",
    left: 20,
    top: "50%",
      transform: [{ translateY: -12 }],
  },
});
