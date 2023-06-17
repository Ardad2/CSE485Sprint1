import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function BehaviorItem(props) {

    const navigation = useNavigation();

    function pressHandler() {
      console.log("Hello");
    }
    

    return (
        <View style={styles.behaviorItem}>
        <Pressable 
        android_ripple ={{color:'#210644'}}
        onPress={props.onPress}
        style={({pressed}) => pressed && styles.pressedItem}
        > 
        <Text style={styles.behaviorText}>{props.text}</Text>
        </Pressable>
        </View>
    );
}

export default BehaviorItem;

const styles = StyleSheet.create({
  behaviorItem: {
    margin: 8,
    backgroundColor: 'white',
    color: 'black',
    height: 60,
  },
  pressedItem: {
    opacity: 0.5
  },
  behaivorText: {
    color: 'black',
    padding: 20,
  }
});