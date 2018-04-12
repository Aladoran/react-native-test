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



export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }

        // AsyncStorage.setItem('username', this.state.username);
        // AsyncStorage.setItem('password', this.state.password);
    }



    // componentDidMount() {
    //     this._loadInitialState().done();
    // }

    // _loadInitialState = async () => {

    //     var value = await AsyncStorage.getItem('user');
    //     if (value !== null) {
    //         this.props.navigation.navigate('Profile');
    //     }
    // }



    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

                <View style={styles.container}>

                    <Text style={styles.header}> LifeLiner </Text>

                    <TextInput
                        style={styles.textInput} placeholder='Username'
                        onChangeText={(username) => this.setState({ username })}
                        underlineColorAndroid='transparent' />

                    <TextInput
                        style={styles.textInput} placeholder='Password'
                        onChangeText={(password) => this.setState({ password })}
                        underlineColorAndroid='transparent' />


                    <TouchableOpacity style={styles.btn}
                        onPress={this.login}>
                        <Text>Log in</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        );
    }

    getLoginUser = () =>{

        var users = require('../../users.json');
        var jUsers = JSON.stringify(users);
        

        for (var i = 0; i < users.length; i++){

            if(users[i].username === this.state.username){
                if(users[i].username === this.state.username && users[i].password === this.state.password)
                {
                    this.props.navigation.navigate('Profile');
                    AsyncStorage.setItem('username', this.state.username);
                    AsyncStorage.setItem('password', this.state.password);
                    return;
                }
                else{alert("Wrong username or password"); return;}
            }
            else{alert("Wrong username or password"); return;}
        }
    }

    login = () => {

        this.getLoginUser();
        
        
        

        // fetch('http://localhost:3000/api/users')
        
        // .then(response => {
        //     console.log("success!!!");
        //     console.log(response);
        //     return response.json();
        // })
        // .catch(err => {
        //     console.log("ERROR");
        //     console.log(err);
        // });
        // fetch('localhost:3000/api/users', {
        // method: 'GET',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({
        //     username: this.state.username,
        //     password: this.state.password,
        // })
        // })

        // .then((response) => response.json())
        // .then((res) => {

        //     if(res.success === true) {
        //         AsyncStorage.setItem('user', res.user);
        //         this.props.navigation.navigate('Profile');
        //     }

        //     else {
        //         alert(res.message);
        //     }
        // })
        // .done();



        //________________________________________________________________________


        // console.log("Username input: " + this.state.username);

        // if (this.state.username === 'Admin' && this.state.password === "Pass") {
        //     this.props.navigation.navigate('Profile');
        // }
        // else if (this.state.username !== 'Admin') {
        //     alert('Username doesn\'t exist');
        // }
        // else {
        //     alert('Password is incorrect');
        // }
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
        backgroundColor: '#3d99cc',
        paddingLeft: 40,
        paddingRight: 40,
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
        backgroundColor: '#9bffdd',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 5,
    }
});