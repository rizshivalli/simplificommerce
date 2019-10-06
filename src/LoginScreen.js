import React, { Component } from 'react';
import { Button, View, TextInput, Text, Dimensions, StyleSheet, Alert } from "react-native";
import { validate } from '@babel/types';

var deviceWidth = Dimensions.get('window').width
var deviceHeight = Dimensions.get('window').height

console.log(deviceWidth, +" " + deviceHeight)
class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',

  };
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  validateLogin() {
    if (this.state.username == "" || this.state.password == "") {
      Alert.alert(
        'Error',
        'Please enter username and passowrd',
        [
          { text: "Okay", onPress: () => console.log("Please enter username and passowrd") },

        ],
        { cancelable: false }
      );

    } else {
      this.props.navigation.navigate('LandingPage', {
        username: this.state.username,
      })
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        // style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}
        style={styles.mainView}
      >
        <Text>Login</Text>
        <TextInput

          onChangeText={(username) => this.setState({ username: username })}
          placeholder='Username'

        />
        <TextInput
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password: password })}
          placeholder='Password'


        />
        <Button
          title='Login'
          onPress={() =>
            this.validateLogin()
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-end',
    //alignItems:'center',
    marginTop: deviceHeight * 0.05, // 5 percentage of the screen height
    marginBottom: deviceHeight * 0.05,
    marginLeft: deviceWidth * 0.05,  // 5 percentage of the screen width
    marginRight: deviceWidth * 0.05,
  }

});

export default LoginScreen;