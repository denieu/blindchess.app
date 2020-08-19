import Tts from 'react-native-tts';
import AsyncStorage from '@react-native-community/async-storage';

export default async function ttsSpeech(textToSpeech) {
    let muteState = await AsyncStorage.getItem('muteState');
    muteState = JSON.parse(muteState);
    if (muteState === false) {
        await Tts.speak(textToSpeech);
    }
}