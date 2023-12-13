import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { EvilIcons, Entypo } from "@expo/vector-icons";
import { colors } from "../global/colors";

const Search = ({ onSearchHandlerEvent }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearchHandlerEvent(searchInput);
  };

  const handleReset = () => {
    setSearchInput("");
    onSearchHandlerEvent("");
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={setSearchInput}
        placeholder="Buscar..."
        value={searchInput}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <EvilIcons name="search" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Entypo name="cross" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  textInput: {
      width: "80%",
      height: "200",
    fontSize: 18,
    borderWidth: 3,
    borderColor: colors.orange,
    borderRadius: 5,
    padding: 15,
    paddingLeft: 15,
    elevation: 1,
  },
    button: {

    height: "25%",
    justifyContent: "center", 
    paddingHorizontal: 5, 
  },
});
