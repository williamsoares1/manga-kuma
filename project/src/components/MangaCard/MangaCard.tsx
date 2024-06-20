import { Image, View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MangaItem } from "../../pages/home/home";

interface MangaCardProps {
    item: MangaItem,
}

export const MangaCard = ({ item, ...rest }: MangaCardProps) => {
    const transformarTexto = (texto: string, maxLength: number ) => texto.length >= maxLength ? texto.slice(0, maxLength) + '...' : texto;

    return (
        <TouchableOpacity activeOpacity={0.9} {...rest} style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={{uri: item.image}}/>
            <View style={styles.detailContainer}>
                <Text style={{color: '#fff'}}>{transformarTexto(item.title, 30)}</Text>
                <Text style={{color: '#eee'}}>{transformarTexto(item.description, 70)}</Text>
                <View style={styles.detailBox}>
                    <Text style={{color: '#ff66c4'}}>{item.view}</Text>
                    <Text style={styles.chapterButton}>{transformarTexto(item.chapter, 11)}</Text>
                </View>
            </View>
      </TouchableOpacity>
    )
}