import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { styles } from './styles';
import inumaki from "../../assets/image/3.png";
import { apiClientes } from "../../services/api-clientes/api";

import image from "../../assets/image/2.png";

interface NavigationProps {
    navigation: NavigationProp<any, any>;
}

const Cadastro = ({ navigation }: NavigationProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        
        if (!name || !email || !password) {
            setError("Todos os campos são obrigatórios.");
            return;
        }
       
        setError(null);

        try {
            const response = await apiClientes.post("/users", {
                nome: name,
                email: email,
                senha: password,
            });

            setName("");
            setEmail("");
            setPassword("");
            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');

            if (response.status === 201) {
                navigation.navigate('login');
            }
        } catch (error) {
            setError("Erro ao cadastrar usuário: " + (error));
        }
    };

    return (
        <ImageBackground source={image} style={styles.fundo}>
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
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                {/* Erro */}
                {error && <Text style={styles.error}>{error}</Text>}

                <View style={styles.containerinumaki}>
                    <Image style={styles.inumaki} source={inumaki} />
                    <Text style={styles.cadastrodoinumaki} onPress={handleSubmit}>CADASTRAR</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Cadastro;