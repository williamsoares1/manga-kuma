import React, { useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const image = require('../../assets/image/1.png');

export default function Inicio() {
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('login'); 
    };

    const handleCadastroPress = () => {
        navigation.navigate('cadastro'); 
    };

    return (
        <ImageBackground source={image} style={styles.fundo}>
            <View style={styles.container}>
                {/* Texto em baixo do bem vindos */}
                <Text style={styles.textoinicio}> "Faça login agora e desbloqueie seu portal para </Text>
                <Text style={styles.textoinicio2}> infinitas aventuras em quadrinhos!" </Text>

                {/* Botão de Login */}
                <TouchableOpacity
                    style={[styles.button, isPressed && styles.buttonPressed]}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                    onPress={handleLoginPress} 
                >
                    <Text style={styles.botaologin}>LOGIN</Text>
                </TouchableOpacity>

                {/* Texto de cadastro */}
                <View style={styles.containercadastro}>
                    <Text style={styles.cadastroTexto}>NÃO TEM UM LOGIN?</Text>
                    <Text style={styles.cadastroTexto2}>VOCÊ PODE SE CADASTRAR</Text>
                    <TouchableOpacity onPress={handleCadastroPress}>
                        <Text style={styles.cliqueaqui}>CLICANDO AQUI</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}