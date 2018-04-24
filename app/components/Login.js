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
    Alert,
} from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class Login extends React.Component {


    static navigationOptions = {
        title: 'Login',
    }


    constructor(props) {
        super(props);
        this.state = {
            username: 'Admin',
            password: 'Pass',
        }
    }



    componentDidMount() {
        // this._loadInitialState().done();
    }

    _loadInitialState() {
        // var value = await AsyncStorage.getItem('username');
        // if (value !== null) {
        //     this.props.navigation.navigate('Profile');
        // }
    }


    render() {
        //Remove this on live, persons will only log out if they press "log out".
        AsyncStorage.clear();

        return (
            <View style={styles.wrapper}>
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

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>LifeLiner &#169;2018</Text>
                    </View>

                </KeyboardAvoidingView>

            </View>

        );
    }

    getLoginUser = async () => {

        var users = require('../../users.json');

        noUser = false;

        for (var i = 0; i < users.length; i++) {

            if (this.state.username === "" || users[i].username === this.state.username) {
                if (this.state.password === "" || users[i].username === this.state.username && users[i].password === this.state.password) {

                    AsyncStorage.setItem('username', this.state.username);
                    AsyncStorage.setItem('password', this.state.password);

                    if (this.state.username === "") {
                        AsyncStorage.setItem('username', "Admin");
                        AsyncStorage.setItem('password', "Pass");
                    }

                    this.props.navigation.navigate('Profile');
                    return;
                }
                else { noUser = true; }
            }
            else { noUser = true; }
        }
        if (noUser === true) {
            alert("Wrong username or password");
        }
    }

    login = () => {
        this.getLoginUser();
    }

    // getLoginUser = () => {
    //     return fetch('https://facebook.github.io/react-native/movies.json')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             return responseJson.movies;
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }
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
    footer: {
        alignSelf: "center",
        alignItems: "center",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
    },
    footerText: {
        color: "#fff",
        fontSize: 10,
        marginBottom: 15,
    },
});