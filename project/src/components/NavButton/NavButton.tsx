import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

interface NavButtonProps {
    content: string | undefined,
    func: any
}

export const NavButton = ({ content, func }: NavButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={func}>
            <Text style={styles.text}>{content}</Text>
        </TouchableOpacity>
    )
}