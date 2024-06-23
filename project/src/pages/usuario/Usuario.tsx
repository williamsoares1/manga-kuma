import { useContext } from "react";
import { Alert, Image, Text, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./style";
import logonome from "../../assets/image/logonome.png";

interface UserData {
  nome: string;
  email: string;
}

const Usuario = () => {
  const { userData, handleLogout, excluirUsuario } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logonome} style={styles.logoHeader} />
      </View>

      <View>
        <Image source={logonome} style={styles.imageUser} />
      </View>

      <View>
        <Text style={styles.textUser}>NOME DE USUÁRIO</Text>
      </View>

      <View>
        <Text style={styles.label}>USUÁRIO</Text>
        <Text style={styles.input}>{userData.nome ?? ""}</Text>
        <Text style={styles.label}>E-MAIL</Text>
        <Text style={styles.input}>{userData.email ?? ""}</Text>
      </View>

      {/* <View>
        <Text style={styles.textDescricao}>DESCRIÇÃO DO PERFIL</Text>
        <Text style={styles.textBox}>Descricao aqui</Text>
      </View> */}

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
    </View>
  );
};

export default Usuario;
