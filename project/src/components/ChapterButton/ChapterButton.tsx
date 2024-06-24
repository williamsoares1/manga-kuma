import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { ChapterInfo } from "../../pages/manga/Manga";

interface ChapterButtonProps{
    item: ChapterInfo,
    func: Function,
    mangaId: string
}

export const ChapterButton = ({ item, func, mangaId }: ChapterButtonProps) => {
    const transformarTexto = (texto: string, maxLength: number ) => texto.length > maxLength ? texto.slice(0, maxLength - 3) + '...' : texto;
    return (
        <TouchableOpacity 
            activeOpacity={0.9} 
            style={styles.chapterButton}
            onPress={() => func("Capitulo", { id: item.id, mangaId: mangaId })}
        >
            <Text style={styles.chapterTitle}>{transformarTexto(item.name, 25)}</Text>
            <View style={styles.chapterDetail}>
              <Text style={styles.chapterDetailText}>{item.createdAt}</Text>
              <Text style={styles.chapterDetailText}>{item.view}</Text>
            </View>
        </TouchableOpacity>
    )
}