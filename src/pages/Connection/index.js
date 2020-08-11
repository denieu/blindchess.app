//External imports
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

//Internal components imports
import PageHeader from '../../components/PageHeader/index.js';

//Styles imports
import styles from './styles.js'

export default function Connection() {
    //JSX
    return (
        <View style={styles.container}>            
            <PageHeader />            
        </View>
    );
};
