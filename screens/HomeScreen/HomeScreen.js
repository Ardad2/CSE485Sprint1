import {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { 
  StyleSheet,  
  View, 
  FlatList, Button, Text
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BehaviorItem from '../../components/BehaviorItem';
import BehaviorInput from '../../components/BehaviorInput';
import IconButton from '../../components/IconButton';

import BehaviorDetailScreen from './BehaviorDetailScreen';

const HomeStack = createStackNavigator();

export default function Home() {

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
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component = "HomeScreen"/>
    </HomeStack.Navigator>
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
