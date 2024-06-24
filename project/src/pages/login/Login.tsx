import {
  ActivityIndicator,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavigationProp } from "@react-navigation/native";
import { apiClientes } from "../../services/api-clientes/api";
import bgTela from "../../assets/image/bgTelaLogin.png";
import { useCallback } from 'react';
import { useFonts } from 'expo-font';

interface NavigationProps {
  navigation: NavigationProp<any, any>;
}

interface UserData {
  email: string;
  senha: string;
}

const Login = ({ navigation }: NavigationProps) => {
  const [login, setLogin] = useState({ email: "", senha: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Estado de carregamento
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = async () => {
    setLoading(true); // Inicia o carregamento
    try {
      const response = await apiClientes.get("/users");
      const user = response.data.filter(
        (data: UserData) =>
          data.email === login.email && data.senha === login.senha
      );

      if (user.length > 0) {
        // Por um Loading..
        const userData = user[0];
        handleLogin(userData.nome, userData.email);
      } else {
        setError("Usuário ou senha inválidas");
        handleZerar();
      }
    } catch (error) {
      setError("Erro ao realizar login");
    } finally {
      setLoading(false); // Termina o carregamento
    }
  };

  const handleZerar = () => {
    setLogin({ email: "", senha: "" });
  };

  const [fontsLoaded, fontError] = useFonts({
    'Knewave': require('../../assets/fonts/Knewave-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={bgTela} style={styles.bgTela}>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail!"
            textAlign="center"
            placeholderTextColor="gray"
            autoCapitalize="none"
            value={login.email}
            onChangeText={(text) => setLogin({ ...login, email: text })}
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha!"
            textAlign="center"
            placeholderTextColor="gray"
            autoCapitalize="none"
            secureTextEntry={true}
            value={login.senha}
            onChangeText={(text) => setLogin({ ...login, senha: text })}
          />

          {error && <Text style={styles.error}>{error}</Text>}

          {loading ? (
            <ActivityIndicator size="large" color="#964F7B" />
          ) : (
            <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.textStyle}>
          <Text style={styles.textFooter2}> Não tem Login?</Text>
          <Text style={styles.textFooter}> Você pode se cadastrar</Text>
          <Text
            style={styles.textClick}
            onPress={() => navigation.navigate("cadastro")}
          >
            Clicando aqui :D
          </Text>
        </View>
        
      </ImageBackground>
    </View>
  );
};

export default Login;
