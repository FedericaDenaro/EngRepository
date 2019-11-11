import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet, TextInput
} from 'react-native'
import decks from './flashcards';


class Rename extends Component {


  state = {
        rename: '',
        cards: [], 
        valid: false,
        decks:[],
        num: 0,
    }

 
    handleNameChange = name => {
        this.setState({rename: name}, this.validateForm)
    }

    validateForm = () => {
        const formValid = ( this.state.rename.length >= 1)
        this.setState({valid: formValid})  
    }

     rename = (n,deck) => {

     n.name= this.state.rename
     
     this.props.navigation.navigate('DeckList', {num: n, name: this.state.rename, deck: deck})
     this.setState({name: '', valid: false})
    }


    render() {
      const { navigation } = this.props;

        const deck = navigation.getParam('deck');
        const name = navigation.getParam('name');
        const num = navigation.getParam('num');
        
 
    return (<View style={styles.wrapper}>
                <Text style={styles.title}>
                    {name}
                </Text>
                
            <TextInput 
                        style={styles.input} 
                        value={this.state.rename}
                        onChangeText={this.handleNameChange}
                        />

                <TouchableHighlight disabled={!this.state.valid}
                    style={styles.screenButton}
                   onPress={()=> this.rename(decks[num],deck)}>
                    <Text style={styles.buttonText}>
                        Rename
                    </Text>
                </TouchableHighlight>
                  

               

            </View>
        );    
    }
}
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
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 20
    },

  wrapper: {
  flex: 1,
  justifyContent: 'center',
  background: '#faebd7'
},  
title: {
        fontSize: 36,
        textDecorationLine: 'underline',
        
        borderBottomWidth: 2,
        
        borderTopWidth: 2,
        fontWeight: 'bold',
        
        textAlign: 'center'
    },
    
    buttonText: {
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }

})
export default Rename