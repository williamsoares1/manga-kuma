import { TextInput, TouchableOpacity, View } from "react-native";
import { SearchButton } from "../SearchButton/SearchButton";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import { useState } from "react";
import { Filters } from "../../pages/home/home";

export const Nav = ({ forSearch, forFilter }) => {
  const [search, setSearch] = useState<string>();

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput value={search} onChangeText={a => setSearch(a)} style={styles.input} />
        <TouchableOpacity onPress={() => forSearch(search)} activeOpacity={0.8} style={styles.searchIconBox}>
          <AntDesign name="search1" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <SearchButton content="home" onPress={() => forFilter(Filters.ALL)} />
        <SearchButton content="comedia" onPress={() => forFilter(Filters.CATEGORY)} />
        <SearchButton content="completos" onPress={() => forFilter(Filters.STATE)} />
        <SearchButton content={<AntDesign name="heart" size={14} color="#fff" />} />
      </View>
    </View>
  );
};