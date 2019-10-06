/*This is an Example of Grid View in React Native*/
import React, { Component, PureComponent } from 'react';
//import rect in our project
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
} from 'react-native';
//import all the components we will need
var dataSource
export default class ImageGridView extends PureComponent {
    constructor() {
        super();
        this.state = {
            dataSource: [],
        };
    }


    componentDidMount() {
        this.getImages()
    }
    getImages() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((responseJson) => {
                // set the state of the output here
                this.setState({
                    dataSource: responseJson
                });
                
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <FlatList
                    data={this.state.dataSource}
                    extraData={this.state}
                    initialNumToRender={100}
                    refreshing={true}
                    onEndReachedThreshold={1}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                            <Image style={styles.imageThumbnail} source={{ uri: item.url }} />
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },

    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});