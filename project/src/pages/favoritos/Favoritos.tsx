import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import { MangaCard } from "../../components/MangaCard/MangaCard";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { useState } from "react";

const Favoritos = ({ navigation }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#222" }}>
      <HomeHeader />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={favoritos}
          renderItem={({ item }) => (
            <MangaCard
              item={item}
              onPress={() =>
                navigation.navigate("Manga", { mangaId: item.id })
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          style={{ padding: 10 }}
        />
      )}
    </ScrollView>
  );
};

export default Favoritos;
