import { View, Text, Image, TextInput, ImageBackground } from "react-native";
import { styles } from "./styles";
import imagemBackGround from "../../assets/image/backgroudheader.png";
import logo from "../../assets/image/logo/logo_home.png";

export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image alt="Logo" style={styles.logo} resizeMode="contain" source={logo}/>
            </View>
            <View style={styles.imageContainer}>
                <ImageBackground style={styles.image} source={imagemBackGround} resizeMode="cover"/>
            </View>
        </View>
    )
}