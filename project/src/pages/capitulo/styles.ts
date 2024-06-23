import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222'
    },
    contentContainer: {
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        aspectRatio: 0.75,
        resizeMode: 'contain'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        marginTop: 40,
    }
});