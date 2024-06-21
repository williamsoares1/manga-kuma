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
    fontWeight: 'bold',
  },
  textoinicio2: {
    color: 'white',
    fontSize: 11, 
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 140
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 11,
    paddingHorizontal: 110,
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  buttonPressed: {
    backgroundColor: 'rgba(255, 102, 196, 3.0)',
  },
  botaologin: {
    textAlign: 'center',
    fontWeight: 'bold',

    color: '#fff',
    fontSize: 18,
  },
  containercadastro: {
    marginTop: '3%',
  },
  cadastroTexto: {
    marginTop: 65,
    textAlign: 'center',
    color: '#DCDCDC',
    paddingRight: 5,
    fontSize: 13,
    fontWeight: 'bold',
  },
  cadastroTexto2: {
    textAlign: 'center',
    color: '#DCDCDC',
    paddingRight: 5,
    fontSize: 13,
    fontWeight: 'bold',
  },
  cliqueaqui: {
    textAlign: 'center',
    color: '#ff66c4',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
