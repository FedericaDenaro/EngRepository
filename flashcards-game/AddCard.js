import * as React from 'react';
import {StyleSheet,KeyboardAvoidingView, Text, View, ScrollView, Button, FlatList,TextInput,
    TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import decks from './flashcards';


class AddCard extends React.Component {

    state = {
        front: '',
        back:'',
       valid: false
    }

  
     handleFrontChange = front => {
        this.setState({front: front}, this.validateForm)
    }

    handleBackChange = back => {
       
            this.setState({back: back}, this.validateForm)
    }

    validateForm = () => {
      if (this.state.back.length >= 3 
            && this.state.front.length >= 3) return(
        this.setState({valid: true})  )
    }
    
  submit = (name, num) => {
  const newDeck=
    decks[num].cards.push({front:this.state.front, back: this.state.back})
    this.props.navigation.navigate('DeckList', {num: num, name: name, deck: newDeck })
     
    }

    render() {
        const { navigation } = this.props;
        const deck = navigation.getParam('deck');
        const name = navigation.getParam('name');
        const num = navigation.getParam('num');
    
  
        return (

            <View style={styles.wrapper}>
                <Text style={styles.title}>              ADD CARD </Text>
                  <Text style={styles.title}>  Question: </Text>
                <TextInput 
                        style={styles.input} 
                        value={this.state.front}
                        onChangeText={this.handleFrontChange}
                        />
                          <Text style={styles.title}> Answer: </Text>
                       <TextInput 
                        style={styles.input} 
                        value={this.state.back}
                        onChangeText={this.handleBackChange}
                        />
                <Button 
                        title="Add Card"
                       onPress={()=> this.submit(name,num)}
                        disabled={!this.state.valid}
                     />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 20
    },

  title: {
  fontsize: '1.5',
  textalign: 'center',
  color: 'black',
  fontSize: 26

 },
  wrapper: {
  flex: 1,
  justifyContent: 'center',
  background: '#faebd7'
}});
  export default AddCard