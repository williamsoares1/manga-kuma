import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginVertical: 25
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: '#964F7B'
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
})