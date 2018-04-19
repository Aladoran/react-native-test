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
    Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';
import { ImagePicker } from 'expo';

// import { RNCamera } from 'react-native-camera';
export default class Profile extends React.Component {
    state = {
        image: null,
    };

    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            marginTop: Expo.Constants.statusBarHeight
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }

    componentWillMount(){
        this.setThisState();
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
        let { image } = this.state;

        return (

            <View style={styles.wrapper}>

                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('./images/LL.png')}
                    />
                    <Text style={styles.headerText}>LifeLiner</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{this.state.username}s Profile</Text>


                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this._pickImage}
                    >
                        <Text style={styles.text}>Pick an image to upload.</Text>
                    </TouchableOpacity>

                    {image &&
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

                </View>

            </View>

        );
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
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
        alignItems: "center",
        paddingLeft: 40,
        paddingRight: 40,
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
    logo: {
        width: 25,
        height: 25,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
    },
    header: {
        backgroundColor: "#0984e3",
        marginTop: Expo.Constants.statusBarHeight,
        flexDirection: 'row',
        padding: 3,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
    },

    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#0984e3',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
});