import * as React from 'react';
import { SectionList,StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import {AsyncStorage} from 'react-native';
import decks from './flashcards';

  const numColumns = 1;

  const formatData = (decks, numColumns) => {
    
  const numberOfFullRows = Math.floor(decks.length/ numColumns);

  var numberOfElementsLastRow = decks.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    decks.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return decks;
};

  class DeckList extends React.Component {


   state = {
			show: true,
		};
   
    delete = ({ item, index }) => {
      this.setState({show: false})
    }

    renderItem = ({ item, index }) => {
   
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <ScrollView style={styles.item}>

               <Text style={styles.itemText}>{item.name}</Text>
      <View style={styles.fixToText}>
     
        <TouchableOpacity style={styles.screenButton} onPress={()=> this.props.navigation.navigate('Deck', {deck: item.cards, name: item.name, num: index})}>
                <Text style={styles.text}>START</Text> 
        </TouchableOpacity> 
        
        </View>
      </ScrollView>
    );
  };

  render() {
        
    return (

      <FlatList
        data={formatData(decks, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />  
    );
 } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
     backgroundColor: '#faebd7',
  },
  fixToText: {
     margin:1 ,
     textAlign:'center',
  },

  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, 
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    fontSize: 26
  },
  screenButton:{
    
    marginRight:5,
    marginLeft:5,
    marginTop:5,
    paddingTop:5,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  text:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
});

export default DeckList
