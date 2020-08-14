//External imports
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

//Internal components imports
import PageHeader from '../../components/PageHeader/index.js';

//Styles imports
import styles from './styles.js'

export default function SettingsPage() {

    //Navigation Control
    return (
        <View style={styles.container}>
            <PageHeader />
        </View>
    );
};
