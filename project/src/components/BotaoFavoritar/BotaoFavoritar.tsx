import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string
  icon: string
}

export const BotaoFavoritar = ({ title, icon, ...rest }: ButtonProps) => {
  return <TouchableOpacity
    {...rest}
    style={styles.favContainer}
  >
    <Text style={styles.textFav}>
      {title}
      <Ionicons name={icon as 'star' | 'star-outline'} color={'#fff'} size={15} />
    </Text>
  </TouchableOpacity>
}