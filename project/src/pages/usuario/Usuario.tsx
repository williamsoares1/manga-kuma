import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./style";
import logonome from "../../assets/image/logonome.png";
import { Button } from "../../components/Button";

const Usuario = () => {
  const { handleLogout } = useContext(AuthContext);
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
        <Text style={styles.input}> E-mail Aqui</Text>
        <Text style={styles.label}>E-MAIL</Text>
        <Text style={styles.input}> Senha Aqui</Text>
      </View>

      {/* <View>
        <Text style={styles.textDescricao}>DESCRIÇÃO DO PERFIL</Text>
        <Text style={styles.textBox}>Descricao aqui</Text>
      </View> */}

      <View
        style={{
          backgroundColor: "#fff",
          width: 60,
          borderRadius: 50,
          padding: 10,
          marginTop: 60,
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
          SAIR
        </Text>
      </View>
    </View>
  );
};

export default Usuario;
