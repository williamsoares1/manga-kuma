import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator } from 'react-native';
import { api } from '../../services/mangahook-api/api';

export const Home = ({ navigation }) => {
  const [mangas, setMangas] = useState([]);
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
    <View style={{ flex: 1 }}>
      <View>
        <Text>Pagina: {page}</Text>
        {page != 1 && <Text onPress={handlePressPagePrev}>Prev</Text>}
        {page != metaData && <Text onPress={handlePressPageProx}>Prox</Text>}
        <Text onPress={handlePressPageDefault}>Voltar ao inicio</Text>
      </View>
      
      {loading ? <ActivityIndicator size="large" /> : null}
      <FlatList
        data={mangas}
        renderItem={renderMangaItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
