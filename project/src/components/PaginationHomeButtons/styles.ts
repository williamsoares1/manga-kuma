import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 20,
        marginTop: 20,
    },
    text: {
        color: '#FF8FD4',
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#222',
    },
})