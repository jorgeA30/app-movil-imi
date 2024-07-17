import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  container: {
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
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15, 
    borderRadius: 50,
    marginBottom: 30, 
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10, 
    elevation: 10,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  input: {
    width: '130%',
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    marginVertical: 10,
    backgroundColor: '#dcdde1',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },
  button: {
    backgroundColor: '#008000',
    padding: 15,
    borderRadius: 20, 
    marginTop: 50, 
    width: width * 0.5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10, 
    elevation: 1,
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
