import { FlatList, Image, ScrollView, Text, View } from "react-native"
import { api } from "../../services/mangahook-api/api";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { PaginationButtons } from "../../components/PaginationHomeButtons/PaginationHomeButtons";
import { PaginationChapterButtons } from "../../components/PaginationChapterButtons/PaginationChapterButtons";

interface chapter{
    id: string,
    name: string
}

export const Capitulo = ({ route, navigation }) => {
    const { id, mangaId } = route.params;
    const [images, setImages] = useState([]);
    const [currentChapter, setCurrentChapter] = useState();
    const [chapterList, setChapterList] = useState<chapter[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>();

    const findChapter = async (chapterId: string) => {
        try {
            await api.get(`/api/manga/${mangaId}/${chapterId}`)
            .then(response => response.data)
            .then(response => {
                setImages(response.images);
                setCurrentChapter(response.currentChapter);
                setChapterList(response.chapterListIds);
                setCurrentIndex(response.chapterListIds.findIndex((item: { name: any; }) => item.name === response.currentChapter));
            })
        } catch (error) {
            console.error(error);
        }
    };

    const pagination = (param) => {
        const nextChapter = param === "next" ? chapterList[currentIndex - 1] : chapterList[currentIndex + 1];

        if (nextChapter) {
            findChapter(nextChapter.id);
        }
    };

    useEffect(() => {
        findChapter(id);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <HomeHeader/>
            <PaginationChapterButtons func={pagination} index={currentIndex} list={chapterList} currentChapter={currentChapter}/>
            <FlatList
                style={{width: '100%', height: '100%', backgroundColor: '#111', paddingVertical: 65}}
                data={images}
                renderItem={({item}) => {
                    return <Image source={{uri: item.image}} style={styles.image}/>
                }}
                initialNumToRender={1}
                maxToRenderPerBatch={1}
                updateCellsBatchingPeriod={200}
                scrollEnabled={false}
            />
            <Text onPress={(() => navigation.navigate('Detalhes da obra', { mangaId: mangaId }))}></Text>
            <PaginationChapterButtons func={pagination} index={currentIndex} list={chapterList} currentChapter={currentChapter}/>
        </ScrollView>
    );
}
