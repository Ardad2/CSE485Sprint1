import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal, Image, SectionList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { addBehavior, removeBehavior } from '../../store/redux/behaviors';

const Data = [
  {
    title: "Keep",
    data: ["CESAR", "Journal", "Learn Something New", "Personal Fitness", "Warm Fuzzy (K)", "Learning", "Value Added Meeting", "Client Touch"]
  },
  {
    title: "Attain",
    data: ["Real Discussion", "Social Post/Article", "Networking Events", "Real Meeting", "Public/Online Talk", "Introduction Meeting", "Real Presentation/Quote", "Refferal Asks", "Social Media Messages", "LinkedIn Connections", "Prospecting Videos", "Cold Dialing", "Coaching", "Training", "Supervising", "Mentoring"]
  },
  {
    title: "Recapture",
    data: ["Real Discussion", "Appreciation Event", "Warm Fuzzy", "Survey"]
  },
  {
    title: "Expand",
    data: ["Up Sell Meeting", "Real Presentation/Quote", "New Product Introduction"]
  },
]



export default function BehaviorListScreen( {route, navigation} )
{
    return (
      <View> 
        <Text> Section List Exmaple </Text>
        <SectionList sections={data} renderItem = { ({item}) => <Text> {item}</Text>}
        renderSectionHeader={({section})  => <Text> {section.title} </Text>} 
        keyExtractor={(item, index) => index} />

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
  