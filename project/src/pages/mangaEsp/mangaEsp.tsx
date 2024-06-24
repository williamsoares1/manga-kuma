import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { api } from "../../services/mangahook-api/api";
import { styles } from "./styles";
import { CallnText } from "../../components/CallnText/CallnText";
import { ChapterButton } from "../../components/ChapterButton/ChapterButton";
import { Fontisto } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface MangaItem {
  imageUrl: string;
  name: string;
  author: string;
  status: string;
  updated: string;
  view: string;
  genres: string[];
  chapterList: chapter[];
}

export interface chapter {
  id: string;
  path: string;
  name: string;
  view: string;
  createdAt: string;
}

export const MangaEsp = ({ route, navigation }) => {
  const { mangaId } = route.params;
  const [manga, setManga] = useState<MangaItem>();
  const [mangaFavList, setMangaFavList] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(mangaFavList)

  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem('favoritos-manga-list', JSON.stringify(data));
      alert("Manga adicionado a lista Salvos!");
    } catch (error) {
      console.error("Erro ao salvar manga:", error);
    }
  };

  function addMangaFav(id, nome, autor, imgUrl) {
    const novoManga = { id, nome, autor, imgUrl };
    AsyncStorage.getItem('favoritos-manga-list')
      .then(storedData => {
        const currentFavList = storedData ? JSON.parse(storedData) : [];
        const newFavList = [...currentFavList, novoManga];
        setMangaFavList(newFavList);
        storeData(newFavList);
      })
      .catch(error => console.error('Erro ao recuperar dados:', error));
  }

  const fetchMangaDetails = async () => {
    try {
      const response = await api.get(`/api/manga/${mangaId}`);
      setManga(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMangaDetails();
  }, []);

  console.log(mangaFavList)
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ScrollView style={{ paddingVertical: 30, backgroundColor: "#222" }}>
      <View style={styles.mangaEspecify}>
        <Image
          source={{ uri: manga?.imageUrl }}
          style={{ flex: 1, width: 200, height: 300, resizeMode: "contain" }}
        />
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <Text style={styles.title}>{manga?.name}</Text>
          <CallnText call="Generos:" text={manga?.genres.join(", ")} />
          <CallnText call="Autor:" text={manga?.author} />
          <CallnText call="Status:" text={manga?.status} />
          <CallnText call="Views:" text={manga?.view} />
        </View>
      </View>

      <View style={styles.favContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.mangaFav}>
          <Text style={styles.iconFav} onPress={() => addMangaFav(mangaId, manga?.name, manga?.author, manga?.imageUrl)}>
            Salvar
            <Fontisto name="favorite" size={24} color="#eee" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chapterContainer}>
        <Text style={styles.title}>Capitulos: </Text>
        <FlatList
          data={manga?.chapterList}
          renderItem={({ item }) => (
            <ChapterButton item={item} func={navigation.navigate} />
          )}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};
