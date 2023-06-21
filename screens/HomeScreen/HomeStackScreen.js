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
import BehaviorFormScreen from './BehaviorFormScreen';

import HomeScreen from './HomeScreen';


const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
 return (
   <HomeStack.Navigator initialRouteName="Home" options={{headerShown: false}}>

    <HomeStack.Screen name="Home" component={HomeScreen} options={{ }} />
     <HomeStack.Screen name="BehaviorDetailScreen" component={BehaviorDetailScreen} options={{  }} />
     <HomeStack.Screen name="BehaviorFormScreen" component={BehaviorFormScreen} />
   </HomeStack.Navigator>
  );
  
}

