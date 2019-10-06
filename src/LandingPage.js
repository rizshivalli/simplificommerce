import React, { Component } from 'react';
import { Button, View, TextInput, Text, Dimensions, StyleSheet, Picker, CheckBox } from "react-native";
// import { CheckBox } from 'react-native-elements'

var deviceWidth = Dimensions.get('window').width
var deviceHeight = Dimensions.get('window').height
import { Overlay } from 'react-native-elements';
var RNFS = require('react-native-fs');

const termsandConditions = `1) The Intellectual Property disclosure will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.

2) A Termination clause will inform that users’ accounts on your website and mobile app or users’ access to your website and mobile (if users can’t have an account with you) can be terminated in case of abuses or at your sole discretion.

3) A Governing Law will inform users which laws govern the agreement. This should the country in which your company is headquartered or the country from which you operate your website and mobile app.

4) A Links To Other Web Sites clause will inform users that you are not responsible for any third party websites that you link to. This kind of clause will generally inform users that they are responsible for reading and agreeing (or disagreeing) with the Terms and Conditions or Privacy Policies of these third parties.

5) If your website or mobile app allows users to create content and make that content public to other users, The “Content” clause usually mentions that users must give you (the website or mobile app developer) a license so that you can share this content on your website/mobile app and to make it available to other users.
`

class LandingPage extends Component {
    static navigationOptions = {
        title: 'Landing Page',
        headerLeft: null
    };
    constructor() {
        super();
        this.state = {
            isVisible: true,

        };
    }
    closeOverlay() {
        this.setState({
            isVisible: false
        })
    }


    render() {
        const { navigate } = this.props.navigation;
        // if (this.state.isVisible == true){
        //     return(
        //         <Overlay isVisible={this.state.isVisible}>
        //     <Text>Hello from Overlay!</Text>
        //   </Overlay>
        //     )
        // }
        return (
            <View style={styles.mainView}>
                <Overlay isVisible={this.state.isVisible}>
                    <Text>{termsandConditions}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Button
                            title='Accept'
                            onPress={() =>
                                this.closeOverlay()
                            } />
                        <Button
                            title='Reject'
                            onPress={() =>
                                this.closeOverlay() + navigate('Login')
                            } />
                    </View>

                </Overlay>
                <Text style={{fontSize:25}}>Where would you like to go?</Text>
                <View style={{justifyContent:'space-around', flex:1}}>
                <View style={styles.childView}>
                    <Button
                        title='View Posts'
                        onPress={() =>
                          navigate('List')
                        } 
                    />
                    <Button
                        title='View Images'
                        onPress={() =>
                            navigate('Image')
                          } 
                    />
                </View>

                <View style={styles.childView}>
                <Button
                    title='Insert Data'
                    onPress={() =>
                        navigate('Form')
                      } 
                />
                <Button
                    title='View Data'
                    onPress={() =>
                        navigate('UserData')
                      } 
                />
            </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: deviceHeight * 0.05, // 5 percentage of the screen height
        marginBottom: deviceHeight * 0.05,
        marginLeft: deviceWidth * 0.05,  // 5 percentage of the screen width
        marginRight: deviceWidth * 0.05,
    },
    childView: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },

});

export default LandingPage;