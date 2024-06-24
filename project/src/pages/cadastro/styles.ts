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
    marginBottom: 0,
    fontSize: 20,
    fontFamily: 'BebasNeue',
    color: '#1C1C1C',

  },
  input: {
    textAlign: 'center',
    width: '100%',
    height: 56,
    paddingHorizontal: 10,
    backgroundColor: '#1C1C1C',
    borderRadius: 50,
    fontStyle: 'italic',
    fontSize: 10,
  },
 inumaki: {
    width: '100%',
    height: '100%',
  },
  containerinumaki: {
    width: 300,
    height: 390,
    marginRight: '40%',

  },
  cadastrodoinumaki: {
    color: 'black',
    marginTop: -330,
    marginLeft: '56%',
    fontSize: 20,
    fontFamily: 'Knewave',

  },
  error: {
    color: '#ff8fd4',
    textShadowColor: '#CD2990',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

});