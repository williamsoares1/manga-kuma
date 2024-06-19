import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { api } from '../../services/mangahook-api/api';

export const MangaEsp = ({ route }) => {
  const { mangaId } = route.params;
  const [manga, setManga] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(mangaId)

  const fetchMangaDetails = async () => {
    try {
      const response = await api.get(`/api/manga/${mangaId}`)
      setManga(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMangaDetails();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ padding: 10 }}>
      <Text>{manga.name}</Text>
    </View>
  );
};
