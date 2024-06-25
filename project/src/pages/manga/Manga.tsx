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
import { Ionicons } from "@expo/vector-icons";

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
    const [estaFavoritado, setEstaFavoritado] = useState();

    useEffect(() => {
        fetchMangaDetails();
        jaExisteNosFavoritos()
    }, []);

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

    const storeData = async (data) => {
        try {
            await AsyncStorage.setItem('favoritos-manga-list', JSON.stringify(data));
            console.log("Manga adicionado a lista Salvos!");
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

    const handleTirarDosSalvos = async (mangaId) => {
        try {
            const data = await getData();
            if (data) {
                const index = data.findIndex((item) => item.id === mangaId);
                if (index !== -1) {
                    data.splice(index, 1);
                    await AsyncStorage.setItem('favoritos-manga-list', JSON.stringify(data));
                    setEstaFavoritado(false);
                    console.log('excluido')
                }
            }
        } catch (e) {
            console.log('Erro ao excluir item:', e)
        }
    }

    async function addMangaFav(id, nome, autor, imgUrl) {
        const storedData = await AsyncStorage.getItem('favoritos-manga-list');
        const favoritosList = storedData ? JSON.parse(storedData) : [];

        const jaExisteNosFavoritos = favoritosList.some((favorito) => favorito.id === id && favorito.favoritado === true);

        if (!jaExisteNosFavoritos) {
            const novoManga = { id, nome, autor, imgUrl, favoritado: true };
            const newFavList = [...favoritosList, novoManga];
            setMangaFavorito(newFavList);
            storeData(newFavList);
            setEstaFavoritado(true);
            console.log('add favoritos')
        } else {
            console.log('manga ja existe dentro do mangaFavList');
            setEstaFavoritado(true)
        }
    }

    async function jaExisteNosFavoritos() {
        const storedData = await AsyncStorage.getItem('favoritos-manga-list');
        const favoritosList = storedData ? JSON.parse(storedData) : [];

        const jaExisteNosFavoritos = favoritosList.some((favorito) => favorito.id === mangaId && favorito.favoritado === true);
        setEstaFavoritado(jaExisteNosFavoritos);
        console.log(estaFavoritado)
    }

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

                    {/* Botão de favoritar */}
                    {estaFavoritado ? (
                        <>
                            <TouchableOpacity onPress={() => handleTirarDosSalvos(mangaId)} activeOpacity={0.8} style={styles.favContainer}>
                                <Text style={styles.textFav}>Manga salvo {'  '} <Ionicons name="star" color={'#fff'} size={15} /></Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <TouchableOpacity onPress={() => addMangaFav(mangaId, manga?.name, manga?.author, manga?.imageUrl)} activeOpacity={0.8} style={styles.favContainer}>
                                <Text style={styles.textFav}>Salvar nos favoritos {'  '} <Ionicons name="star-outline" color={'#fff'} size={15} /></Text>
                            </TouchableOpacity>
                        </>
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
