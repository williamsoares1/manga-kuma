import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        padding: 10,
        flex: 1,
        flexDirection: "row",
        marginVertical: 8,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8
    },
    image: {
        width: 150,
        height: 150
    },
    detailBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

    },
    detailContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between'
    },
    chapterButton: {
        backgroundColor: '#222',
        width: 180,
        height: 40,
        textAlignVertical: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        textAlign: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        color: '#fff',
    }
}); 