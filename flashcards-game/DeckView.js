import * as React from 'react';
import {StyleSheet, Button,Text, View, ScrollView, TouchableHighlight,TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import{FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import decks from './flashcards';
class DeckView extends React.Component {
    state ={
      num:0,
      right:[],
      wrong:[],
      hide: false,
      score: 0,
      time: 0
    }

toggleAnswer = () => {
		this.setState(prev => ({hide: !prev.hide}))
   
	}
 
showAnswer =() =>{
  this.setState({num: this.state.num + 1})
}

 nextRight =(question) =>{

  
 this.setState({time: Date.now() - this.state.time})
  
  this.setState({num: this.state.num + 1});
  this.setState({hide: false});
  this.setState({score: this.state.score + 1})

  question.time= this.state.time
  this.state.right.push(question)
   
}


nextWrong =(question) =>{

  this.setState({time: Date.now() - this.state.time})
 
  this.setState({num: this.state.num + 1});
  this.setState({hide: false});

  question.time= this.state.time
  this.state.wrong.push(question)
 
}
 finishGame =() =>{
   this.setState({num: 0});
   this.setState({score: 0});
   this.setState({hide: false});
   
   this.state.wrong.sort(function(a, b) {
      return b.time - a.time;
    });
    this.state.right.sort(function(a, b) {
      return b.time - a.time;
    });
    
   const array = this.state.wrong.concat(this.state.right);
   
   this.props.navigation.navigate('DeckView', {deck: array})
   
}
  restartGame = (deck, num, questions) =>{

   this.setState({num: 0});
   this.setState({score: 0});
   this.setState({hide: false});
   const d= deck.length;
   deck.splice(0, num)
   
   const array = this.state.wrong.concat(deck).concat(this.state.right);
   
   this.props.navigation.navigate('DeckView', {deck: array})
  
}
deleteCard = ( deck, num, name) => {
  
     deck.splice(num,1)
    
    this.props.navigation.navigate('DeckView', {num: num, name: name, deck: deck})
}


  render(){

const { hide } = this.state;

 const { navigation } = this.props;

        const deck = navigation.getParam('deck');
        const name = navigation.getParam('name');
      
 

 if (deck.length===0) {return(
  <>
   <Text style={styles.answers}>      There are no cards
   </Text> 

  <TouchableHighlight 
                    style={styles.screenButton}
                   onPress={()=> navigation.navigate('DeckList')}>
                    <Text style={styles.buttonText}>
                        Go back to Deck List
                    </Text>
                </TouchableHighlight>
                </>
 )}
 else if (this.state.num > deck.length-1) {

      return (
        <>
         <Text style={styles.answers}> Game Over your Final score is {this.state.score} points out of {deck.length}</Text>
          
           <TouchableOpacity style={styles.finishButton} onPress={()=> this.finishGame()}>
            <Text style={styles.text}>TRY AGAIN</Text>
            
          </TouchableOpacity>

  <TouchableHighlight 
                    style={styles.finishButton}
                   onPress={()=> navigation.navigate('DeckList')}>
                    <Text style={styles.buttonText}>
                        Go back to Deck List
                    </Text>
                </TouchableHighlight>
                </>

      );
    } else {

   return (

            <View>
                <ScrollView>
                      <View> 

                      
                      {!hide?(

          <Text style={styles.answers}>{deck[this.state.num].front}</Text>
        ) : null}                            
                           
                           	{this.state.hide?(
          <Text style={styles.answers}>{deck[this.state.num].back}</Text>
        ) : null} 
          <TouchableOpacity style={styles.screenButton} onPress={this.toggleAnswer}> 

            
                  <Text style={styles.text}>FLIP</Text>
          </TouchableOpacity>
            {hide?(
              <>
          <TouchableOpacity style={styles.rightButton} onPress={()=> this.nextRight(deck[this.state.num])}>            
                   <Text style={styles.rightText}>RIGHT</Text>
          </TouchableOpacity>
                              
         <TouchableOpacity style={styles.wrongButton} onPress={()=> this.nextWrong(deck[this.state.num])}>
                   <Text style={styles.wrongText}>WRONG</Text>
         </TouchableOpacity>
               </>     ) : null} 
<TouchableOpacity style={styles.deleteButton} onPress={()=> this.deleteCard(deck,this.state.num, name)}>
                   <Text style={styles.text}>DELETE CARD</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.screenButton} onPress={()=> this.restartGame(deck, this.state.num, deck[this.state.num])}>
                   <Text style={styles.text}>RESTART</Text>
         </TouchableOpacity>

         <TouchableHighlight 
                    style={styles.screenButton}
                   onPress={()=> navigation.navigate('DeckList')}>
                    <Text style={styles.buttonText}>
                        Go back to Deck List
                    </Text>
                </TouchableHighlight>

                          </View>
                    
                </ScrollView>
            </View>
        );
  }}}
  const styles = StyleSheet.create({
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
  rightButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#1E6738'
  },
    finishButton:{
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
    wrongButton:{
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#dc143c'
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
  },
     wrongText: {
      color:'#dc143c',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
     rightText: {
      color:'#1E6738',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  text:{
      color:'white',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }, answers:{
      color:'black',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      paddingTop: 60,
      margin: 20
  }});
  export default DeckView