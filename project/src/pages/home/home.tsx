import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, ScrollView } from 'react-native';
import { api } from '../../services/mangahook-api/api';
import { MangaCard } from '../../components/MangaCard/MangaCard';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';

export interface MangaItem {
  id: string,
  image: string,
  title: string,
  chapter: string,
  description: string,
  view: string
}

export const Home = ({ navigation }) => {
  const [mangas, setMangas] = useState<MangaItem[]>([]);
  const [metaData, setMetaData] = useState()
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMangas = async ( pageN ) => {
    setLoading(true);

    try {
      const response = await api.get(`/api/mangaList?page=${pageN}`);
      const metaData = response.data.metaData.totalPages;
      const mangaLista = response.data.mangaList;

      setMangas(mangaLista);
      setMetaData(metaData);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMangas(page);
  }, [ page ]);

  const handlePressPageProx = () => {
    setPage(page + 1);
  };

  const handlePressPagePrev = () => {
    setPage(page - 1);
  };

  const handlePressPageDefault = () => {
    setPage(1)
  }

  const renderMangaItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.title}</Text>
      <Button
        title="Ver Mais"
        onPress={() => navigation.navigate('Detalhes da obra', { mangaId: item.id })}
      />
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#222' }}>
      <HomeHeader/>
      {loading ? <ActivityIndicator size="large" /> 
      :
      <FlatList
        data={mangas}
        renderItem={({ item }) => 
          <MangaCard item={item} onPress={() => navigation.navigate('Detalhes da obra', { mangaId: item.id })}/>
        }
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        style={{padding: 10}}
      />}
      <View>
        <Text>Pagina: {page}</Text>
        {page != 1 && <Text onPress={handlePressPagePrev}>Prev</Text>}
        {page != metaData && <Text onPress={handlePressPageProx}>Prox</Text>}
        <Text onPress={handlePressPageDefault}>Voltar ao inicio</Text>
      </View>
    </ScrollView>
  );
};
