import React, { Component } from 'react';
import { Button, View, Text, Dimensions, FlatList, Image, StyleSheet } from "react-native";
var deviceWidth = Dimensions.get('window').width
var deviceHeight= Dimensions.get('window').height

// var dataSource = []
class Description extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor() {
    super();
    this.state = {
     heading: '',
     body: ''
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', null);
    const userId = navigation.getParam('userId', null);
    console.log(id, " id");

    this.getPosts(userId,id)
  }
  async getPosts(userId,id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${id}`);
      const responseJson = await response.json();
      // set the state of the output here
      const title = responseJson[0].title
      const post = responseJson[0].body
      
    
      this.setState({
       heading: title,
       body: post
      });
     
    }
    catch (error) {
      console.error(error);
    }
  }



  render() {
    const { navigate } = this.props.navigation;
    
    return (

      <View>
        <Text style={styles.heading}>{this.state.heading}</Text>
        <Text style={styles.body}>{this.state.body}</Text>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    justifyContent: 'center',  
    paddingTop: 30,
    margin:deviceHeight * 0.02,
    fontSize: 20
  },
  body: {
    margin:deviceHeight * 0.02,
  },
});

export default Description
