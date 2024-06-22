import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
  },
  fundo: {
    flex: 1,
    marginTop: 10,
    resizeMode: 'cover', 
    width: '100%', 
    height: '100%', 
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 15,
    width: '80%',
    marginBottom: 1,
    
  },
  inputLabel: {
    color: 'black',
    marginBottom: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    textAlign: 'center',
    width: '100%',
    height: 56,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    color: '#FFFFFF',
    borderRadius: 50,
  },
 inumaki: {
    width: '100%',
    height: '100%',
    marginLeft: -89, 
    marginTop: -26
  },
  containerinumaki: {
    width: 390,
    height: 490,
  },
  cadastrodoinumaki: {
    marginTop: -405,
    marginLeft: 138,
    fontSize: 21,
    fontWeight: 'bold'
  },
  error: {
    color: '#ff8fd4',
    fontSize: 13,
    fontWeight: 'bold',
  },
  
});