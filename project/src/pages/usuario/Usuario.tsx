import { useContext } from "react";
import { Alert, Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./style";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../../assets/image/logo/logo_user.png';

const Usuario = () => {
  const { userData, handleLogout, excluirUsuario } = useContext(AuthContext);
  return (
    <ScrollView style={styles.container}>
      <HomeHeader />

      <View style={styles.dadosContainer}>
        <Text style={styles.dadosText}>NOME DE USUÁRIO: </Text>
        <Text style={styles.dados}>{userData.nome ?? ""}</Text>
        <Text style={styles.dadosText}>SEU E-MAIL</Text>
        <Text style={styles.dados}>{userData.email ?? ""}</Text>
      </View>

      <Image style={styles.img} alt="logo" source={logo} />

      <Text style={styles.text} onPress={handleLogout}>
        Finalizar sessão <MaterialIcons name="logout" size={15} color="#fff" />
      </Text>

      <View
        style={{
          backgroundColor: "red",
          width: "50%",
          borderRadius: 50,
          padding: 10,
          marginTop: 60,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
          onPress={() => {
            Alert.alert(
              "Excluir conta",
              "Você tem certeza que deseja excluir sua conta?",
              [
                {
                  text: "Cancelar",
                  style: "cancel",
                },
                {
                  text: "Excluir",
                  onPress: () => excluirUsuario(userData.id),
                },
              ]
            );
          }}
        >
          Excluir conta
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          width: "50%",
          borderRadius: 50,
          padding: 10,
          marginTop: 6,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#000",
            fontWeight: "bold",
          }}
          onPress={handleLogout}
        >
          Finalizar sessão
        </Text>
      </View>

    </ScrollView >
  );
};

export default Usuario;
