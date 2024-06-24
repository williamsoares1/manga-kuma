import { FlatList, Image, ScrollView, Text } from "react-native";
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
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
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
                <LoadingIndicator/>
            ) : (
                <>
                    {headerAndPagination()}
                    <FlatList
                        style={styles.imageContainer}
                        data={images}
                        renderItem={({ item }) => <Image alt={item.title} source={{ uri: item.image }} style={styles.image} />}
                        initialNumToRender={2}
                        maxToRenderPerBatch={1}
                        updateCellsBatchingPeriod={250}
                        scrollEnabled={false}
                    />
                    {headerAndPagination()}
                </>
            )}
        </ScrollView>
    );
}
