import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mangaEspecify: {
        marginTop: 35,
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 15
    },
    favContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#964F7B',
        paddingVertical: 15,
        marginVertical: 35,
    },
    textFav: {
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
        marginVertical: 15,
    },
    chapterContainer: {
        backgroundColor: '#964F7B',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 35,
        margin: 10,
    },
})