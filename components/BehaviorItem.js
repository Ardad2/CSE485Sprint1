import { StyleSheet, View, Text, Pressable } from 'react-native';

function BehaviorItem(props) {

    

    return (
        <View style={styles.behaviorItem}>
        <Pressable 
        android_ripple ={{color:'#210644'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
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