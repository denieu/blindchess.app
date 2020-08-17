import RNBluetoothClassic from 'react-native-bluetooth-classic';
import AsyncStorage from '@react-native-community/async-storage';

import textToSpeech from './textToSpeech.js';
import bleInit from './bluetoothInit.js';

export async function bleConnect(device) {
  bleInit();

  let isConnected = RNBluetoothClassic.isConnected();
  if (isConnected) {
    await RNBluetoothClassic.disconnect();
  }

  try {
    textToSpeech('Realizando conexão');
    await RNBluetoothClassic.connect(device.id);

    await AsyncStorage.setItem('defaultDevice', JSON.stringify(device));

    textToSpeech('Conectado com sucesso');
    return true;
  } catch (error) {
    textToSpeech('Erro ao conectar');
    return false;
  }
}