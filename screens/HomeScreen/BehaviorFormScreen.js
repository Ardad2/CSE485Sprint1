import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, dispatch } from 'react-redux';
import { addBehavior, removeBehavior } from '../../store/redux/behaviors';


export default function BehaviorFormScreen( {route, navigation} )
{

  const [ date, setDate ] = useState(null);

  useEffect( () => {
    let today = new Date();
    let date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    setDate(date);
  }, []);
        const behaviorList = useSelector((state) => state.behaviors.behaviors);

        const child = route.params.child;
        const text = route.params.text;
        const date = route.params.date;
        const icon = route.params.icon

    const [enteredBehaviorText, setEnteredBehaviorText] = useState('');

    function behaviorInputHandler(enteredText) {
        setEnteredBehaviorText(enteredText);
      };

      function addBehaviorHandler(enteredBehaviorText) {
        setCourseBehaviors(currentCourseBehaviors => [...currentCourseBehaviors, {text: enteredBehaviorText, id: Math.random().toString(), date: date, icon: "Hello"}       ]);
      endAddBehaviorHandler();
      }

      function addBehaviorHandler() {
        //  route.params.onAddBehavior(enteredBehaviorText);
         // setEnteredBehaviorText('');
         dispatch(addBehavior(
           {
             id: Math.random().toString(),
             text: enteredBehaviorText,
             date: date,
             icon: "Hello"
           }
         ))

      }

      function cancelBehaviorHandler() {
        navigation.goBack();
      }

    return (
        <View style ={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder="What did you do today?"
        
        //Note if it was goalInputHandler() it would get executed as soon as React starts.

         onChangeText={behaviorInputHandler}
         value={enteredBehaviorText}
         />
         <View style={styles.buttonContainer}>
             <View style={styles.button} >
                <Button title="Submit" onPress={addBehaviorHandler} color="black"/>
            </View>

        </View>
      </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      backgroundColor: '#e4d0ff',
      color: '#120438',
      borderRadius: 6,
      width: '100%',
      padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
  });
  