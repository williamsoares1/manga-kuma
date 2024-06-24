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
    fontFamily: 'Knewave',
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
    width: 390,
    height: 490,
    marginRight: '40%',
    marginTop: '1%'
  },
  cadastrodoinumaki: {
    color: '#ff8fd4',
    textShadowColor: '#8B2252',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginTop: -409,
    marginLeft: '56%',
    fontSize: 36,
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