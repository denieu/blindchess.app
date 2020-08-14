//External imports
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

//Internal components imports
import PageHeader from '../../components/PageHeader/index.js';

//Styles imports
import styles from './styles.js'

export default function Connection() {
    //const [bluetoothInit, setBluetoothInit] = useState(false);

    //When pages load
    useEffect(() => {
        
    }, []);

    //JSX
    return (
        <View style={styles.container}>
            <PageHeader />
        </View>
    );
};
