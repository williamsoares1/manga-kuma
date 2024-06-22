import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { api } from '../../services/mangahook-api/api';
import { styles } from './styles';
import { CallnText } from '../../components/CallnText/CallnText';
import { ChapterButton } from '../../components/ChapterButton/ChapterButton';
import { Fontisto } from '@expo/vector-icons';

interface MangaItem{
  imageUrl: string,
  name: string,
  author: string,
  status: string,
  updated: string,
  view: string,
  genres: string[],
  chapterList: chapter[]
}

export interface chapter{
  id: string,
  path: string,
  name: string,
  view: string,
  createdAt: string
}

export const MangaEsp = ({ route, navigation }) => {
  const { mangaId } = route.params;
  const [manga, setManga] = useState<MangaItem>();
  const [loading, setLoading] = useState(true);

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
    <ScrollView style={{ paddingVertical: 30, backgroundColor: '#222' }}>
      <View style={styles.mangaEspecify}>
        <Image source={{ uri: manga?.imageUrl }} style={{ flex: 1, width: 200, height: 300, resizeMode: 'contain' }}/>
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <Text style={styles.title}>{manga?.name}</Text>
          <CallnText call='Generos:' text={manga?.genres.join(', ')}/>
          <CallnText call='Autor:' text={manga?.author}/>
          <CallnText call='Status:' text={manga?.status}/>
          <CallnText call='Views:' text={manga?.view}/>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.mangaFav}>
        <Text style={styles.iconFav}><Fontisto name="favorite" size={24} color="#eee"/></Text>
      </TouchableOpacity>
      <View style={styles.chapterContainer}>
        <Text style={styles.title}>Capitulos: </Text>
        <FlatList
          data={manga?.chapterList}
          renderItem={({ item }) => <ChapterButton item={item} func={navigation.navigate}/>}
          scrollEnabled={false}
        />
      </View>

    </ScrollView>
  );
};
