import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    InteractionManager
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';
// import { RNCamera } from 'react-native-camera';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }


    async setThisState(){
            await AsyncStorage.getItem('username')
                .then((username) => {
                    this.setState({ "username": username });
            })
                .catch((error) => {
                    console.error(error);
                  });
    }

    render() {
        //Fetches the username from the asyncStorage and sets this screens prop state to
        //username.
        this.setThisState();

        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>{this.state.username}s Profile</Text>


                </View>
            </View>
        );
    }



}




const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: Expo.Constants.statusBarHeight,
        backgroundColor: '#74b9ff',
    },
    text: {
        color: '#fff',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        alignItems: 'center',
        alignItems: 'baseline',
        marginTop: 10,
    },
    view: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    capture: {
        flex: 0,
        backgroundColor: "steelblue",
        borderRadius: 10,
        color: "red",
        padding: 15,
        margin: 45,
    }
});