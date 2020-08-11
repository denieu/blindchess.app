//External imports
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

//Styles imports
import styles from './styles.js'

export default function Home() {
    //Navigation Control
    const { navigate } = useNavigation();
    function hadleNavigateToConnectionPage(){
        navigate('Connection');
    }
    function hadleNavigateToRunningPage(){
        navigate('Running');
    }

    //JSX
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Home </Text>

            <RectButton
                onPress={hadleNavigateToRunningPage}
                style={styles.button}
            >
                <Text style={styles.buttonText}> Running </Text>
            </RectButton>

            <RectButton
                onPress={hadleNavigateToConnectionPage}
                style={styles.button}
            >
                <Text style={styles.buttonText}> Connection </Text>
            </RectButton>
        </View>
    );
};
