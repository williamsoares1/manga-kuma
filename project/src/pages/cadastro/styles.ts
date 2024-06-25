import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    paddingHorizontal: 20,
    marginBottom: 1,

  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 20,
    fontFamily: 'BebasNeue',
    color: '#1C1C1C',

  },
  input: {
    textAlign: 'center',
    width: '100%',
    height: 56,
    paddingHorizontal: 80,
    backgroundColor: '#1C1C1C',
    borderRadius: 50,
    fontStyle: 'italic',
    fontSize: 10,
    color: "#fff"
  },
 inumaki: {
    width: '100%',
    height: '100%',
  },
  containerinumaki: {
    width: 500,
    height: 590,
    marginRight: '35%',

  },
  cadastrodoinumaki: {
    color: 'black',
    position: 'relative',
    top: '-83%',
    left: 110,
    textAlign: 'center',
    fontSize: 22,
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