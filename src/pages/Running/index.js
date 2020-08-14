//External imports
import React, { useState  } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

//Icons load
Icon.loadFont();

//Internal components imports
import PageHeader from '../../components/PageHeader/index.js';

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
