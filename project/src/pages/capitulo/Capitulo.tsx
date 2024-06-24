import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { api } from "../../services/mangahook-api/api";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { PaginationChapterButtons } from "../../components/PaginationChapterButtons/PaginationChapterButtons";
import { FontAwesome5 } from '@expo/vector-icons';
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export type Chapter = {
    id: string,
    name: string
}

type ImageObj = {
    title: string,
    image: string
}

interface CapituloProps {
    route: RouteProp<{ params: { mangaId: string, id: string } }, 'params'>;
    navigation: NavigationProp<any>;
}

export const Capitulo = ({ route, navigation }: CapituloProps) => {
    const { id, mangaId } = route.params;
    const [images, setImages] = useState<ImageObj[]>([]);
    const [currentChapter, setCurrentChapter] = useState<string>(String);
    const [chapterList, setChapterList] = useState<Chapter[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(Number);
    const [title, setTitle] = useState<string>();
    const [isLoading, setIsLoading] = useState(true);
    const [loadingImages, setLoadingImages] = useState<boolean[]>([]);

    const findChapter = async (chapterId: string) => {
        setIsLoading(true);
        try {
            const response = await api.get(`/api/manga/${mangaId}/${chapterId}`);
            const { images, currentChapter, chapterListIds, title } = response.data;

            setImages(images);
            setCurrentChapter(currentChapter);
            setChapterList(chapterListIds);
            setCurrentIndex(chapterListIds.findIndex((item: { name: any; }) => item.name === currentChapter));
            setTitle(title);

            setLoadingImages(new Array(images.length).fill(true));
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageLoad = (index: number) => {
        setLoadingImages(prevState => {
            const newLoadingImages = [...prevState];
            newLoadingImages[index] = false;
            return newLoadingImages;
        });
    };

    const pagination = (param: string) => {
        const nextChapter = param === "next" ? chapterList[currentIndex - 1] : chapterList[currentIndex + 1];
        if (nextChapter) {
            findChapter(nextChapter.id);
        }
    };

    useEffect(() => {
        findChapter(id);
    }, []);

    const headerAndPagination = () => (
        <>
            <Text style={styles.text} onPress={() => navigation.navigate('Manga', { mangaId })}>
                <FontAwesome5 name="book-open" size={24} color="white" />   {title}
            </Text>
            <PaginationChapterButtons func={pagination} index={currentIndex} list={chapterList} currentChapter={currentChapter} />
        </>
    );

    return (
        <ScrollView style={styles.container}>
            <HomeHeader />
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                <>
                    {headerAndPagination()}
                    <FlatList
                        style={styles.imageContainer}
                        data={images}
                        renderItem={({ item, index }) => (
                            <View>
                                {loadingImages[index] && (
                                    <LoadingIndicator/>
                                )}
                                <Image
                                    alt={item.title}
                                    source={{ uri: item.image }}
                                    style={styles.image}
                                    onLoad={() => handleImageLoad(index)}
                                />
                            </View>
                        )}
                        initialNumToRender={1}
                        maxToRenderPerBatch={1}
                        updateCellsBatchingPeriod={2000}
                        scrollEnabled={false}
                    />
                    {headerAndPagination()}
                </>
            )}
        </ScrollView>
    );
}
