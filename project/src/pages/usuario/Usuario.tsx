import { useContext } from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./style";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../../assets/image/logo/logo_user.png';

const Usuario = () => {
  const { userData, handleLogout } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <HomeHeader/>
      
        <View style={styles.dadosContainer}>
          <Text style={styles.dadosText}>NOME DE USUÁRIO: </Text>
          <Text style={styles.dados}>{userData.nome ?? ""}</Text>
          <Text style={styles.dadosText}>SEU E-MAIL</Text>
          <Text style={styles.dados}>{userData.email ?? ""}</Text>
        </View>

        <Image style={styles.img} alt="logo" source={logo}/>

        <Text style={styles.text} onPress={handleLogout}>
          Finalizar sessão <MaterialIcons name="logout" size={15} color="#fff" />
        </Text>
        
    </ScrollView>
  );
};

export default Usuario;
