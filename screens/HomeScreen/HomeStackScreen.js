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

import HomeScreen from './HomeScreen';
import BehaviorDetailScreen from './BehaviorDetailScreen';


const HomeStack = createStackNavigator();
function HomeStackScreen() {
 return (
   <HomeStack.Navigator initialRouteName="Home">

    <HomeStack.Screen name="Home" component={HomeScreen} />
     <HomeStack.Screen name="Behavior Detail Screen" component={DetailsScreen} />
   </HomeStack.Navigator>
  );
}
