import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257E5'
  },

  banner: {
    width:'100%',
    resizeMode: 'contain',
    marginTop: 30, //originalmente: não possui marginTop
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color:'#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 40, //originalmente: 80
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20, //originalmente: 40
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#9871f5'
  },

  buttonSecondary: {
    backgroundColor: '#04d361'
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: "#D4C2FF",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: '100%', //originalmente: 140
    marginTop: 20, //originalmente: 40
  },
});

export default styles;