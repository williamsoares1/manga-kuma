import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';

export const PaginationButtons = ({page, totalPages, func}) => {
    return (
        <View style={styles.container}>
            {page != 1 && <Text style={styles.text} onPress={() => func('reset')}>Ir para Pagina 1</Text>}
            <View style={styles.buttonContainer}>
                {page > 1 &&
                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => func('prev')}>
                    <Text style={styles.text}><AntDesign name="arrowleft" size={24} color="white"/></Text>
                </TouchableOpacity>
                }

                <Text style={styles.text}>Pagina: {page}</Text>

                {page < totalPages && 
                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => func('next')}>
                    <Text style={styles.text}><AntDesign name="arrowright" size={24} color="white" /></Text>
                </TouchableOpacity>
                }
            </View>
        </View>
    )
}