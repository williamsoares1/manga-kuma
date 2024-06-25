import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageContainer: {
        maxWidth: '100%',
        height: 'auto',
        paddingHorizontal: 10
    },
    image: {
        flex: 1,
        width: '100%',
        aspectRatio: 0.75,
        resizeMode: 'contain',
    },
})