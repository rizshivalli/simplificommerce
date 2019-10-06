import React, { Component } from 'react';
import { Button, View, TextInput, Text, Dimensions, StyleSheet, Picker, CheckBox, Alert } from "react-native";
// import { CheckBox } from 'react-native-elements'

var deviceWidth = Dimensions.get('window').width
var deviceHeight = Dimensions.get('window').height
var formArray = []
import DatePicker from 'react-native-datepicker'
var RNFS = require('react-native-fs');



class Form extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor() {
        super();
        this.state = {
            name: '',
            dateOfBirth: '',
            gender: '',
            city: '',
            eMail: '',
            isTermsAccepted: false,

        };
    }
    saveLocal() {

        if (this.state.name == '') {
            console.log('Please emter name');
        } else if (this.state.dateOfBirth == "") {
            console.log('Please enter dateOfBirth');
        } else if (this.state.gender == "") {
            console.log('Please enter gender');
        } else if (this.state.eMail == "") {
            console.log('Please enter eMail');
        } else if (this.state.city == "") {
            console.log('Please enter city');
        }

    }

    AddItemsToArray = () => {

        let id = Math.floor(1000 + Math.random() * 9000);

        id = Math.floor(1000 + Math.random() * 9000);
        console.log(id)
        let finalName = this.state.name;
        let finalDOB = this.state.dateOfBirth;
        let finalGender = this.state.gender;
        let finalCity = this.state.city;
        let finalEmail = this.state.eMail;
        let finalIsTermsAccepted = this.state.isTermsAccepted


        var newArray = {
            id,
            finalName,
            finalGender,
            finalDOB,
            finalCity,
            finalEmail,
            finalIsTermsAccepted
        }
        formArray.push(newArray);
        console.log(formArray)
        var path = RNFS.DocumentDirectoryPath + '/UserForm.json';

        // write the file
        RNFS.writeFile(path, JSON.stringify(formArray), 'utf8')
            .then((success) => {
                console.log('FILE WRITTEN!');
                const { navigate } = this.props.navigation;
               
                Alert.alert(
                    'FILE WRITTEN! at ',
                    path,
                    [
                        { text: "Okay", onPress: () => navigate('LandingPage') },
        
                    ],
                    { cancelable: false }
                );
               
            })
            .catch((err) => {
                console.log(err.message);
            });

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
             
                style={styles.mainView}
            >
                <Text>User From </Text>
                <TextInput
                    onChangeText={(name) => this.setState({ name: name })}
                    placeholder='Name'

                />
                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.dateOfBirth}
                    mode="date"
                    placeholder="Date of birth"
                    format="YYYY-MM-DD"
                    minDate="1900-01-01"
                    maxDate="2019-10-06"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        
                    }}
                    onDateChange={(dateOfBirth) => { this.setState({ dateOfBirth: dateOfBirth }) }}
                />
                <View style={styles.childView}>
                    <Text>Gender</Text>
                    <Picker
                        selectedValue={this.state.gender}
                        style={{ height: 50, width: 100 }}
                        mode="dropdown"
                        onValueChange={(gender, itemIndex) =>
                            this.setState({ gender: gender })
                        }>
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                </View>
                <View style={styles.childView}>
                    <Text >City</Text>
                    <Picker
                        selectedValue={this.state.city}
                        style={{ height: 50, width: 100 }}
                        mode="dropdown"
                        onValueChange={(city, itemIndex) =>
                            this.setState({ city: city })
                        }>

                        <Picker.Item label="Hubballi" value="Hubballi" />
                        <Picker.Item label="Banglore" value="Banglore" />
                        <Picker.Item label="Mysore" value="Mysore" />
                        <Picker.Item label="Manglore" value="Manglore" />
                    </Picker>
                </View>

                <TextInput
                    onChangeText={(eMail) => this.setState({ eMail: eMail })}
                    placeholder='E-Mail'
                />
                <View style={styles.childView}>
                    <Text>Please accept the terms and conditions </Text>
                    <CheckBox
                        // onChange={this.setState({isTermsAccepted: !this.state.isTermsAccepted})}
                        value={this.state.isTermsAccepted}

                    />
                </View>

                <Button
                    title='Login'
                    onPress={() =>                      
                        this.AddItemsToArray()
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: deviceHeight * 0.05, 
        marginBottom: deviceHeight * 0.05,
        marginLeft: deviceWidth * 0.05,  
        marginRight: deviceWidth * 0.05,
    },
    childView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'

    },

});

export default Form;