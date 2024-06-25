import { useContext } from "react";
import { Alert, Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./style";
import { Header } from "../../components/Header/Header";
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../../assets/image/logo/logo_user.png';

const Usuario = () => {
  const { userData, handleLogout, excluirUsuario } = useContext(AuthContext);
  return (
    <ScrollView style={styles.container}>
      <Header />

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

        <Text style={styles.textExc} onPress={() => {
            Alert.alert("Excluir conta", "Você tem certeza que deseja excluir sua conta?",
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
          Excluir conta <MaterialIcons name="delete-forever" size={17} color="white" />
        </Text>

    </ScrollView >
  );
};

export default Usuario;
