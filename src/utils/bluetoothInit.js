import RNBluetoothClassic, { BTCharsets } from 'react-native-bluetooth-classic';

import textToSpeech from './ttsSpeech.js';

export default async function bleInit() {
    let enabled = await RNBluetoothClassic.isEnabled();
    if (!enabled) {
        textToSpeech('Please accept permission to turn on bluetooth')
        RNBluetoothClassic.requestEnable().then(() => {
            textToSpeech('Bluetooth successfully turned on');
            return true;
        }).catch(() => {
            textToSpeech('Bluetooth turn on error');
            return false;
        });
    }
    
    RNBluetoothClassic.setEncoding(BTCharsets.UTF8);
    return true; 
}