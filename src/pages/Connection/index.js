import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles.js'

export default function Home() {
    const { goBack } = useNavigation();

    function hadleNavigateGoBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Connection </Text>
            <RectButton
                onPress={hadleNavigateGoBack}
                style={styles.button}
            >
               <Text style={styles.buttonText}> GoBack </Text>
            </RectButton>
        </View>
    );
};
