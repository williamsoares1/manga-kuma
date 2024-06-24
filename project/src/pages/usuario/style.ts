import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },

    dadosText:{
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
        marginVertical: 10,
    },

    dados:{
        fontSize: 15,
        textAlignVertical: 'center',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#333',
        color: '#fff'
    },

    text: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        textAlignVertical: 'center',
        backgroundColor: "#964F7B",
        padding: 10,
        marginTop: 60,
        alignItems: "center",
    },

    dadosContainer: {
        paddingHorizontal: 10,
    },

    img: {
        width: 380,
        height: 380,
        resizeMode: 'cover',
        alignSelf: 'center'
    },

    userImgContainer: {
        marginVertical: 30,
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    }
});