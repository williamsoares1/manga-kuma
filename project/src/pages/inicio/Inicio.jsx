import React, { useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';

const image = require('../../assets/image/fundo1.png');
const imageBV = require('../../assets/image/bem_vindo.png');

export default function Inicio() {
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('login'); 
    };

    const handleCadastroPress = () => {
        navigation.navigate('cadastro'); 
    };

    const [fontsLoaded, fontError] = useFonts({
        'PlayfairDisplay': require('../../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
        'BebasNeue': require('../../assets/fonts/BebasNeue-Regular.ttf'), 
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
        <ImageBackground source={image} style={styles.fundo}>
            <View style={styles.container}>
                
                <Image source={imageBV}/>

                {/* Texto em baixo do bem vindos */}
                <View style={styles.textoContainer}>
                    <Text style={styles.textoinicio}> "Faça login agora e desbloqueie seu portal para </Text>
                    <Text style={styles.textoinicio2}> infinitas aventuras em quadrinhos!" </Text>
                </View>

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