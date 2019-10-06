import React, { Component } from 'react';
import { Button, View, Text, Dimensions, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get('window')
import { Card, } from 'react-native-elements'
var RNFS = require('react-native-fs')

class UserData extends Component {
  static navigationOptions = {
    title: 'Welcome ',
  };
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
   this.getUserData();
}

getUserData(){
    RNFS.readDir(RNFS.DocumentDirectoryPath + '/UserForm.json') 
  .then((result) => {
    console.log('GOT RESULT', result);
    var data = JSON.parse(result)
    
    
    this.setState({
        dataSource: data
    })
    // stat the first file
   
  })  
  .catch((err) => {
    console.log(err.message, err.code);
  });
}
  render() {
    const { navigate } = this.props.navigation;   
    return (
     
      <View>
        
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => {
            let name = item.finalName
            let email = item.finalEmail
            return(
           
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>       
            <Card>
            <TouchableOpacity            
            >
            <Text>{name}</Text>
            <Text>{email}</Text>
            </TouchableOpacity>
           
            </Card> 
             
            </View>
          )}}
          //Setting the number of column
        
          keyExtractor={(item, index) => index.toString()}
        />

      </View>
    );
  }
}


export default UserData
