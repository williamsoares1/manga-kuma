import { ActivityIndicator, FlatList, ScrollView } from "react-native";
import { MangaCard } from "../../components/MangaCard/MangaCard";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MangaList } from "../../components/MangaList/MangaList";
import { styles } from "../../components/MangaList/styles";

const Favoritos = ({ navigation }) => {
  const [salvos, setSalvos] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(salvos);

  useEffect(() => {
    const loadFavoritos = async () => {
      try {
        const storedSalvos = await AsyncStorage.getItem("mangasSalvos");
        if (storedSalvos) {
          setSalvos(JSON.parse(storedSalvos));
        }
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      }
    };
    loadFavoritos();
  }, []);

  const handleTirarDosSalvos = () => {};

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#222" }}>
      <HomeHeader />
    </ScrollView>
  );
};

export default Favoritos;
