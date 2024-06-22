import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { chapter } from "../../pages/mangaEsp/mangaEsp";

interface ChapterButtonProps{
    item: chapter,
    func: Function,
    mangaId: string
}

export const ChapterButton = ({ item, func, mangaId }: ChapterButtonProps) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.9} 
            style={styles.chapterButton}
            onPress={() => func("Capitulo", { id: item.id, mangaId: mangaId })}
        >
            <Text style={styles.chapterTitle}>{item.name}</Text>
            <View style={styles.chapterDetail}>
              <Text style={styles.chapterDetailText}>{item.createdAt}</Text>
              <Text style={styles.chapterDetailText}>{item.view}</Text>
            </View>
        </TouchableOpacity>
    )
}