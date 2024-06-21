import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MangaItem } from "../../pages/home/home";

interface MangaCardProps {
    item: MangaItem,
}

export const MangaCard = ({ item, ...rest }: MangaCardProps) => {
    const transformarTexto = (texto: string, maxLength: number ) => texto.length > maxLength ? texto.slice(0, maxLength - 3) + '...' : texto;

    return (
        <>
            {
            item.description != undefined
            ?
                <TouchableOpacity activeOpacity={0.7} {...rest} style={styles.container}>
                    <Image resizeMode="contain" style={styles.image} source={{uri: item.image}}/>
                    <View style={styles.detailContainer}>
                        <Text style={{color: '#fff'}}>{transformarTexto(item.title, 30)}</Text>
                        <Text style={{color: '#aaa'}}>
                            {item.description != '' ? transformarTexto(item.description, 60): "Descrição não disponivel"}
                        </Text>
                        <View style={styles.detailBox}>
                            <Text style={{color: '#FF8FD4'}}>{item.view}</Text>
                            <Text style={styles.button}>{transformarTexto(item.chapter, 11)}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            :
                <TouchableOpacity activeOpacity={0.7} style={styles.filterEstructure}>
                    <Image resizeMode="contain" style={styles.image} source={{uri: item.image}}/>
                    <Text style={{color: '#fff'}}>{transformarTexto(item.title, 30)}</Text>
                    <Text {...rest} style={styles.button}>Ver Mais...</Text>
                </TouchableOpacity>
            }
        </>
    )
}