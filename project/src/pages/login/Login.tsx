import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./style";
import { Button } from "../../components/Button";
import { useContext, useState } from "react";
import { AuthContext } from '../../context/AuthContext';
import { NavigationProp } from "@react-navigation/native";
import apiClientes from "../../services/api-clientes/api";

interface NavigationProps {
    navigation: NavigationProp<any, any>;
}

interface UserData {
    email: string;
    senha: string;
}

const Login = ({ navigation }: NavigationProps) => {
    const [login, setLogin] = useState({ email: '', senha: '' })
    const [error, setError] = useState<string | null>(null);
    const { handleLoginSuccess } = useContext(AuthContext);


    const handleSubmit = async () => {
        try {
            const response = await apiClientes.get('/users')
            const user = response.data.filter(
                (data: UserData) => data.email === login.email && data.senha === login.senha)
                // console.log(user)

            if (user.length > 0) {
                alert('Login realizado com sucesso!')
                handleLoginSuccess()

            } else {
                setError('Usuário ou senha inválidas');
                handleZerar()
            }
        } catch (error) {
            setError('Erro ao realizar login');
        }
    }
    
    const handleZerar = () => {
        setLogin({ email: '', senha: '' });
      };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder='E-mail'
                value={login.email}
                placeholderTextColor={'#888'}
                onChangeText={(text) => setLogin({...login, email: text })}
            />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                value={login.senha}
                placeholderTextColor={'#888'}
                onChangeText={(text) => setLogin({...login, senha: text })}
            />

            {error && <Text style={styles.error}>{error}</Text>}

            <Button
                title="Fazer login"
                onPress={handleSubmit}
                activeOpacity={0.7}
            />

            <Text style={{color: '#fff'}}>
                Não tem conta?{'  '}
                <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
                    <Text style={{color: '#f1f1f1', fontSize: 20}}>Registrar</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}

export default Login