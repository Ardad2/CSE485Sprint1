import {View, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';


function BehaviorDetailScreen( {route, navigation} )
{
    const child = route.params.child;

    return (
        <View> 
        <Text>{child}</Text>
        </View>
    )
}

export default BehaviorDetailScreen;