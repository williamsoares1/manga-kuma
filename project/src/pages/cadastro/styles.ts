import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  fundo: {
    flex: 1,
    resizeMode: 'cover', 
    position: 'absolute', 
    minWidth: '100%', 
    minHeight: '100%', 
  },
  inputContainer: {
    alignItems: 'center',
    width: '80%',
    marginBottom: 5,
    
  },
  inputLabel: {
    color: 'black',
    marginBottom: 8,
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
    fontWeight: 'bold',
    borderWidth: 6,
    borderColor: '#ccc',
  },
  inumaki: {
    width: '100%',
    height: '100%',
    marginLeft: -76,
    // marginTop: -35
  },
  containerinumaki: {
    width: 330,
    height: 430,
  },
  cadastrodoinumaki: {
    marginTop: -355,
    marginLeft: 110,
    fontSize: 21,
    fontWeight: 'bold'
  },
  error: {
    color: 'red',
    marginBottom: 20,
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
  
});
