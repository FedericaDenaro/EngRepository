import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, FlatList } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import{FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import DeckList from './DeckList';
import AddDeck from './AddDeck';
import AddCard from './AddCard';
import Deck from './Deck';
import DeckView from './DeckView';
import Rename from './Rename';
import Intro from './Intro';
import Constants from 'expo-constants';


const AppStackNavigator = TabNavigator({

DeckList:{
   screen: DeckList,
   backgroundColor: '#faebd7',
   navigationOptions: {
   title: 'Deck List',
   marginLeft: 40,
   headerLeft: null,
   gesturesEnabled: false,
     tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name= 'cards' size={30} color={tintColor}/>
   }
},
AddDeck:{
   screen: AddDeck,
   backgroundColor: '#faebd7',
   navigationOptions: {
   title: 'AddDeck',
   marginLeft: 40,
   headerLeft: null,
   gesturesEnabled: false,
   tabBarIcon: ({tintColor}) => <FontAwesome name= 'plus-square' size={30} color={tintColor}/>
}}

})
const MainNavigator= StackNavigator({
  
  Intro:{
    screen: Intro,
  },
  Main:{
    screen: AppStackNavigator
  },
  DeckView:{
   screen: DeckView,
   navigationOptions:  {
   marginLeft: 40,
   headerLeft: null,
   gesturesEnabled: false,
}
  },
  Deck:{
   screen: Deck, 
   navigationOptions:  {
   title: 'Deck',
   marginLeft: 40,
   headerLeft: null,
   gesturesEnabled: false,
}
  },Rename:{
   screen: Rename

  }, AddCard:{
   screen: AddCard, 
}
})
export default class App extends React.Component {
 
  state = {
    view: 'home',
    currentDeck: -1,
    tempDeckName: '',
    tempFront: '',
    tempBack: '',
    right: [],
    wrong: [],
    time: 0,
  };

   render() {
    return (
     <View style={styles.container}>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  }
});
