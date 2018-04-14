import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    InteractionManager,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';

// import { RNCamera } from 'react-native-camera';
export default class Profile extends React.Component {

    static navigationOptions = {
        title: 'Login'
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }


    async setThisState() {
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
            <View style={styles.wrapper}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={this.toggleDropdown}><Text style={styles.headerTitle} >  &#9776;  </Text></TouchableOpacity>
                    <Text style={styles.headerTitle}>LifeLiner</Text>
                </View>

                <View style={styles.container}>
                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.text}>{this.state.username}s Profile</Text>
                    </View>
                    <Text style={styles.text}>asldjkjbnawdlkbawd</Text>
                </View>

            </View>
        );
    }
}

function toggleDropdown(){

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#74b9ff',
    },
    headerContainer: {
        marginTop: Expo.Constants.statusBarHeight,
        backgroundColor: "#0984e3",
        flexDirection: 'row',
        padding: 5,
    },
    text: {
        color: '#fff',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 5,
        color: "#FFF",
    },
    loggedIn: {
        fontSize: 10,
        fontWeight: 'bold',
        padding: 5,
        color: "#FFF",
        alignSelf: "flex-end",
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#9bffdd',
        padding: 20,
        alignItems: 'center',
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
    },
    logo: {
        width: 50,
        height: 50,
        alignSelf: "flex-end",
    },
});