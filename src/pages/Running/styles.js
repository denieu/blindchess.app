import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  connectedDeviceView: {
    width: '100%',
    height: '7%',

    alignItems: 'center',
    justifyContent: 'center',

    borderBottomWidth: 2,
    borderBottomColor: '#000',
    borderStyle: 'solid',
  },

  genericText: {
    fontSize: 18,
    color: '#000',
  },

  connectedDeviceText: {
    fontWeight: '700',
  },

  historyMessagesView: {
    width: '100%',

    paddingTop: 17,

    alignItems: 'center',
    justifyContent: 'center',
  },

  historyMessagesScrollView: {
    width: '90%',
    height: '60%',

    marginTop: 17,

    borderWidth: 2,
    borderColor: '#000',
    borderStyle: 'solid',
  },

  message: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageText: {
    height: '100%',
    textAlignVertical: 'center',
    paddingTop: 15,
    fontSize: 18,
  },

  muteButtonView: {
    width: '65%',
    height: 65,

    marginTop: '8%',
    marginLeft: '17.5%',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: '8.6%',

    borderWidth: 2,
    borderColor: '#000',
    borderStyle: 'solid',
    borderRadius: 8,
  },

  muteButton: {
    width: '100%',
    height: 61,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFF',

    borderRadius: 5,
  },

  muteButtonText: {
    fontSize: 24,
    color: '#000',
  }
});

export default styles;