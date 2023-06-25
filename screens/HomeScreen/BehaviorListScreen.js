import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal, Image, SectionList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { addBehavior, removeBehavior } from '../../store/redux/behaviors';

const data = [
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
      <View style={styles.container_style} > 
        <Text style={styles.header} > Section List Exmaple </Text>
        <SectionList sections={data} renderItem = { ({item}) => <Text> {item}</Text>}
        renderSectionHeader={({section})  => <Text> {section.title} </Text>} 
        keyExtractor={(item, index) => index} />

        </View>
    )
};

const styles = StyleSheet.create({
  container_style: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item_style: {
    backgroundColor: '#B591FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },header: {
    textAlign: 'center',
    backgroundColor: '#B2C2D2',
    padding: 20,
    fontSize: 20,
   
  }
});

  