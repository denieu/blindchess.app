import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '90%',
    marginTop: '8%',
    marginBottom: '17%',
  },

  buttonView: {
    width: '65%',
    height: 65,

    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: 10,

    borderWidth: 2,
    borderColor: '#000',
    borderStyle: 'solid',
    borderRadius: 8,
  },

  button: {
      width: '100%',
      height: 60,

      flexDirection: 'row',
      alignItems: 'center',

      backgroundColor: '#FFF',
      padding: 15,

      borderRadius: 7,
  },

  buttonText: {
    paddingLeft: 15,
    fontSize: 24,
    color: '#000',
  },

  pieces: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',

    position: 'absolute',
    marginTop: '188%',
  }
});

export default styles;