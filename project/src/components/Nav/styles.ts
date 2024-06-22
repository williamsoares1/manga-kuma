import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        gap: 15
    },
    inputBox: {
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: '#964F7B',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
    },
    input: {
        backgroundColor: '#ddd',
        flex: 1,
        height: 50,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        borderColor: '#222',
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderLeftWidth: 4,

    },
    searchIconBox: {
        backgroundColor: '#ddd',
        justifyContent: 'center',
        height: 50,
        paddingHorizontal: 9,
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
        borderColor: '#222',
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderRightWidth: 4,
    },
})