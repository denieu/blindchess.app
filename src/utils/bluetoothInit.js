import RNBluetoothClassic from 'react-native-bluetooth-classic';

import textToSpeech from './textToSpeech.js';

export default async function bleInit() {
    let enabled = await RNBluetoothClassic.isEnabled();
    if (!enabled) {
        textToSpeech('Por favor aceite a permissão para ligar o bluetooth')
        RNBluetoothClassic.requestEnable().then(() => {
            textToSpeech('Bluetooth ligado com sucesso');
        }).catch(() => {
            textToSpeech('Erro ao ligar o bluetooth');
        });
    }

    return;
}