//External imports
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import RNBluetoothClassic, { BTEvents } from 'react-native-bluetooth-classic';

//Icons load
Icon.loadFont();

//Internal components imports
import PageHeader from '../../components/PageHeader/index.js';

//Internal functions imports
import { bleConnect } from '../../utils/bluetoothConnect.js';
import bleInit from '../../utils/bluetoothInit.js';
import ttsSpeech from '../../utils/ttsSpeech.js';

//Styles imports
import styles from './styles.js'

export default function Running() {
    //States
    const [connectedDevice, setConnectedDevice] = useState('Não conectado');
    const [muteButtonText, setMuteButtonText] = useState('Mutar Voz');
    const [messages, setMessages] = useState([]);

    //Navigation Control
    const { navigate } = useNavigation();
    function hadleNavigateToConnectionPage() {
        navigate('Connection');
    }

    //Update connected device text
    async function updateConnectedDevice(setScreenFlag) {
        const defaultDeviceJSON = await AsyncStorage.getItem('defaultDevice');

        if (defaultDeviceJSON) {
            let defaultDevice = JSON.parse(defaultDeviceJSON);

            if (setScreenFlag) {
                setConnectedDevice(defaultDevice.name);
            }
            return defaultDevice;
        }
        else {
            setConnectedDevice('Não conectado');
            return false;
        }
    }

    //Connect to device in async storage
    async function connectToDefaultDevice() {
        let isConnected = await RNBluetoothClassic.isConnected();
        if (!isConnected) {
            let status = false;
            let defaultDevice = await updateConnectedDevice(false);

            if (defaultDevice !== false) {
                status = await bleConnect(defaultDevice);
                return status;
            }
        }
        return true;
    }

    //Verify ble state interval - run every 5000ms
    async function verifyBleState() {
        console.log('Run in interval');
        let isConnected = await RNBluetoothClassic.isConnected();
        if (!isConnected) {
            let isEnabled = await RNBluetoothClassic.isEnabled();

            if (!isEnabled) {
                setConnectedDevice('Bluetooth desligado');

                let enableStatus = bleInit();
                if (enableStatus === true) {
                    setConnectedDevice('Não conectado');
                }
            }
            else {
                let connectStatus = await connectToDefaultDevice();

                if (connectStatus === true) {
                    await updateConnectedDevice(true);
                }
                else {
                    setConnectedDevice('Não conectado');
                }
            }
        }
        else {
            await updateConnectedDevice(true);
        }
    }

    //On bluetooth read data
    function onRead(data) {
        console.log('speak');
        setMessages([...messages, data.data]);

        ttsSpeech(data.data);
    }

    //MuteButton
    async function changeMuteButtonState() {
        let muteState = await AsyncStorage.getItem('muteState');
        muteState = JSON.parse(muteState);

        if (muteState !== false) {
            AsyncStorage.setItem('muteState', JSON.stringify(false));
            setMuteButtonText('Mutar Voz');
        }
        else {
            AsyncStorage.setItem('muteState', JSON.stringify(true));
            setMuteButtonText('Desmutar Voz');
        }
    }
    async function updateMuteButtonState() {
        let muteState = await AsyncStorage.getItem('muteState');
        muteState = JSON.parse(muteState);

        if (muteState === false) {
            setMuteButtonText('Mutar Voz');
        }
        else if (muteState === true) {
            setMuteButtonText('Desmutar Voz');
        }
        else {
            await AsyncStorage.setItem('muteState', JSON.stringify(false));
            setMuteButtonText('Mutar Voz');
        }
    }

    //When pages load
    useEffect(() => {
        //Autoconnect running in interval
        let verifyState = setInterval(async () => {
            await verifyBleState();
        }, 5000);

        //Event run on bluetooth read data
        let readEvent = RNBluetoothClassic.addListener(
            BTEvents.READ,
            data => {
                onRead(data);
            }
        );

        //Verify async storage and update button
        updateMuteButtonState();

        //Run whe component umount
        return () => {
            readEvent.remove();
            clearInterval(verifyState);
        }
    }, [messages]);

    //When playes need repeat a message
    async function repeatMessage(message) {
        let muteState = await AsyncStorage.getItem('muteState');
        muteState = JSON.parse(muteState);
        if (muteState === false) {
            await ttsSpeech(message);
        }
    }

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
                    <Text style={styles.connectedDeviceText} >{' '}{connectedDevice}</Text>
                </Text>
            </View>

            <View style={styles.historyMessagesView} >
                <Text style={styles.genericText} > Histórico de Mensagens </Text>

                <ScrollView style={styles.historyMessagesScrollView} >
                    {
                        messages.map((message, index) => {
                            return (
                                <RectButton
                                    onPress={() => {
                                        repeatMessage(message);
                                    }}
                                    key={index}
                                    style={styles.message}
                                >
                                    <Text style={styles.messageText}>{message}</Text>
                                </RectButton>
                            );
                        })
                    }
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
