import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { Chapter } from "../../pages/capitulo/Capitulo";

interface PaginationProps{
    index: number,
    list: Chapter[],
    func: Function,
    currentChapter: string
}

export const PaginationChapterButtons = ({index, list, func, currentChapter}: PaginationProps) => {
    const transformarTexto = (texto: string, maxLength: number ) => texto.length > maxLength ? texto.slice(0, maxLength - 3) + '...' : texto;

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {index != list.length - 1 &&
                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => func("prev")}>
                    <Text style={styles.text}><AntDesign name="arrowleft" size={24} color="white"/></Text>
                </TouchableOpacity>
                }

                <Text style={styles.text}>{transformarTexto(currentChapter, 14)}</Text>

                {index != 0 && 
                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => func("next")}>
                    <Text style={styles.text}><AntDesign name="arrowright" size={24} color="white" /></Text>
                </TouchableOpacity>
                }
            </View>
        </View>
    )
}