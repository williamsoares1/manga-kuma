import { View, Text, Image, TextInput, ImageBackground } from "react-native";
import { styles } from "./styles";
import imagemBackGround from "../../assets/image/backgroudheader.png";
import logo from "../../assets/image/logo.png";

export const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain" source={logo}/>
            <View style={styles.imageContainer}>
                <ImageBackground style={styles.image} source={imagemBackGround} resizeMode="cover"/>
            </View>
        </View>
    )
}