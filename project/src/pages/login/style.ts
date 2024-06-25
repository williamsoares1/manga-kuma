import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    inputContainer: {
        flex: 1,
        marginTop: '20%',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    label: {
        fontSize: 25,
        fontFamily: 'BebasNeue',
        textAlign: 'center',
    },
    input: {
        color: '#fff',
        width: '76%',
        height: 60,
        backgroundColor: '#191919',
        borderWidth: 6,
        borderColor: '#ccc',
        borderRadius: 50,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontStyle: 'italic',
    },

    buttonStyle: {
        backgroundColor: '#8B2252', 
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 25,
    },

    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'BebasNeue'
    },

    textFooter:{ 
        marginRight: '10%',
        fontSize: 14,
        fontFamily: 'BebasNeue'
    },
    textFooter2:{ 
        marginRight: '15%',
        fontSize: 14,
        fontFamily: 'BebasNeue'
    },


    textClick:{
        fontSize: 15,
        marginRight: '13%',
        fontFamily: 'BebasNeue',
        color: '#CD2990'
    },

    personagemContainer:{
        width: '50%',
        height: '50%',
        bottom: -190
    },

    textStyle:{
        alignItems: 'flex-end',
        marginBottom: 45
    },

    bgTela:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',
        alignSelf: 'flex-end'
    },

    error: {
        color: 'red',
        marginBottom: 20,
    },


});