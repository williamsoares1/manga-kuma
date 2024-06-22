import { Text, View } from "react-native";
import { styles } from "./styles";

interface CallnTextProps{
    call: string,
    text: string | undefined
}

export const CallnText = ({call, text}: CallnTextProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.call}>{call} <Text style={styles.text}>{text}</Text></Text>
        </View>
    )
}