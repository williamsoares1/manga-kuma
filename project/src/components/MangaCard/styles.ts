import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        padding: 10,
        flex: 1,
        margin: 5,
        borderColor: '#aaa',
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        gap: 10
    },
    image: {
        flex: 1,
        width: '100%',
        minHeight: 250,
        maxHeight: 250
    },
    detailBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        gap: 10
    },
    button: {
        backgroundColor: '#964F7B',
        width: 135,
        height: 40,
        textAlignVertical: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 12
    },
    filterEstructure: {
        backgroundColor: '#222',
        padding: 10,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        gap: 15,
        margin: 5,
        borderColor: '#aaa',
        borderWidth: 2,
        borderRadius: 8,
        width: 250,
        alignSelf: 'center',
    }
}); 