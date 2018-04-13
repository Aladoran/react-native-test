import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Image,
    InteractionManager,
} from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class Login extends React.Component {


    static navigationOptions = {
        title: 'Login',
    }


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }



    componentDidMount() {
        this._loadInitialState().done();
    }

    //     var value = await AsyncStorage.getItem('username');
    //     if (value !== null) {
    //         this.props.navigation.navigate('Profile');
    //     }
    // }
    _loadInitialState(){
        var value = await AsyncStorage.getItem('username');
        if (value !== null) {
            this.props.navigation.navigate('Profile');
        }
    }


    render() {
        //Remove this on live, persons will only log out if they press "log out".
        AsyncStorage.clear();

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>

                <View style={styles.logoContainer}>

                    <Image
                        style={styles.logo}
                        source={require('./images/LL.png')} />
                </View>
                <Text style={styles.header}> LifeLiner </Text>

                <TextInput
                    style={styles.textInput} placeholder='Username'
                    onChangeText={(username) => this.setState({ username })}
                    underlineColorAndroid='transparent'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.textInput} placeholder='Password'
                    onChangeText={(password) => this.setState({ password })}
                    underlineColorAndroid='transparent'
                    secureTextEntry
                    returnKeyType="go"
                    autoCapitalize="none"
                    ref={(textInput) => this.passwordInput = textInput}
                    onSubmitEditing={() => this.login()} />

                <TouchableOpacity style={styles.btn}
                    onPress={this.login}>
                    <Text style={styles.text}>Log in</Text>
                </TouchableOpacity>


            </KeyboardAvoidingView>
        );
    }

    getLoginUser = () => {

        var users = require('../../users.json');
        var jUsers = JSON.stringify(users);

        noUser = false;

        for (var i = 0; i < users.length; i++) {

            if (users[i].username === this.state.username) {
                if (users[i].username === this.state.username && users[i].password === this.state.password) {
                    
                        this.props.navigation.navigate('Profile');
                    AsyncStorage.setItem('username', this.state.username);
                    AsyncStorage.setItem('password', this.state.password);
                    return;
                }
                else {noUser = true;}
            }
            else {noUser = true;}
        }
        if (noUser === true){
        alert("Wrong username or password");
    }
    }

    login = () => {

        this.getLoginUser();
    }
}




const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#74b9ff',
        paddingLeft: 40,
        paddingRight: 40,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#0984e3',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 5,
    },
    text: {
        color: '#fff',
    },
});