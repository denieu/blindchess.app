import Tts from 'react-native-tts';

export default async function ttsInit() {
    //Init
    await Tts.getInitStatus().then(() => {

    }, (err) => {
        if (err.code === 'no_engine') {
            Tts.requestInstallEngine();
        }
    });

    //BCP-47 language code (e.g. 'en-US')
    await Tts.setDefaultLanguage('pt-BR'); 

    //Speed - 0.01 ~ 0.99
    Tts.setDefaultRate(0.99); 

    //Event stop speak
    Tts.addEventListener('tts-finish', () => {
        Tts.stop();
    });
}