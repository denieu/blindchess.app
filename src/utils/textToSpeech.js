import Tts from 'react-native-tts';

export default function textToSpeech(textToSpeech){
    Tts.getInitStatus().then(() => {
        Tts.speak(textToSpeech);
    });
}