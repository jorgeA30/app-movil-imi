import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  container: {
    marginTop: -55,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding:40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5, 
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    alignItems: 'center',
    width: width * 0.8,
    borderWidth: 3,
    borderColor: '#87cefa',
  },

  icon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 100
  },
  input: {
    fontSize:18,
    width: '125%',
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    marginVertical: 10,
    backgroundColor: '#dcdde1',
    borderRadius: .5,
    shadowColor: '#000',

  },
  button: {
    marginTop: 20,
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  registerLink: {
    marginTop: 30,
    alignItems: 'center',
  },
  registerText: {
    color: '#0000FF',
    fontSize: 14, 
    textDecorationLine: 'underline',
  },
});
