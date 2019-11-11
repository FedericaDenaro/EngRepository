
import * as React from 'react';
import {SectionList,StyleSheet, Text, View, ScrollView, TouchableHighlight, FlatList,Dimensions } from 'react-native';
import Constants from 'expo-constants';


class Intro extends React.Component {
 render() {
        return (
<>
            <View style={styles.wrapper}>
                <Text style={styles.title}>              WELCOME TO FLASH CARDS GAME. 
                </Text>
              <Text style={styles.title}>                Press the button and start to learn. 
              </Text>

           </View>
         <View style={styles.wrapper}>
  <TouchableHighlight 
                    style={styles.screenButton}
                   onPress={()=> this.props.navigation.navigate('DeckList')}>
                    <Text style={styles.text}>
                        BEGIN
                    </Text>
                </TouchableHighlight>
                </View>
   </>
      );    
    }
}
const styles = StyleSheet.create({
  title: {
  fontsize: '1.5',
  textalign: 'center',
  color: '#e9967a',
 
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
  text:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }});

export default Intro