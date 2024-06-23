import { FlatList, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { SearchButton } from "../SearchButton/SearchButton";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import { useState } from "react";
import { Filters } from "../../pages/home/home";

interface NavProps{
  func: Function,
  categories: []
}

export const Nav = ({ func, categories }: NavProps) => {
  const [search, setSearch] = useState<string>();

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput value={search} onChangeText={a => setSearch(a)} style={styles.input}/>
        <TouchableOpacity onPress={() => func(Filters.SEARCH, search)} activeOpacity={0.8} style={styles.searchIconBox}>
          <AntDesign name="search1" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <SearchButton content="home" onPress={() => func(Filters.ALL)} />
        <SearchButton content="completos" onPress={() => func(Filters.STATE)} />
        <SearchButton content="aleatorio" onPress={() => func(Filters.CATEGORY, "Comedy")} />
        <FlatList
          scrollEnabled={false}
          data={categories}
          renderItem={({ item }) => <SearchButton content={String(item.id)} onPress={() => func(Filters.CATEGORY,item.id)}/>}
          horizontal
          />
      </ScrollView>
    </View>
  );
};