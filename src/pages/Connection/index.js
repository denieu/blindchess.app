//External imports
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//Bluetooth configs
import RNBluetoothClassic from 'react-native-bluetooth-classic';

//Internal components imports
import PageHeader from '../../components/PageHeader/index.js';

//Internal functions imports
import bleInit from '../../utils/bluetoothInit.js';
import { bleConnect } from '../../utils/bluetoothConnect.js';

//Styles imports
import styles from './styles.js'

//Assets imports
import pieces from '../../assets/images/pieces.png'

export default function Connection() {
    //Navigation Control
    const { navigate } = useNavigation();
    function hadleNavigateToRunningPage() {
        navigate('Running');
    }

    //Bluetooth control
    const [bleDevices, setBleDevices] = useState([]);
    async function discoverDevices() {
        try {
            let devices = await RNBluetoothClassic.list();
            setBleDevices(devices);
        } catch (err) {
            console.log(err);
        }
    }

    //When pages load
    useEffect(() => {
        bleInit();
        discoverDevices();
    }, []);

    //JSX
    return (
        <View style={styles.container}>
            <PageHeader />

            <View style={styles.title}>
                <Text style={styles.titleText}>Toque em um dispositivo para conectar</Text>
            </View>


            <View style={styles.devices}>
                <View style={styles.listTitles}>
                    <Text style={styles.text}>Nome</Text>
                    <Text style={styles.text}>MAC</Text>
                </View>

                <ScrollView style={styles.deviceScrollView}>
                    {
                        bleDevices.map((bleDevice) => {
                            return (
                                <RectButton 
                                    key={bleDevice.address}
                                    onPress={async () => {
                                        let status = await bleConnect(bleDevice);
                                        if(status === true) {
                                            hadleNavigateToRunningPage();
                                        }
                                    }}
                                    style={styles.device}
                                >
                                    <Text style={styles.listText}>{bleDevice.name}</Text>
                                    <Text style={styles.listText}>{bleDevice.address}</Text>
                                </RectButton>
                            );
                        })
                    }
                </ScrollView>
            </View>

            <Image source={pieces} style={styles.pieces} />
        </View>
    );
};
