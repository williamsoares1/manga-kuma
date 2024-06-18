import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

const App = () => {
  const [mangas, setMangas] = useState([]);
  const [anotherData, setAnotherData] = useState([]);

  useEffect(() => {
    fetchMangaList();
    fetchAnotherEndpoint();
  }, []);

  const fetchMangaList = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/mangaList');
      console.log(response.data)
      setMangas(response.data);
    } catch (error) {
      console.error('There was an error fetching the manga list!', error);
    }
  };

  const fetchAnotherEndpoint = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/anotherEndpoint');
      setAnotherData(response.data);
    } catch (error) {
      console.error('There was an error fetching the data from another endpoint!', error);
    }
  };

  return (
    <ScrollView>
      <View>
        <Text>Manga List</Text>
        {mangas.map((manga) => (
          <Text key={manga.id}>{manga.name}</Text>
        ))}
      </View>
      <View>
        <Text>Another Data</Text>
        {anotherData.map((item) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
