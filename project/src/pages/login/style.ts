import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingTop: 60,
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    image: {
        tintColor: "#f00",
        width: 50,
        height: 50
    },
    input: {
        backgroundColor:'#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginVertical: 10,
        borderRadius: 7
    },
    error: {
        color: 'red',
        marginBottom: 20,
      },

});