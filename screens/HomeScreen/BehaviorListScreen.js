import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal, Image, SectionList, StatusBar} from 'react-native'
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
             

        <SectionList sections={data} renderItem = { ({item}) => <Text style={styles.item_style}> {item}</Text>}
        renderSectionHeader={({section})  => <Text style={styles.section_style}> {section.title} </Text>} 
        keyExtractor={(item, index) => index} />

        </View>
            )
};

const styles = StyleSheet.create({
  container_style: {
    flex: 1,
  },
  item_style: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },header: {
    //textAlign: 'center',
    backgroundColor: 'white',
    padding: 20,
    fontSize: 20,
   
  },
  section_style: {
    //textAlign: 'center',
    backgroundColor: 'white',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
  