import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    chapterOpt: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    chapterButton: {
        backgroundColor: '#222',
        padding: 15,
        marginVertical: 1,
        gap: 2
    },
    chapterTitle: {
        color: '#fff',
    },
    chapterDetail: {
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
    },
    chapterDetailText: {
        color: '#888',
        fontSize: 11
    },
})