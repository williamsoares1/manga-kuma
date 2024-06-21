import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useState } from "react";
import { styles } from "../login/style";
import { Button } from "../../components/Button";
import { NavigationProp } from "@react-navigation/native";
import { apiClientes } from "../../services/api-clientes/api";

interface NavigationProps {
    navigation: NavigationProp<any, any>;
}

const Cadastro = ({ navigation }: NavigationProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
        const response = await apiClientes.post("/users", {
            nome: name,
            email: email,
            senha: password,
        });

        setName("");
        setEmail("");
        setPassword("");
        alert('Usuário cadastrado com sucesso!')
            
        if (response.status === 201) {
            navigation.navigate('login')
        }
        } catch (error) {
            setError("Erro ao cadastrar usuário:");
        }
    };



    return (
        <View style={styles.container}>
        <Text style={styles.title}>Cadastrar</Text>
        <TextInput
            style={styles.input}
            placeholder='Nome de usuário'
            value={name}
            placeholderTextColor={'#888'}
            onChangeText={(text) => setName(text)}
        />
        <TextInput
            style={styles.input}
            placeholder='E-mail'
            value={email}
            placeholderTextColor={'#888'}
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput
            style={styles.input}
            placeholder='Senha'
            value={password}
            placeholderTextColor={'#888'}
            onChangeText={(text) => setPassword(text)}
        />

        {error && <Text style={styles.error}>{error}</Text>}

        <Button
            title="Cadastrar"
            onPress={handleSubmit}
            activeOpacity={0.7}
        />
    </View>
    )
}

export default Cadastro