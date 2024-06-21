import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loginContainer: {
        marginBottom: 100,
    },
    loginText: {
        marginTop: 70,
        marginBottom:0,
        fontSize: 65,
        fontFamily: '',
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        textShadowRadius: 30, // Raio da sombra
    },
    welcomeText: {
        fontSize: 25,
        textAlign: 'center',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: -150,
    },
    label: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold'        
    },
    input: {
        color: '#fff',
        width: '65%',
        height: 45,
        backgroundColor: '#191919',
        borderWidth: 6,
        borderColor: '#ccc',
        borderRadius: 50,
        paddingHorizontal: 10,
        marginBottom: 20,  
    },

    buttonStyle: {
        backgroundColor: 'black', 
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 25,        
    },

    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },

    textFooter:{ 
        alignSelf:'center',
        marginLeft: 200,
        fontSize: 14,
        fontWeight: 'bold'
    },

    textClick:{
        alignSelf:'center',
        marginLeft: 200,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ff0084'
    },

    personagemContainer:{
        width: '50%',
        height: '50%',
        bottom: -190
    },

    textStyle:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },

    bgTela:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
    },

    buttonVoltar:{
        marginBottom: -100
    },

    buttonImage:{
        width: 75,
        height: 80,
        resizeMode: 'contain',
        marginVertical:10
    },
    error: {
        color: 'red',
        marginBottom: 20,
    },


});