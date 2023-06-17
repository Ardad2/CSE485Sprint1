import {View, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function BehaviorFormScreen( {route, navigation} )
{
    const child = route.params.child;

    return (
        <View> 
        <Text>{child}</Text>
        </View>
    )
}

