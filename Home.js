import {useState} from 'react';

import { 
  StyleSheet,  
  View, 
  FlatList, Button, Text
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BehaviorItem from './components/BehaviorItem';
import BehaviorInput from './components/BehaviorInput';
import IconButton from './components/IconButton';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseBehaviors, setCourseBehaviors] = useState([]);

  function startAddBehaviorHandler() {
    setModalIsVisible(true);
  }

  function endAddBehaviorHandler() {
    setModalIsVisible(false);
  }
  
  function addBehaviorHandler(enteredBehaviorText) {
    setCourseBehaviors(currentCourseBehaviors => [...currentCourseBehaviors, {text: enteredBehaviorText, id: Math.random().toString() }       ]);
  endAddBehaviorHandler();
  }

  function deleteBehaviorHandler(id) {
    setCourseBehaviors( (currentCourseBehaviors) => {
      return currentCourseBehaviors.filter((behavior) => behavior.id != id);
    } );
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
    <BehaviorInput
     visible={modalIsVisible} 
     onAddBehavior={addBehaviorHandler} 
     onCancel={endAddBehaviorHandler}
     />
     <View> 
       <Text style={styles.headingText}>Welcome back John! What did you do today?</Text>
     </View>

     <View style={styles.plusButton}>  
    <IconButton icon="add-circle-outline" color="black" onPress={startAddBehaviorHandler} />
    </View>  
    
      <View style={styles.behaviorsContainer}>
        <FlatList data={courseBehaviors} renderItem = {itemData => {
          return <BehaviorItem 
          text={itemData.item.text} 
          id = {itemData.item.id}
          onDeleteItem={deleteBehaviorHandler}
          />

        }}
        keyExtractor={(item,index) => {return item.id}} 
        alwaysBounceVertical={true}
        /> 
        </View>
      </View>
        </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#FAFAFA'
    //You can add a "backgroundColor" in app.json.
  },
  behaviorsContainer: {
    flex: 5
  },
  headingText: {
    fontSize: 20,
    color: 'black'
  },
  plusButton: {
    alignItems: 'center'
  }
});
