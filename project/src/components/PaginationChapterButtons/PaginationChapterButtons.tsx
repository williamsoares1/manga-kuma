import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';

export const PaginationChapterButtons = ({index, list, func, currentChapter}) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {index != list.length - 1 &&
                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => func("prev")}>
                    <Text style={styles.text}><AntDesign name="arrowleft" size={24} color="white"/></Text>
                </TouchableOpacity>
                }

                <Text style={styles.text}>{currentChapter}</Text>

                {index != 0 && 
                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => func("next")}>
                    <Text style={styles.text}><AntDesign name="arrowright" size={24} color="white" /></Text>
                </TouchableOpacity>
                }
            </View>
        </View>
    )
}