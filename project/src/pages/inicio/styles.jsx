import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 300,
    alignItems: 'center',
  },
  fundo: {
    width: '100%',
    height: '100%'
  },
  textoinicio: {
    color: 'white',
    fontSize: 11, 
    textAlign: 'center',
    fontStyle: 'italic',

  },
  textoinicio2: {
    color: 'white',
    fontSize: 11, 
    textAlign: 'center',
    marginBottom: 140,
    fontStyle: 'italic',
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 110,
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  buttonPressed: {
    backgroundColor: 'rgba(255, 102, 196, 3.0)',
  },
  botaologin: {
    textAlign: 'center',
    fontFamily: 'BebasNeue',
    color: '#fff',
    fontSize: 25,
  },
  containercadastro: {
    marginTop: '10%',
  },
  cadastroTexto: {
    marginTop: 65,
    textAlign: 'center',
    color: '#DCDCDC',
    paddingRight: 5,
    fontSize: 15,
    fontFamily: 'PlayfairDisplay',
  },
  cadastroTexto2: {
    textAlign: 'center',
    color: '#DCDCDC',
    paddingRight: 5,
    fontSize: 15,
    fontFamily: 'BebasNeue',
  },
  cliqueaqui: {
    textAlign: 'center',
    color: '#ff66c4',
    fontSize: 15,
    fontFamily: 'BebasNeue',
  },
});