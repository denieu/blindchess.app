import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  title: {
    width: '100%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',

    borderBottomWidth: 2,
    borderBottomColor: '#000',
    borderStyle: 'solid',
  },

  titleText: {
    fontSize: 20,
  },

  devices: {
    width: '100%',
    height: '68%',
  },

  listTitles: {
    width: '80%',
    height: 65,

    marginLeft: '10%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  deviceScrollView: {
    flex: 1,
  },

  device: {
    width: '90%',
    height: 65,

    marginLeft: '5%',
    paddingHorizontal: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },

  listText: {
    fontSize: 20,
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