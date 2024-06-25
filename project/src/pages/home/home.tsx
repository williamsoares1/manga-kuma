import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { api } from '../../services/mangahook-api/api';
import { Header } from '../../components/Header/Header';
import { Nav } from '../../components/Nav/Nav';
import { PaginationHomeButtons } from '../../components/PaginationHomeButtons/PaginationHomeButtons';
import { MangaList } from '../../components/MangaList/MangaList';
import { NavigationProp } from '@react-navigation/native';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';

export interface MangaItem {
    id: string;
    image: string;
    title: string;
    chapter: string;
    description: string;
    view: string;
}

export const Filters = {
    ALL: "ALL",
    SEARCH: "SEARCH",
    STATE: "STATE",
    CATEGORY: "CATEGORY",
};

interface HomeProps {
  navigation: NavigationProp<any>;
}

export const Home = ({ navigation }: HomeProps) => {
    const [mangas, setMangas] = useState<MangaItem[]>([]);
    const [categories, setCategories] = useState<[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [filter, setFilter] = useState(Filters.ALL);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const getMangas = async (type: string, pageNum: number, param: string) => {
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
        const response = await api.get("/api/mangaList");
        setCategories(response.data.metaData.category);
    };

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        getMangas(filter, page, search);
    }, [page, filter, search]);

    const handleFilterChange = (filter: string, param: string) => {
        setFilter(filter);
        setSearch(param);
        setPage(1);
    };

    const handlePageChange = (direction: string) => {
        if (direction === "next" && page < totalPages) {
            setPage(page + 1);
        } else if (direction === "prev" && page > 1) {
            setPage(page - 1);
        } else if (direction === "reset") {
            setPage(1);
        }
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#222" }}>
            <Header />
            <Nav categories={categories}
                func={(type: string, param: string) => handleFilterChange(type, param)}/>

            {loading ? <LoadingIndicator /> :
                <MangaList mangas={mangas} navigation={navigation.navigate} />
            }

            <PaginationHomeButtons page={page} totalPages={totalPages} func={handlePageChange} />
        </ScrollView>
    );
};
