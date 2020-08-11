import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '7%',
        marginTop: StatusBar.currentHeight,

        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#000',
    },

    headerButton: {
        width: '10%',
        height: '100%',
        marginLeft: 5,
        
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoView: {
        width: '80%',
        height: '100%',
        
        marginLeft: -5,

        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        height: '100%',
        resizeMode: 'contain',
    }
});

export default styles;