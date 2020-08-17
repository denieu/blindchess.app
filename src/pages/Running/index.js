//External imports
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Feather';
import RNBluetoothClassic, { BTEvents } from 'react-native-bluetooth-classic';

//Icons load
Icon.loadFont();

//Internal components imports
import PageHeader from '../../components/PageHeader/index.js';

//Internal functions imports
import { bleConnect } from '../../utils/bluetoothConnect.js';
import textToSpeech from '../../utils/textToSpeech.js';

//Styles imports
import styles from './styles.js'

export default function Running() {
    //States
    const [connectedDevice, setConnectedDevice] = useState('Não conectado');
    const [muteButtonText, setMuteButtonText] = useState('Mutar Voz');
    const [muteState, setMuteState] = useState(false);

    //Navigation Control
    const { navigate } = useNavigation();
    function hadleNavigateToConnectionPage() {
        navigate('Connection');
    }

    //MuteButton
    function changeMuteButtonState() {
        if (muteState === false) {
            setMuteState(true);
            setMuteButtonText('Desmutar Voz');
        }
        else if (muteState === true) {
            setMuteState(false);
            setMuteButtonText('Mutar Voz');
        }
    }

    //Update connected device text
    async function updateDefaultDevice() {
        const defaultDeviceJSON = await AsyncStorage.getItem('defaultDevice');

        if (defaultDeviceJSON) {
            let defaultDevice = JSON.parse(defaultDeviceJSON);

            setConnectedDevice(defaultDevice.name);
            return defaultDevice;
        }
        else {
            setConnectedDevice('Não conectado');
        }
    }

    //Connect to device in async storage
    async function connectToDefaultDevice() {
        let isConnected = await RNBluetoothClassic.isConnected();
        if (!isConnected) {
            let defaultDevice = updateDefaultDevice();

            let status = await bleConnect(defaultDevice);
            if (status === true) {
                textToSpeech('Tudo certo, o jogo ja pode começar');
            }
            else {
                textToSpeech('Não foi possivel se conectar automaticamente a nenhum dispositivo');
                hadleNavigateToConnectionPage();
            }
        }
        else {
            textToSpeech('Tudo certo, o jogo ja pode começar');
        }
    }

    //On bluetooth read data
    function onRead(data) {
        console.log('On read data: ');
        console.log(data);
    }

    //When pages load
    useEffect(() => {
        updateDefaultDevice();
        connectToDefaultDevice();
        RNBluetoothClassic.addListener(
            BTEvents.READ,
            onRead(),
            null,
        );
    }, []);



    //JSX
    return (
        <View style={styles.container}>
            <PageHeader>
                <RectButton
                    onPress={hadleNavigateToConnectionPage}
                    style={styles.headerButton}
                >
                    <Icon name="bluetooth" size={30} color="#FFF" />
                </RectButton>
            </PageHeader>

            <View style={styles.connectedDeviceView} >
                <Text style={styles.genericText} >
                    Dispositivo Conectado:
                    <Text style={styles.connectedDeviceText} >{' ' + connectedDevice}</Text>
                </Text>
            </View>

            <View style={styles.historyMessagesView} >
                <Text style={styles.genericText} > Histórico de Mensagens </Text>

                <ScrollView style={styles.historyMessagesScrollView} >

                </ScrollView>
            </View>

            <View style={styles.muteButtonView}>
                <RectButton
                    onPress={changeMuteButtonState}
                    style={styles.muteButton}
                >
                    <Text style={styles.muteButtonText} > {muteButtonText} </Text>
                </RectButton>
            </View>
        </View>
    );
};
