import React, { Component } from 'react';
import { Button, View, Text, Dimensions, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get('window')
import { Card, } from 'react-native-elements'


class ListView extends Component {
  static navigationOptions = {
    title: 'Welcome '
  };
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    let username = navigation.getParam('username', null);    
    this.getPosts()
}
  async getPosts() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseJson = await response.json();
    // set the state of the output here
    this.setState({
      dataSource: responseJson
    });
    console.log(this.state.dataSource);
  }
  catch (error) {
    console.error(error);
  }
}

  render() {
    const { navigate } = this.props.navigation;   
    return (
     
      <View>
        
        <FlatList
          data={this.state.dataSource}

          renderItem={({ item }) => {
            let id = item.id
            let userId = item.userId
            return(
           
            <View style={styles.MainContainer}>       
            <Card>
            <TouchableOpacity 
            onPress={() => {
             console.log(item.id)
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Post', {
                 id:id,
                 userId: userId          
                });
            
          }}
            >
            <Text>{item.title}</Text>
            </TouchableOpacity>
           
            </Card> 
             
            </View>
          )}}          
        
          keyExtractor={(item, index) => index.toString()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: 
    { flex: 1,
      flexDirection: 'column',
       margin: 1 
    },
 
});

export default ListView
