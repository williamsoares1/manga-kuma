import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

interface SearchButtonProps {
    content: string | {}
}

export const SearchButton = ({ content, ...rest }: SearchButtonProps) => {
    const transformarTexto = (texto: string | any, maxLength: number ) => texto.length > maxLength ? texto.slice(0, maxLength - 3) + '...' : texto;

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
            <Text style={styles.text}>{transformarTexto(content, 9)}</Text>
        </TouchableOpacity>
    )
}