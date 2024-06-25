import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { useCallback, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CallnText } from "../../components/CallnText/CallnText";
import { styles } from "./style";
import { FavoritosContext } from "../../context/favoritosContext";


const Favoritos = ({ navigation }) => {
  const { updateFavoritos, setUpdateFavoritos } = useContext(FavoritosContext);
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [someOtherState, setSomeOtherState] = useState(false);

  console.log(favoritos)

  const updateSomeOtherState = useCallback(() => {
    setSomeOtherState(true);
  }, [setSomeOtherState]);

  useEffect(() => {
    getData().then(res => {
      setFavoritos(res ? res : [])
    })
    if (!someOtherState) {
      setSomeOtherState(true);
    }
  }, [updateSomeOtherState]);



  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('favoritos-manga-list');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Erro ao carregar dados:', e);
    }
  }

  const handleTirarDosSalvos = async (mangaId) => {
    try {
      const data = await getData();
      if (data) {
        const index = data.findIndex((item) => item.id === mangaId);
        if (index !== -1) {
          data.splice(index, 1);
          await AsyncStorage.setItem('favoritos-manga-list', JSON.stringify(data));
          setFavoritos(data);
        }
      }
    } catch (e) {
      console.log('Erro ao excluir item:', e)
    }
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#222" }}>
      <HomeHeader />
      <Text>FAVORITOS</Text>
      <FlatList
        data={favoritos}
        renderItem={({ item }) =>
          <>
            <View style={styles.mangaEspecify}>
              <Image
                source={{ uri: item.imgUrl }}
                style={{ flex: 1, width: 200, height: 300, resizeMode: "contain" }}
              />
              <View style={{ flex: 1, justifyContent: "space-around" }}>
                <Text style={styles.title}>{item.nome}</Text>
                <CallnText call="Autor:" text={item.autor} />
                <TouchableOpacity>
                  <View>
                    <Text style={{ color: '#fff' }} onPress={() =>
                      navigation.navigate("Manga", { mangaId: item.id })
                    }>
                      Detalhes
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View>
                    <Text style={{ color: '#fff' }} onPress={() => handleTirarDosSalvos(item.id)} >
                      Tirar dos favoritos
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* <CallnText call="Views:" text={manga?.view} /> */}
              </View>
            </View>
          </>}
      />
    </ScrollView >
  );
};

export default Favoritos;
