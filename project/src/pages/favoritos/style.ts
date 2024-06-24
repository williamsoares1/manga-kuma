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
        // alignContent: 'center',
        justifyContent: 'center'
    },
    mangaFav: {
        backgroundColor: '#964F7B',
        paddingVertical: 15,
        marginVertical: 55,
        width: '50%',
        borderRadius: 100,
        
    },
    iconFav: {
        textAlign: 'center'
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
        padding: 10,
        marginHorizontal: 20
    },
})