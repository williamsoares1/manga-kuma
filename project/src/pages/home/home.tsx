import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, ScrollView, TextInput } from 'react-native';
import { api } from '../../services/mangahook-api/api';
import { MangaCard } from '../../components/MangaCard/MangaCard';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { Nav } from '../../components/Nav/Nav';
import { PaginationButtons } from '../../components/PaginationButtons/PaginationButtons';
import { MangaList } from '../../components/MangaList/MangaList';

export interface MangaItem {
  id: string,
  image: string,
  title: string,
  chapter: string,
  description: string,
  view: string
}

export const Filters = {
  ALL: 'ALL',
  SEARCH: 'SEARCH',
  STATE: 'STATE',
  CATEGORY: 'CATEGORY'
};

export const Home = ({ navigation }) => {
  const [mangas, setMangas] = useState<MangaItem[]>([]);
  const [categories, setCategories] = useState();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [filter, setFilter] = useState(Filters.ALL);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getMangas = async (type, pageNum, param) => {
    setLoading(true);

    try {
      let response;
      switch (type) {
        case Filters.SEARCH:
          response = await api.get(`/api/search/${param}?page=${pageNum}`);
          break;
        case Filters.STATE:
          response = await api.get(`/api/mangaList?state=Completed&page=${pageNum}`);
          break;
        case Filters.CATEGORY:
          response = await api.get(`/api/mangaList?category=${param}&page=${pageNum}`);
          break;
        case Filters.ALL:
        default:
          response = await api.get(`/api/mangaList?page=${pageNum}`);
          break;
      }

      setTotalPages(response.data.metaData.totalPages);
      setMangas(response.data.mangaList);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const getCategories = async () => {
    const response = await api.get("/api/mangaList")
    setCategories(response.data.metaData.category);
  }

  useEffect(() => {
    getCategories();
  }, [])

  useEffect(() => {
    getMangas(filter, page, search);
  }, [page, filter, search]);

  const handleFilterChange = (filter, param) => {
    setFilter(filter);
    setSearch(param);
    setPage(1);
  };

  const handlePageChange = (direction) => {
    if (direction === 'next' && page < totalPages) {
      setPage(page + 1);
    } else if (direction === 'prev' && page > 1) {
      setPage(page - 1);
    } else if (direction === 'reset') {
      setPage(1);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#222' }}>
      <HomeHeader />
      <Nav
        func={(type, param) => handleFilterChange(type, param)}
        navigation={navigation.navigate}
        categories={categories}
      />
      {loading ? <ActivityIndicator size="large" /> :
        <MangaList mangas={mangas} navigation={navigation.navigate}/>
      }
      <PaginationButtons page={page} totalPages={totalPages} func={handlePageChange}/>
    </ScrollView>
  );
};