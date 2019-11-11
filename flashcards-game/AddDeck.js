import * as React from 'react';
import {StyleSheet,KeyboardAvoidingView, Text, View, ScrollView, Button, FlatList,TextInput,
    TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import decks from './flashcards';



class AddDeck extends React.Component {

    state = {
        name: '',
        cards: [], 
        valid: false
    }

  
    handleDeckChange = name => {
        this.setState({name: name}, this.validateForm)
    }

    validateForm = () => {
        const formValid = ( this.state.name.length >= 1)
        this.setState({valid: formValid})  
    }

    handleSubmit = () => {
     
     decks.push({ name: this.state.name, cards: [] })
     
     this.props.navigation.navigate('DeckView',{deck: [], name: this.state.name})
     this.setState({name: '', valid: false})
    }

    render() {
     
        return (

            <View style={styles.wrapper}>
                <Text style={styles.title}>              ADD DECK </Text>
                <TextInput 
                        style={styles.input} 
                        value={this.state.name}
                        onChangeText={this.handleDeckChange}
                        />

                <Button 
                        title="Add Deck"
                        onPress={this.handleSubmit}
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
  export default AddDeck