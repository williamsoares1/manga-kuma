import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { api } from '../../services/mangahook-api/api';
import { styles } from './styles';
import { CallnText } from '../../components/CallnText/CallnText';
import { ChapterButton } from '../../components/ChapterButton/ChapterButton';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BotaoFavoritar } from '../../components/BotaoFavoritar/BotaoFavoritar';

interface MangaItem {
    imageUrl: string,
    name: string,
    author: string,
    status: string,
    updated: string,
    view: string,
    genres: string[],
    chapterList: ChapterInfo[]
}

interface MangaFavoritoParams {
    id: string;
    nome: string;
    autor: string;
    imgUrl: string;
    favoritado: boolean;
}

export interface ChapterInfo {
    id: string,
    path: string,
    name: string,
    view: string,
    createdAt: string
}

interface MangaProps {
    route: RouteProp<any>;
    navigation: NavigationProp<any>;
}

export const Manga = ({ route, navigation }: MangaProps) => {
    const { mangaId } = route.params;
    const [manga, setManga] = useState<MangaItem>();
    const [isLoading, setIsLoading] = useState(true);
    const [mangaFavorito, setMangaFavorito] = useState({});
    const [estaFavoritado, setEstaFavoritado] = useState(false);

    const fetchMangaDetails = async () => {
        try {
            const response = await api.get(`/api/manga/${mangaId}`);
            setManga(response.data);
        } catch (error) {
            console.error("Aqui", error);
        } finally {
            setIsLoading(false);
        }
    };

    const storeData = async (data: MangaFavoritoParams[]) => {
        try {
            await AsyncStorage.setItem('favoritos-manga-list', JSON.stringify(data));
        } catch (error) {
            console.error("Erro ao salvar manga:", error);
        }
    };

    const getData = async () => {
        try {
            const storedData = await AsyncStorage.getItem('favoritos-manga-list');
            const favoritosList = storedData ? JSON.parse(storedData) : [];
            return favoritosList
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
                    setEstaFavoritado(false);
                    console.log('desfavoritado')
                }
            }
        } catch (e) {
            console.log('Erro ao excluir item:', e)
        }
    }

    async function addMangaFav(id: string, nome: string, autor: string, imgUrl: string) {
        const storedData = await AsyncStorage.getItem('favoritos-manga-list');
        const favoritosList = storedData ? JSON.parse(storedData) : [];
        const jaExisteNosFavoritos = favoritosList.some((favorito: MangaFavoritoParams) => favorito.id === id && favorito.favoritado === true);

        if (!jaExisteNosFavoritos) {
            const novoManga = { id, nome, autor, imgUrl, favoritado: true };
            const newFavList = [...favoritosList, novoManga];
            setMangaFavorito(newFavList);
            storeData(newFavList);
            setEstaFavoritado(true);
            console.log('favoritado')
        } else {
            console.log('manga ja existe dentro do mangaFavList');
            setEstaFavoritado(true)
        }
    }

    async function jaExisteNosFavoritos() {
        const storedData = await AsyncStorage.getItem('favoritos-manga-list');
        const favoritosList = storedData ? JSON.parse(storedData) : [];

        const jaExisteNosFavoritos = favoritosList.some((favorito: MangaFavoritoParams) => favorito.id === mangaId && favorito.favoritado === true);
        setEstaFavoritado(jaExisteNosFavoritos);
    }

    useEffect(() => {
        fetchMangaDetails();
        jaExisteNosFavoritos()
    }, []);

    return (
        <ScrollView style={{ backgroundColor: '#222' }}>
            <HomeHeader />
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                <>
                    <View style={styles.mangaEspecify}>
                        <Image alt={manga?.name} source={{ uri: manga?.imageUrl }} style={{ flex: 1, width: 200, height: 300, resizeMode: 'contain' }} />
                        <View style={{ flex: 1, justifyContent: 'space-around' }}>
                            <Text style={styles.title}>{manga?.name}</Text>
                            <CallnText call='Gêneros:' text={manga?.genres.join(', ')} />
                            <CallnText call='Autor:' text={manga?.author} />
                            <CallnText call='Status:' text={manga?.status} />
                            <CallnText call='Views:' text={manga?.view} />
                        </View>
                    </View>

                    {estaFavoritado ? (
                        <BotaoFavoritar
                            title='Manga Salvo  '
                            icon="star"
                            onPress={() => handleTirarDosSalvos(mangaId)}
                        />
                    ) : (
                        <BotaoFavoritar
                            title='Salvar nos favoritos  '
                            icon="star-outline"
                            onPress={() => addMangaFav(mangaId, manga?.name ?? '', manga?.author ?? '', manga?.imageUrl ?? '')}
                        />
                    )}

                    <View style={styles.chapterContainer}>
                        <Text style={styles.title}>Capítulos: </Text>
                        <FlatList
                            data={manga?.chapterList}
                            renderItem={({ item }) => <ChapterButton mangaId={mangaId} item={item} func={navigation.navigate} />}
                            scrollEnabled={false}
                        />
                    </View>
                </>
            )}
        </ScrollView>
    );
};
