import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import apiClientes from "../../services/api-clientes/api";
import { styles } from "./styles";
import inumaki from "../../assets/image/3.png";
import botao from "../../assets/image/botaoVoltar.png";

interface NavigationProps {
  navigation: NavigationProp<any, any>;
}

const Cadastro = ({ navigation }: NavigationProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await apiClientes.post("/users", {
        nome: name,
        email: email,
        senha: password,
      });

      if (!name || !email || !password) {
        alert("Todos os campos são obrigatório!");
        return;
      }

      setName("");
      setEmail("");
      setPassword("");
      alert("Usuário cadastrado com sucesso!");

      if (response.status === 201) {
        navigation.navigate("login");
      }
    } catch (error) {
      alert("Erro ao cadastrar usuário:");
    }
  };

  const image = require("../../assets/image/2.png");

  return (
    <ImageBackground source={image} style={styles.fundo}>
      <TouchableOpacity
        onPress={() => navigation.navigate("login")}
        style={styles.buttonVoltar}
      >
        <Image source={botao} style={styles.buttonImage} />
      </TouchableOpacity>
      <View style={styles.container}>
        {/* Input 1 */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>NOME DE USUÁRIO</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome de usuário"
            placeholderTextColor="#FFFFFF"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        {/* Input 2 */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#FFFFFF"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        {/* Input 3 */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#FFFFFF"
            value={password}
            onChangeText={(text) => setPassword(text)}
            // secureTextEntry={true}
          />
        </View>

        {/* Imagem e botão de cadastro */}
        <View style={styles.containerinumaki}>
          <Image style={styles.inumaki} source={inumaki} />
          <TouchableOpacity>
            <Text onPress={handleSubmit} style={styles.cadastrodoinumaki}>
              CADASTRAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Cadastro;
