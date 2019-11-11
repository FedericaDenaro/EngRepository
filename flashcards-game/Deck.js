import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,TouchableOpacity
} from 'react-native'
import decks from './flashcards';


class Deck extends Component {

    render() {
        const navigation = this.props.navigation
        const deck = navigation.getParam('deck')
         const num = navigation.getParam('num')  
        const name = navigation.getParam('name')

        return (
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    {name}
                </Text>
                
             <TouchableHighlight
                    style={styles.screenButton}
                    onPress={() => this.props.navigation.navigate('DeckView', {deck: deck})}
                >
                    <Text style={styles.buttonText}>
                        Start Quiz
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.screenButton}
                    onPress={() => navigation.navigate('Rename', {deck: deck, name: name, num: num })}>
                    <Text style={styles.buttonText}>
                        Rename Deck
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.screenButton}
                    onPress={() => navigation.navigate('AddCard', {deck: deck, name: name, num: num})}>
                    <Text style={styles.buttonText}>
                        Add Card
                    </Text>
                </TouchableHighlight>

 <TouchableOpacity style={styles.deleteButton} onPress={() => {
                decks.splice(num, 1);
                this.props.navigation.navigate('DeckList')
              }}>
                   <Text style={styles.buttonText}>DELETE</Text> 
        </TouchableOpacity>

                  <TouchableHighlight 
                    style={styles.screenButton}
                   onPress={()=> navigation.navigate('DeckList')}>
                    <Text style={styles.buttonText}>
                        Go back to Deck List
                    </Text>
                </TouchableHighlight>

               

            </View>
        );
    }
}

const styles = StyleSheet.create({

  title: {
  fontsize: '1.5',
  textalign: 'center',
  color: 'black',
  fontSize: 26,
  marginRight:45,
  marginLeft:40
 },
  wrapper: {
  flex: 1,
  justifyContent: 'center',
  background: '#faebd7'
  },
    screenButton:{
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  deleteButton:{
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#dc143c',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
   
    
    buttonText: {
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }

})
export default Deck