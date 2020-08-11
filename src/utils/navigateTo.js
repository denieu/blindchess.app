import { useNavigation } from '@react-navigation/native';

export default function navigateTo(Route){
    const { goBack, navigate } = useNavigation();

    if(Route === 'goBack'){
        goBack();
    }
    else if(Route !== undefined){
        navigate(Route);
    }
}