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

    ttsSpeech('Conectado com sucesso');
    return true;
  } catch (error) {
    ttsSpeech('Erro ao conectar');
    return false;
  }
}