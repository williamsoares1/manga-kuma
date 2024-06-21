import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
        justifyContent: 'center',
        alignItems: 'center'
    },

    header:{
        height: 90,
        backgroundColor: '#191919',
        alignItems: 'center',
        justifyContent: 'center',

    },

    headerText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

    // content: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },

    logoHeader:{
        width: 250,
        height: 100,
        marginTop: 30,
    }, 

    line:{
        backgroundColor: '#000',
        height:10
    },

    imageUser:{
        width: 200,
        height: 200,
    },

    textUser:{
        textAlign:'center',
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 10
    },

    label:{
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
    },

    input:{
        color: 'gray',
        textAlign: 'center',
        height: 50,
        width: '75%',
        borderEndColor: 'black',
        borderColor: 'gray',
        paddingHorizontal: 80,
        backgroundColor: 'white',
        borderRadius: 50,
    },

    textBox:{
        height: 200,
        width: '80%',
        borderColor: 'white',
        borderWidth: 3,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#191919',
        borderRadius: 30,
        marginLeft: 45,

    },

    textDescricao:{
        color:'#FFF',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
        borderBlockColor:'#white',
        marginTop:15,
        
    },





});