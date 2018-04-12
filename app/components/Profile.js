import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';


export default class Profile extends React.Component {
    
    static navigationOptions = {
        title: 'Login',
    }

    render() {

        const { params } = this.props.navigation.state;
        const username = params ? params.username: null;
        const password = params ? params.password: null;

        //Doesn't save name if app reloads.
        
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{username}s Profile</Text>
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
        backgroundColor: '#3d99cc',
        paddingLeft: 40,
        paddingRight: 40,
    },
    text: {
        color: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#9bffdd',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 5,
    }
});