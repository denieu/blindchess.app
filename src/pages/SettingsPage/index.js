//External imports
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

//Styles imports
import styles from './styles.js'

export default function SettingsPage() {
    //Navigation Control
    const { goBack } = useNavigation();
    function hadleNavigateGoBack() {
        goBack();
    }

    //Navigation Control
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Settings </Text>
            <RectButton
                onPress={hadleNavigateGoBack}
                style={styles.button}
            >
               <Text style={styles.buttonText}> GoBack </Text>
            </RectButton>
        </View>
    );
};
