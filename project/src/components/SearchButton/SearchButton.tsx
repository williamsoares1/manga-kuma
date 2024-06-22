import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

interface SearchButtonProps {
    content: string | undefined
}

export const SearchButton = ({ content, ...rest }: SearchButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
            <Text style={styles.text}>{content}</Text>
        </TouchableOpacity>
    )
}