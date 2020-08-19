//External imports
import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

//Icons load
Icon.loadFont();

//Internal functions imports
import bleInit from '../../utils/bluetoothInit.js';
import ttsInit from '../../utils/ttsInit.js';

//Styles imports
import styles from './styles.js'

//Assets imports
import logo from '../../assets/images/logo.png'
import pieces from '../../assets/images/pieces.png'

export default function Home() {
    //Navigation Control
    const { navigate } = useNavigation();
    function hadleNavigateToRunningPage() {
        navigate('Running');
    }
    function hadleNavigateToConnectionPage() {
        navigate('Connection');
    }
    function hadleNavigateToSettingsPage() {
        navigate('SettingsPage');
    }

    //When pages load
    useEffect(() => {
        bleInit();
        ttsInit();
    }, []);

    //JSX
    return (
        <>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />

                <View style={styles.buttonView}>
                    <RectButton
                        onPress={hadleNavigateToRunningPage}
                        style={styles.button}
                    >
                        <Icon name="play" size={30} color="#000" />
                        <Text style={styles.buttonText}>Iniciar</Text>
                    </RectButton>
                </View>

                <View style={styles.buttonView}>
                    <RectButton
                        onPress={hadleNavigateToConnectionPage}
                        style={styles.button}
                    >
                        <Icon name="bluetooth" size={30} color="#000" />
                        <Text style={styles.buttonText}>Conectar</Text>
                    </RectButton>
                </View>

                <View style={styles.buttonView}>
                    <RectButton
                        onPress={hadleNavigateToSettingsPage}
                        style={styles.button}
                    >
                        <Icon name="settings" size={30} color="#000" />
                        <Text style={styles.buttonText}>Configurações</Text>
                    </RectButton>
                </View>
            </View>

            <Image source={pieces} style={styles.pieces} />
        </>
    );
};
