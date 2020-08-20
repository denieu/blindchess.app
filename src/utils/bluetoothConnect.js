import RNBluetoothClassic from 'react-native-bluetooth-classic';
import AsyncStorage from '@react-native-community/async-storage';

import ttsSpeech from './ttsSpeech.js';
import bleInit from './bluetoothInit.js';

export async function bleConnect(device) {
  bleInit();

  let isConnected = RNBluetoothClassic.isConnected();
  if (isConnected) {
    await RNBluetoothClassic.disconnect();
  }

  let status = false;
  try {
    status = await RNBluetoothClassic.connect(device.id);

    await AsyncStorage.setItem('defaultDevice', JSON.stringify(device));

    ttsSpeech('Successfully connected');
    return true;
  } catch (error) {
    ttsSpeech('Error on connect');
    return false;
  }
}