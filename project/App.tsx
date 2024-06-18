import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import apiMangas from './api/apiMangas';

const App = () => {
  const [ mangas, setMangas ] = useState([]);

  useEffect(() => {
    fetchMangaList();
  }, []);

  const fetchMangaList = async () => {
    try {
      const response = await apiMangas.get('/api/mangaList');
      setMangas(response.data.mangaList)
    } catch (error) {
      console.error('There was an error fetching the manga list!', error);
    }
  };  

  return (
    <ScrollView>
      <View>
        <Text>Manga List</Text>
        {mangas.map((manga) => (
          <View>
            <Image style={{width: 150, height: 200}} source={{ uri: `${manga.image}` }} />
            <Text>{manga.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
