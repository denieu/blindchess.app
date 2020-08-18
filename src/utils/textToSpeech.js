import Tts from 'react-native-tts';

export default async function textToSpeech(textToSpeech){
    await Tts.getInitStatus().then(async () => {
        await Tts.speak(textToSpeech);
    });
}