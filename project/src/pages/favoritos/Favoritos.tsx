import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CallnText } from "../../components/CallnText/CallnText";
import { styles } from "./style";
import { BotaoFavoritar } from "../../components/BotaoFavoritar/BotaoFavoritar";
import { NavigationProp } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

interface NavigationProps {
  navigation: NavigationProp<any, any>;
}

interface MangaFavoritoParams {
  id: string;
  nome: string;
  autor: string;
  imgUrl: string;
  favoritado: boolean;
}

const Favoritos = ({ navigation }: NavigationProps) => {
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('favoritos-manga-list');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Erro ao carregar dados:', e);
    }
  }

  const handleTirarDosSalvos = async (mangaId: string) => {
    try {
      const data = await getData();
      if (data) {
        const index = data.findIndex((item: MangaFavoritoParams) => item.id === mangaId);
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

  const atualizar = async () => {
    setLoading(true);
    const res = await getData();
    setFavoritos(res ? res : []);
    setLoading(false);
  };

  useEffect(() => {
    atualizar();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#222" }}>
      <Header />
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <>
          {favoritos.length === 0 ? (
            <Text style={styles.title}>Você não tem favoritos salvos.</Text>
          ) : (
            <FlatList
              scrollEnabled={false}
              data={favoritos}
              renderItem={({ item }: { item: MangaFavoritoParams }) =>
                <>
                  <View style={styles.mangaEspecify}>
                    <Image
                      source={{ uri: item.imgUrl }}
                      style={{ flex: 1, width: 200, height: 300, resizeMode: "contain" }}
                    />
                    <View style={{ flex: 1, justifyContent: "space-around" }}>
                      <Text style={styles.title}>{item.nome}</Text>
                      <CallnText call="Autor:" text={item.autor} />
                      <Text
                        style={styles.capitulos}
                        onPress={() => navigation.navigate('Manga', { mangaId: item.id })}
                      >
                        {'Capítulos  '}
                        <FontAwesome5 name="book-open" size={15} color="white" />
                      </Text>

                      <BotaoFavoritar
                        title='Excluir dos favoritos'
                        icon=""
                        onPress={() => handleTirarDosSalvos(item.id)}
                      />
                    </View>
                  </View>
                </>}
            />
          )}
        </>
      )}
      <TouchableOpacity onPress={atualizar}>
        <Text style={styles.text}>Atualizar <AntDesign name="reload1" size={15} color="#fff" /></Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Favoritos;
